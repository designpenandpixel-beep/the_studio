export const prerender = false;

// PBKDF2 password hashing using Web Crypto API (available in Vercel edge runtime)
const ITERATIONS = 100000;
const KEY_LENGTH = 32;
const DIGEST = 'SHA-256';

async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations: ITERATIONS, hash: DIGEST },
    key, KEY_LENGTH * 8
  );
  return Buffer.from(bits).toString('hex');
}

function generateSalt() {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Buffer.from(arr).toString('hex');
}

// HMAC session token signing
const SESSION_SECRET = import.meta.env.SESSION_SECRET || 'studio-fallback-secret-change-me';
const SESSION_TTL = 8 * 60 * 60 * 1000; // 8 hours

async function signToken(payload) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(SESSION_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const data = JSON.stringify(payload);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  const sigHex = Buffer.from(sig).toString('hex');
  return Buffer.from(JSON.stringify({ data, sig: sigHex })).toString('base64');
}

async function verifyToken(token) {
  try {
    const { data, sig } = JSON.parse(Buffer.from(token, 'base64').toString());
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', enc.encode(SESSION_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
    const valid = await crypto.subtle.verify('HMAC', key, Buffer.from(sig, 'hex'), enc.encode(data));
    if (!valid) return null;
    const payload = JSON.parse(data);
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

// Supabase helpers
function getSB() {
  const url = import.meta.env.SUPABASE_URL || '';
  const serviceKey = import.meta.env.SUPABASE_SERVICE_KEY || '';
  if (!url || !serviceKey) return null;
  return {
    url: url.replace(/\/+$/, ''),
    headers: {
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates,return=representation',
    },
  };
}

async function findUser(sb, identifier) {
  // Search by email, clientId, username, or name (use read-only headers)
  const readHeaders = { 'apikey': sb.headers.apikey, 'Authorization': sb.headers.Authorization, 'Accept': 'application/json' };
  const r = await fetch(`${sb.url}/rest/v1/studio_users?select=id,data&limit=50`, { headers: readHeaders });
  if (!r.ok) return null;
  const rows = await r.json();
  const id = identifier.toLowerCase();
  return rows.find(row => {
    const d = row.data;
    return d.active !== false && (
      d.email === identifier ||
      d.clientId === identifier ||
      d.username === identifier ||
      (d.name && d.name.toLowerCase() === id)
    );
  });
}

async function updateUser(sb, id, data) {
  await fetch(`${sb.url}/rest/v1/studio_users?id=eq.${encodeURIComponent(id)}`, {
    method: 'PATCH',
    headers: sb.headers,
    body: JSON.stringify({ data, updated_at: new Date().toISOString() }),
  });
}

async function logAudit(sb, event) {
  try {
    await fetch(`${sb.url}/rest/v1/studio_audit_log`, {
      method: 'POST',
      headers: { ...sb.headers, 'Prefer': 'return=minimal' },
      body: JSON.stringify(event),
    });
  } catch { /* audit logging should never block */ }
}

export async function POST({ request }) {
  try {
    const { action, ...params } = await request.json();
    const sb = getSB();

    if (action === 'login') {
      return await handleLogin(params, sb, request);
    }
    if (action === 'verify') {
      return await handleVerify(params);
    }
    if (action === 'hash') {
      return await handleHash(params);
    }
    if (action === 'change-password') {
      return await handleChangePassword(params, sb);
    }

    return json({ error: 'Unknown action' }, 400);
  } catch (e) {
    return json({ error: 'Auth error: ' + e.message }, 500);
  }
}

async function handleLogin({ identifier, password }, sb, request) {
  if (!identifier || !password) {
    return json({ error: 'Username and password required' }, 400);
  }

  // If no Supabase configured, fall back to client-side auth (return instruction)
  if (!sb) {
    return json({ fallback: true, message: 'Server auth not configured — using client-side auth' }, 200);
  }

  const row = await findUser(sb, identifier);
  if (!row) {
    await logAudit(sb, { event_type: 'login_failed', detail: `Unknown user: ${identifier}`, ip: getIP(request) });
    return json({ error: 'Invalid credentials' }, 401);
  }

  const user = row.data;
  let valid = false;

  if (user.passwordHash && user.passwordSalt) {
    // Hashed password — verify with PBKDF2
    const hash = await hashPassword(password, user.passwordSalt);
    valid = hash === user.passwordHash;
  } else if (user.password) {
    // Legacy plaintext — verify and migrate to hashed
    valid = user.password === password;
    if (valid) {
      // Auto-migrate to hashed password
      const salt = generateSalt();
      const hash = await hashPassword(password, salt);
      user.passwordHash = hash;
      user.passwordSalt = salt;
      delete user.password; // Remove plaintext
      await updateUser(sb, row.id, user);
      await logAudit(sb, { event_type: 'password_migrated', user_id: row.id, user_role: user.role, ip: getIP(request) });
    }
  }

  if (!valid) {
    await logAudit(sb, { event_type: 'login_failed', user_id: row.id, user_role: user.role, detail: 'Bad password', ip: getIP(request) });
    return json({ error: 'Invalid credentials' }, 401);
  }

  // Check if using default password
  const isDefault = password === 'admin123' && user.role === 'admin';

  // Generate signed session token
  const token = await signToken({
    userId: user.id || row.id,
    role: user.role,
    name: user.name,
    exp: Date.now() + SESSION_TTL,
  });

  await logAudit(sb, { event_type: 'login_success', user_id: row.id, user_role: user.role, ip: getIP(request) });

  return json({
    ok: true,
    token,
    user: { id: user.id || row.id, role: user.role, name: user.name },
    forcePasswordChange: isDefault,
  });
}

async function handleVerify({ token }) {
  if (!token) return json({ error: 'No token' }, 401);
  const payload = await verifyToken(token);
  if (!payload) return json({ error: 'Invalid or expired token' }, 401);
  return json({ ok: true, ...payload });
}

async function handleHash({ password }) {
  if (!password || password.length < 8) return json({ error: 'Password must be at least 8 characters' }, 400);
  const salt = generateSalt();
  const hash = await hashPassword(password, salt);
  return json({ hash, salt });
}

async function handleChangePassword({ token, newPassword }, sb) {
  if (!token || !newPassword) return json({ error: 'Token and new password required' }, 400);
  if (newPassword.length < 8) return json({ error: 'Password must be at least 8 characters' }, 400);

  const payload = await verifyToken(token);
  if (!payload) return json({ error: 'Invalid session' }, 401);

  if (!sb) return json({ error: 'Server auth not configured' }, 500);

  // Find user and update password
  const r = await fetch(`${sb.url}/rest/v1/studio_users?id=eq.${encodeURIComponent(payload.userId)}&select=id,data`, { headers: sb.headers });
  const rows = await r.json();
  if (!rows?.length) return json({ error: 'User not found' }, 404);

  const user = rows[0].data;
  const salt = generateSalt();
  const hash = await hashPassword(newPassword, salt);
  user.passwordHash = hash;
  user.passwordSalt = salt;
  delete user.password; // Remove any plaintext
  await updateUser(sb, rows[0].id, user);

  await logAudit(sb, { event_type: 'password_changed', user_id: payload.userId, user_role: payload.role, ip: '' });

  return json({ ok: true });
}

// Helpers
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function getIP(request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') || '';
}

// Export verifyToken for use by other API routes
export { verifyToken };

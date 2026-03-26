// Shared session token verification for API routes
const SESSION_SECRET = import.meta.env.SESSION_SECRET || 'studio-fallback-secret-change-me';

export async function verifySessionToken(token) {
  if (!token) return null;
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

// Extract token from Authorization header or x-session-token header
export function getToken(request) {
  const auth = request.headers.get('authorization') || '';
  if (auth.startsWith('Bearer ')) return auth.slice(7);
  return request.headers.get('x-session-token') || '';
}

// Middleware-style: returns session payload or null (doesn't block — routes decide)
export async function getSession(request) {
  const token = getToken(request);
  if (!token) return null;
  return verifySessionToken(token);
}

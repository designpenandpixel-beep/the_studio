export const prerender = false;
import { getSession } from '../../lib/auth.js';

export async function POST({ request }) {
  const sbUrl = import.meta.env.SUPABASE_URL;
  const sbKey = import.meta.env.SUPABASE_SERVICE_KEY;
  if (!sbUrl || !sbKey) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { event_type, target_id, detail } = await request.json();
    if (!event_type) {
      return new Response(JSON.stringify({ error: 'event_type required' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get session info if available
    const session = await getSession(request);
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') || '';

    const entry = {
      event_type,
      user_id: session?.userId || null,
      user_role: session?.role || null,
      target_id: target_id || null,
      detail: typeof detail === 'string' ? detail.substring(0, 500) : JSON.stringify(detail || '').substring(0, 500),
      ip,
    };

    await fetch(`${sbUrl.replace(/\/+$/, '')}/rest/v1/studio_audit_log`, {
      method: 'POST',
      headers: {
        'apikey': sbKey,
        'Authorization': `Bearer ${sbKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(entry),
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    // Audit logging should never block the user
    return new Response(JSON.stringify({ ok: true }), {
      status: 200, headers: { 'Content-Type': 'application/json' },
    });
  }
}

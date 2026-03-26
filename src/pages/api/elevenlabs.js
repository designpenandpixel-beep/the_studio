export const prerender = false;
import { getSession } from '../../lib/auth.js';

const ALLOWED_PATHS = [
  '/v1/text-to-speech/',
  '/v1/sound-generation',
];

export async function POST({ request }) {
  // Session validation
  if (import.meta.env.SESSION_SECRET) {
    const session = await getSession(request);
    if (!session) {
      return new Response(JSON.stringify({ error: 'Authentication required' }), {
        status: 401, headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  const elKey = import.meta.env.ELEVENLABS_KEY;
  const { path, body, clientKey } = await request.json();

  // Use server key, fall back to client key
  const apiKey = elKey || clientKey;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'No ElevenLabs API key configured. Set ELEVENLABS_KEY in environment.' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validate path against allowlist
  if (!path || !ALLOWED_PATHS.some(p => path.startsWith(p))) {
    return new Response(JSON.stringify({ error: 'Invalid ElevenLabs API path' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const url = `https://api.elevenlabs.io${path}`;
    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!r.ok) {
      const errText = await r.text();
      return new Response(JSON.stringify({ error: `ElevenLabs ${r.status}: ${errText.substring(0, 200)}` }), {
        status: r.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ElevenLabs returns audio as binary — forward as-is
    const contentType = r.headers.get('content-type') || 'audio/mpeg';
    const buf = await r.arrayBuffer();
    return new Response(buf, {
      status: 200,
      headers: { 'Content-Type': contentType },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'ElevenLabs proxy error: ' + e.message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

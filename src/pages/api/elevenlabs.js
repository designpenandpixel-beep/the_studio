export const prerender = false;
import { getSession } from '../../lib/auth.js';

const ALLOWED_PATHS = [
  '/v1/text-to-speech/',
  '/v1/sound-generation',
  '/v1/voices',
  '/v1/voices/settings/default',
];

export async function POST({ request }) {
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

  const apiKey = elKey || clientKey;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'No ElevenLabs API key configured.' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!path || !ALLOWED_PATHS.some(p => path.startsWith(p))) {
    return new Response(JSON.stringify({ error: 'Invalid ElevenLabs API path' }), {
      status: 403, headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const url = `https://api.elevenlabs.io${path}`;
    // Voice listing uses GET; everything else uses POST
    const isGet = path === '/v1/voices' || path.startsWith('/v1/voices/settings');
    const fetchOptions = {
      method: isGet ? 'GET' : 'POST',
      headers: { 'xi-api-key': apiKey, 'Content-Type': 'application/json' },
    };
    if (!isGet && body) fetchOptions.body = JSON.stringify(body);

    const r = await fetch(url, fetchOptions);

    if (!r.ok) {
      const errText = await r.text();
      return new Response(JSON.stringify({ error: `ElevenLabs ${r.status}: ${errText.substring(0, 200)}` }), {
        status: r.status, headers: { 'Content-Type': 'application/json' },
      });
    }

    const contentType = r.headers.get('content-type') || '';
    if (contentType.includes('application/json') || isGet) {
      const json = await r.json();
      return new Response(JSON.stringify(json), {
        status: 200, headers: { 'Content-Type': 'application/json' },
      });
    }

    const buf = await r.arrayBuffer();
    return new Response(buf, {
      status: 200, headers: { 'Content-Type': contentType || 'audio/mpeg' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'ElevenLabs proxy error: ' + e.message }), {
      status: 502, headers: { 'Content-Type': 'application/json' },
    });
  }
}

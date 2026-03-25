export const prerender = false;

const ALLOWED = ['https://queue.fal.run/', 'https://rest.fal.run/'];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function ALL({ request }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: CORS });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Use POST' }), {
      status: 405, headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400, headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }

  const { url, method = 'GET', body, authorization } = payload;

  if (!url || !ALLOWED.some(p => url.startsWith(p))) {
    return new Response(JSON.stringify({ error: 'Invalid target URL' }), {
      status: 400, headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }

  const headers = {};
  if (authorization) headers['Authorization'] = authorization;
  if (body) headers['Content-Type'] = 'application/json';

  try {
    const init = { method, headers };
    if (body) init.body = typeof body === 'string' ? body : JSON.stringify(body);

    const response = await fetch(url, init);
    const text = await response.text();

    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500, headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }
}

export const config = { runtime: 'edge' };

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const ALLOWED = ['https://queue.fal.run/', 'https://rest.fal.run/'];

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: CORS });
  }

  const { searchParams } = new URL(req.url);
  const target = searchParams.get('url');

  if (!target || !ALLOWED.some(prefix => target.startsWith(prefix))) {
    return new Response(JSON.stringify({ error: 'Invalid target URL' }), {
      status: 400,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }

  const headers = { 'Content-Type': 'application/json' };
  const auth = req.headers.get('Authorization');
  if (auth) headers['Authorization'] = auth;

  const init = { method: req.method, headers };
  if (req.method === 'POST') init.body = await req.text();

  try {
    const res = await fetch(target, init);
    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });
  }
}

const prerender = false;

const ALLOWED = ['https://queue.fal.run/', 'https://rest.fal.run/'];

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

async function OPTIONS() {
  return new Response(null, { status: 200, headers: CORS });
}

async function POST({ request }) {
  const { url, method = 'GET', body, authorization } = await request.json();

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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

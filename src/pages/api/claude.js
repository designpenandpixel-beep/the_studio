export const prerender = false;

// Restrict CORS to same-origin in production, allow localhost in dev
function getCorsOrigin(request) {
  const origin = request.headers.get('origin') || '';
  const allowed = [
    'https://the-studio-ten.vercel.app',
    'http://localhost:4321',
    'http://localhost:3000',
  ];
  return allowed.includes(origin) ? origin : allowed[0];
}

function corsHeaders(request) {
  return {
    'Access-Control-Allow-Origin': getCorsOrigin(request),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-api-key, anthropic-version',
    'Vary': 'Origin',
  };
}

export const OPTIONS = async ({ request }) => {
  return new Response(null, { status: 200, headers: corsHeaders(request) });
};

// Max request body size (256KB — generous for chat messages)
const MAX_BODY_SIZE = 256 * 1024;

export const POST = async ({ request }) => {
  const headers = corsHeaders(request);

  // Prefer server-side key from env, fall back to client-provided
  const serverKey = import.meta.env.CLAUDE_API_KEY || import.meta.env.ANTHROPIC_API_KEY;
  const clientKey = request.headers.get('x-api-key');
  const apiKey = serverKey || clientKey;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'No API key available. Configure CLAUDE_API_KEY in environment or provide x-api-key header.' }), {
      status: 401, headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.text();

    // Basic size validation
    if (body.length > MAX_BODY_SIZE) {
      return new Response(JSON.stringify({ error: 'Request body too large' }), {
        status: 413, headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // Validate JSON structure
    let parsed;
    try {
      parsed = JSON.parse(body);
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON in request body' }), {
        status: 400, headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    // Require model and messages fields
    if (!parsed.model || !Array.isArray(parsed.messages)) {
      return new Response(JSON.stringify({ error: 'Request must include model and messages array' }), {
        status: 400, headers: { ...headers, 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': request.headers.get('anthropic-version') || '2023-06-01',
      },
      body,
    });

    const text = await response.text();
    return new Response(text, {
      status: response.status,
      headers: { ...headers, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Proxy error: ' + e.message }), {
      status: 502, headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }
};

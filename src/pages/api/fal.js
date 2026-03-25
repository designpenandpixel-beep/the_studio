export const prerender = false

function getTargetUrl(request, contextUrl) {
    // Try query param from Astro context first
    const fromContext = contextUrl?.searchParams?.get('url')
    if (fromContext) return fromContext
    // Fallback: parse query param from request.url directly
    try {
        const parsed = new URL(request.url)
        const fromRequest = parsed.searchParams.get('url')
        if (fromRequest) return fromRequest
    } catch {}
    return null
}

export async function POST({ request, url }) {
    let targetUrl = getTargetUrl(request, url)
    const body = await request.json()
    const falKey = import.meta.env.FAL_KEY

    // If URL wasn't in query params, check if it's in the body
    if (!targetUrl && body.url) {
      targetUrl = body.url
    }

    if (!targetUrl) {
      return new Response(JSON.stringify({ error: 'Missing url parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
      })
    }

  const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
                'Authorization': `Key ${falKey}`,
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(body.url ? (body.body || body) : body)
  })
    const text = await response.text()
    try {
      const data = JSON.parse(text)
      return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
      })
    } catch {
      return new Response(JSON.stringify({ error: text.substring(0, 500) }), {
            status: response.status || 502,
            headers: { 'Content-Type': 'application/json' }
      })
    }
}

export async function GET({ request, url }) {
    const targetUrl = getTargetUrl(request, url)
    if (!targetUrl) {
      return new Response(JSON.stringify({ error: 'Missing url parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
      })
    }
    const falKey = import.meta.env.FAL_KEY

  const response = await fetch(targetUrl, {
        headers: { 'Authorization': `Key ${falKey}` }
  })
    const text = await response.text()
    try {
      const data = JSON.parse(text)
      return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' }
      })
    } catch {
      return new Response(JSON.stringify({ error: text.substring(0, 500) }), {
            status: response.status || 502,
            headers: { 'Content-Type': 'application/json' }
      })
    }
}

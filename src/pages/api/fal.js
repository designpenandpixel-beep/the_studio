export const prerender = false

export async function POST({ request, url }) {
    const targetUrl = url.searchParams.get('url')
    if (!targetUrl) {
      return new Response(JSON.stringify({ error: 'Missing url parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
      })
    }
    const body = await request.json()
    const falKey = import.meta.env.FAL_KEY

  const response = await fetch(targetUrl, {
        method: 'POST',
        headers: {
                'Authorization': `Key ${falKey}`,
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
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

export async function GET({ url }) {
    const targetUrl = url.searchParams.get('url')
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

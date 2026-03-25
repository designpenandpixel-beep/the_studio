export const prerender = false

export async function POST({ request }) {
    const { url, method = 'POST', body, authorization } = await request.json()

    if (!url) {
      return new Response(JSON.stringify({ error: 'Missing url' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
      })
    }

    const falKey = import.meta.env.FAL_KEY
    const options = {
      method,
      headers: {
              'Authorization': falKey ? `Key ${falKey}` : authorization,
              'Content-Type': 'application/json'
      }
    }

    if (method !== 'GET' && body) {
      options.body = JSON.stringify(body)
    }

    const response = await fetch(url, options)
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

export const prerender = false

async function handleRequest(request) {
    const reqUrl = new URL(request.url)
    const targetUrl = reqUrl.searchParams.get('url')
    if (!targetUrl) {
      return new Response(JSON.stringify({ error: 'Missing url parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
      })
    }

    const falKey = import.meta.env.FAL_KEY
    const bodyText = await request.text()
    const hasBody = bodyText.length > 0

    // No body = GET (status polling / result fetch)
    // Has body = POST (job submission)
    const options = {
      method: hasBody ? 'POST' : 'GET',
      headers: { 'Authorization': `Key ${falKey}` }
    }

    if (hasBody) {
      options.headers['Content-Type'] = 'application/json'
      options.body = bodyText
    }

    const response = await fetch(targetUrl, options)
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

export async function POST(context) {
    return handleRequest(context.request)
}

export async function GET(context) {
    return handleRequest(context.request)
}

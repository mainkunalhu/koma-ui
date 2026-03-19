export const runtime = "edge"

export async function POST(req: Request) {
  const encoder = new TextEncoder()

  const aiResponse = `Hi there! 👋 How can I help you today?

  Here is a quick example of some **Markdown formatting**:
  - We built a custom \`AiMessage\`
  - We are streaming text
  - It looks great!
`

  const customStream = new ReadableStream({
    async start(controller) {
      const chunks = aiResponse.split(" ")

      for (const chunk of chunks) {
        if (req.signal.aborted) {
          break
        }

        try {
          controller.enqueue(encoder.encode(chunk + " "))
          await new Promise((resolve) => setTimeout(resolve, 50))
        } catch (e) {
          break
        }
      }

      if (!req.signal.aborted) {
        controller.close()
      }
    },
    cancel() {},
  })

  return new Response(customStream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
    },
  })
}

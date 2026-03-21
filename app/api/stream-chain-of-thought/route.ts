export const dynamic = "force-dynamic"

export async function GET() {
  const encoder = new TextEncoder()
  const text = `Analyzing user request: Build a real-time analytics dashboard for user engagement.
Breaking down the required layout: a top navigation bar, a collapsible sidebar, and a main content grid for data visualizations.
Evaluating component library... The Koma UI library has pre-built Sidebar and Card components that fit this structure perfectly.
Considering state management for real-time updates. Since the data changes frequently, integrating Server-Sent Events (SSE) or WebSockets is optimal.
Structuring the main dashboard area using CSS Grid to ensure it remains responsive across mobile and desktop breakpoints.
Defining the core metric cards: Total Users, Active Sessions, Bounce Rate, and Conversion Rate.
Wait, the user explicitly mentioned handling high traffic loads.
Adjusting the architecture: I need to wrap the heavy data-fetching components in React.Suspense boundaries and provide loading skeletons to optimize the perceived performance.
Finalizing the data fetching layer using Next.js server components to minimize client-side javascript.
Reasoning complete. Preparing to generate final implementation.`

  const stream = new ReadableStream({
    async start(controller) {
      const chunks = text.split(" ")
      for (let i = 0; i < chunks.length; i++) {
        controller.enqueue(encoder.encode(chunks[i] + " "))
        await new Promise((resolve) => setTimeout(resolve, 80))
      }
      controller.close()
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache",
    },
  })
}

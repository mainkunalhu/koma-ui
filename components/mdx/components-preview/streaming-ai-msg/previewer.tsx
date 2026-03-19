"use client"

import { Activity, useEffect, useState } from "react"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import AiMessage from "../../components/ai-message"
import ThinkingLoader from "../../components/thinking-loader"

export function AiMessagePreview() {
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const handleStreamFetch = async () => {
      setContent("")
      setLoading(true)

      try {
        const response = await fetch("/api/stream", {
          method: "POST",
          body: JSON.stringify({ message: "Hello AI!" }),
          signal: controller.signal,
        })

        if (!response.body) throw new Error("No response body")

        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let done = false

        setLoading(false)

        while (!done) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone

          if (value) {
            const chunkValue = decoder.decode(value, { stream: true })
            setContent((prev) => prev + chunkValue)
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            console.log("Stream aborted because component unmounted.")
          } else {
            console.error("Stream failed:", error)
          }
        }
      }
    }

    handleStreamFetch()

    return () => {
      controller.abort()
      setContent("")
    }
  }, [])

  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-2 md:p-6">
        <div className="flex w-full flex-col gap-4">
          <div className="ml-auto w-fit rounded-2xl bg-card px-5 py-2 md:max-w-[75%]">Hello AI!</div>

          <Activity mode={!loading ? "hidden" : "visible"}>
            <div className="mr-auto w-fit p-3">
              <ThinkingLoader />
            </div>
          </Activity>

          <Activity mode={loading ? "hidden" : "visible"}>
            <AiMessage content={content} className="mr-auto w-[80%] md:max-w-[75%]" />
          </Activity>
        </div>
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

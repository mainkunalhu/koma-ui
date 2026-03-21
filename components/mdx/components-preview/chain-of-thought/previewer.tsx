"use client"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import ChainOfThought from "../../components/chain-of-thought"
import { useState, useEffect } from "react"

export function ChainOfThoughtPreview() {
  const [streamedText, setStreamedText] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    const fetchStream = async () => {
      setIsStreaming(true)
      setStreamedText("")

      try {
        const response = await fetch("/api/stream-chain-of-thought", {
          signal: controller.signal,
        })

        if (!response.body) return

        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let done = false

        while (!done) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone

          if (value) {
            const chunkValue = decoder.decode(value, { stream: true })
            setStreamedText((prev) => prev + chunkValue)
          }
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return
        }
        setStreamedText("Stream connection failed.")
      } finally {
        setIsStreaming(false)
      }
    }

    fetchStream()

    return () => {
      controller.abort()
    }
  }, [])
  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-2 md:p-6">
        <ChainOfThought text={streamedText} isLoading={isStreaming} defaultOpen={true} />
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

"use client"

import { GridBox, GridRootLayout } from "@/components/home-grid-layout"
import InputBox, { InputBoxToolType } from "@/components/mdx/components/input-box"
import ThinkingLoader from "@/components/mdx/components/thinking-loader"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Image as ImageIcon, Paintbrush, TerminalSquare } from "lucide-react"
import AiMessage from "@/components/mdx/components/ai-message"
import { useState, useEffect } from "react"
import ChainOfThought from "@/components/mdx/components/chain-of-thought"
import MutipleModelsInputBox from "@/components/mdx/components/mutiple-models-input-box"
import { modelSelectionData } from "@/components/mdx/components-preview"

const AI_TOOLS: InputBoxToolType[] = [
  {
    icon: Globe,
    value: "Web Search",
  },
  {
    icon: ImageIcon,
    value: "Create Images",
  },
  {
    icon: Paintbrush,
    value: "Canvas",
  },
  {
    icon: TerminalSquare,
    value: "Run Code",
  },
]

const aiResponse = `Hi there! 👋 Welcome to **Koma UI**. \n\nI can seamlessly render *markdown* and \`inline code\` right out of the box.`

export default function Page() {
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
    <main className="mx-auto max-w-6xl">
      <Navbar />
      {/*Heor Section*/}
      <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 p-5">
        <span className="text-sm font-semibold text-primary/80 md:text-lg">KOMA UI</span>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="text-3xl font-bold text-primary md:text-3xl lg:text-6xl xl:text-7xl">The UI Kit for Intelligent Applications</div>
          <div className="text-xs text-muted-foreground md:text-sm lg:text-lg">A collection of beautifully crafted AI components designed to handle uncertainty, streaming, and complex interactions. Built to be copied, customized, and extended. Open Source. Open Code.</div>
        </div>
        <div className="mx-auto flex flex-row items-center justify-center gap-4">
          <Link href={"/docs"}>
            <Button className="cursor-pointer rounded-sm">Quick Start</Button>
          </Link>
          <Link href={"/docs/components"}>
            <Button className="cursor-pointer rounded-sm" variant={"outline"}>
              Explore Components
            </Button>
          </Link>
        </div>
      </div>
      {/* components grid*/}
      <GridRootLayout>
        <GridBox>
          <ThinkingLoader />
        </GridBox>
        <GridBox className="border-none md:col-span-3">
          <InputBox tools={AI_TOOLS} />
        </GridBox>
        <GridBox className="min-h-44 md:col-span-4 md:min-h-36">
          <AiMessage content={aiResponse} className="w-[90%]" />
        </GridBox>

        <GridBox className="min-h-44 md:col-span-3 md:min-h-36">
          <MutipleModelsInputBox data={modelSelectionData} className="w-[90%]" />
        </GridBox>

        <GridBox className="p-4 text-wrap md:col-span-1">More Comming Soon</GridBox>
      </GridRootLayout>
    </main>
  )
}

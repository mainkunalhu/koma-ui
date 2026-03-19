"use client"

import { GridBox, GridRootLayout } from "@/components/home-grid-layout"
import InputBox, { InputBoxToolType } from "@/components/mdx/components/input-box"
import ThinkingLoader from "@/components/mdx/components/thinking-loader"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, Image as ImageIcon, Paintbrush, TerminalSquare } from "lucide-react"
import AiMessage from "@/components/mdx/components/ai-message"

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
        <GridBox className="min-h-44 md:col-span-2 md:min-h-36">
          <AiMessage content={aiResponse} className="w-[90%]" />
        </GridBox>
        <GridBox className="md:col-span-2">More Comming Soon</GridBox>
      </GridRootLayout>
    </main>
  )
}

"use client"

import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setHasCopied(true)
    } catch (err) {
      console.error("Failed to copy!", err)
    }
  }

  return (
    <button
      onClick={copyToClipboard}
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-white/10 bg-black/90 p-2 text-muted-foreground transition-colors hover:bg-black/80 hover:text-white/80 focus-visible:outline-none dark:bg-background dark:hover:bg-muted dark:hover:text-foreground",
        className
      )}
    >
      {hasCopied ? <Check className="size-3.5 text-green-500" /> : <Copy className="size-3.5" />}
      <span className="sr-only">Copy code</span>
    </button>
  )
}

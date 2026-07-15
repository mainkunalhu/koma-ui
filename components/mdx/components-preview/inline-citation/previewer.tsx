"use client"

import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import { InlineCitation } from "@/components/mdx/components/inline-citation"

export function InlineCitationPreview() {
  const source1 = {
    url: "https://react.dev/reference/react/useMemo",
    title: "useMemo – React",
    snippet: "useMemo is a React Hook that lets you cache the result of a calculation between re-renders."
  }

  const source2 = {
    url: "https://framer.com/motion",
    title: "Framer Motion",
    snippet: "A production-ready motion library for React. Utilize the power of Framer to create beautiful animations."
  }

  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-8 bg-muted/30">
        <div className="w-full max-w-2xl bg-background border border-border/50 rounded-xl p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-foreground">
            To optimize performance in React, you can use the <code className="bg-muted px-1 py-0.5 rounded text-xs">useMemo</code> hook to cache expensive calculations
            <InlineCitation source={source1} index={1} className="mx-1" />. 
            When combining React with animation libraries like Framer Motion
            <InlineCitation source={source2} index={2} className="mx-1" />, 
            you can create highly interactive and beautiful user interfaces with minimal code.
          </p>
        </div>
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

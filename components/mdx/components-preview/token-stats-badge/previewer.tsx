"use client"

import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import { TokenStatsBadge } from "@/components/mdx/components/token-stats-badge"

export function TokenStatsBadgePreview() {
  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-8 bg-muted/30">
        <div className="flex flex-col items-center justify-center gap-6">
          <TokenStatsBadge 
            tokensPerSecond={32} 
            latencyMs={1200} 
            cost={0.004} 
          />
        </div>
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

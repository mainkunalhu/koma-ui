import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code = `"use client"

import { CopilotWidget } from "@/components/ui/copilot-widget"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Your main application content */}
      <main className="p-8">
        {children}
      </main>

      {/* The floating copilot widget (fixed by default) */}
      <CopilotWidget 
        title="Sales Copilot"
        subtitle="Ask me about your pipelines!"
      />
    </div>
  )
}
`

export function CopilotWidgetUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

"use client"

import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import CopilotWidget from "../../components/copilot-widget"

export function CopilotWidgetPreview() {
  return (
    <CodePreviewRoot>
      {/* 
        We use a relative container with a fixed height here so the absolute 
        widget stays inside the preview card and doesn't break the layout.
      */}
      <CodePreviewer className="relative flex h-[600px] w-full items-center justify-center overflow-hidden bg-muted/20">
        <div className="absolute inset-0 flex items-center justify-center text-center p-8 text-muted-foreground/60">
          <p>
            This is a mock application page. <br />
            Click the floating button in the bottom right to interact with the Copilot!
          </p>
        </div>
        <CopilotWidget 
          position="absolute"
        />
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

"use client"

import * as React from "react"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import { PersonaSettingsDrawer } from "@/components/mdx/components/persona-settings-drawer"
import { Settings } from "lucide-react"

export function PersonaSettingsDrawerPreview() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-12 bg-muted/30 min-h-[400px]">
        <div className="flex flex-col items-center justify-center gap-6">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Settings className="h-4 w-4" />
            Open Persona Settings
          </button>
        </div>
        
        <PersonaSettingsDrawer 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
          onSave={(settings) => console.log("Saved Settings:", settings)}
        />
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

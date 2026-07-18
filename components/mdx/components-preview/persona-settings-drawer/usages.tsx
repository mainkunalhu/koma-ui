import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

export async function PersonaSettingsDrawerUsages() {
  const code = `"use client"
import * as React from "react"
import { PersonaSettingsDrawer } from "@/components/mdx/components/persona-settings-drawer"

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleSave = (settings: any) => {
    console.log("New Settings:", settings)
    // Save to local storage or backend
  }

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Settings
      </button>

      <PersonaSettingsDrawer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onSave={handleSave}
      />
    </div>
  )
}
`

  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} />
    </CodePreviewRoot>
  )
}

import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code = `"use client"

import { ArtifactViewer } from "@/components/mdx/components/artifact-viewer"

export default function ArtifactDemo() {
  const code = \`import React from "react";

export function Button({ children }) {
  return <button className="bg-blue-500 text-white p-2">{children}</button>;
}\`

  return (
    <div className="p-8 max-w-4xl h-[500px]">
      <ArtifactViewer 
        title="button.tsx"
        language="typescript"
        code={code}
        preview={
          <div className="flex items-center justify-center h-full">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Test Button
            </button>
          </div>
        }
      />
    </div>
  )
}
`

export function ArtifactViewerUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}



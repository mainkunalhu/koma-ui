import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code = `"use client"

import { AiCodeBlock } from "@/components/ui/ai-code-block"

export default function AiCodeBlockDemo() {
  const codeString = \`def hello_world():
    print("Hello, Koma UI!")
    
hello_world()\`

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4 p-4">
      <AiCodeBlock 
        language="python" 
        code={codeString} 
        filename="hello.py" 
      />
    </div>
  )
}
`

export function AiCodeBlockUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

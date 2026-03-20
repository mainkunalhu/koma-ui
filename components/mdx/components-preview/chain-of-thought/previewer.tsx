"use client"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import ChainOfThought from "../../components/chain-of-thought"

export function ChainOfThoughtPreview() {
  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-2 md:p-6">
        <ChainOfThought />
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

"use client"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import SlashCommandInput from "../../components/slash-command-input"

export function SlashCommandInputPreview() {
  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-2 md:p-6 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="w-full max-w-3xl">
          <SlashCommandInput />
        </div>
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

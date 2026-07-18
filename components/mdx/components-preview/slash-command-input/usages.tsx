import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code =
  `"use client"\n\nimport SlashCommandInput, { SlashCommand } from "@/components/slash-command-input"\n\nexport default function SlashCommandInputDemo() {\n\tconst handleSubmit = async (text: string, images: File[], slashCommand: SlashCommand | null) => {\n\t\tconsole.log("Text:", text);\n\t\tconsole.log("Images attached:", images.length);\n\t\tconsole.log("Command selected:", slashCommand?.title);\n\t\t\n\t\t// Simulating an async API call\n\t\tawait new Promise((resolve) => setTimeout(resolve, 1000));\n\t\talert("Check the console for submitted data!");\n\t};\n\n\treturn (\n\t\t<div className="flex w-full max-w-3xl items-center justify-center p-4">\n\t\t\t<SlashCommandInput handleSubmit={handleSubmit} />\n\t\t</div>\n\t)\n}`

export function SlashCommandInputUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

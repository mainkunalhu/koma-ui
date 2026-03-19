import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code = '"use client"\n\nimport AiMessage from "@/components/ai-message"\n\nconst MARKDOWN_CONTENT = `Hi there! 👋 How can I help you today?\\n\\nHere is a quick example of some **Markdown formatting**:\\n- We built a custom \\`AiMessage\\`\\n- We are streaming text\\n- It looks great!`;\n\nexport default function AiMessageDemo() {\n\treturn (\n\t\t<div className="flex w-full max-w-3xl flex-col items-start p-4">\n\t\t\t<AiMessage content={MARKDOWN_CONTENT} className="w-full" />\n\t\t</div>\n\t)\n}'

export function AiMessageUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

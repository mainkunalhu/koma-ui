import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code =
  '"use client"\n\nimport InputBox, { InputBoxToolType } from "@/components/input-box"\nimport { Globe, Image as ImageIcon, Paintbrush, TerminalSquare } from "lucide-react"\n\nconst AI_TOOLS: InputBoxToolType[] = [\n\t{\n\t\ticon: Globe,\n\t\tvalue: "Web Search",\n\t},\n\t{\n\t\ticon: ImageIcon,\n\t\tvalue: "Create Images",\n\t},\n\t{\n\t\ticon: Paintbrush,\n\t\tvalue: "Canvas",\n\t},\n\t{\n\t\ticon: TerminalSquare,\n\t\tvalue: "Run Code",\n\t},\n]\n\nexport default function InputBoxDemo() {\n\tconst handleSubmit = async (text: string, images: File[], tool: string | null) => {\n\t\tconsole.log("Text:", text);\n\t\tconsole.log("Images attached:", images.length);\n\t\tconsole.log("Tool selected:", tool);\n\t\t\n\t\t// Simulating an async API call\n\t\tawait new Promise((resolve) => setTimeout(resolve, 1000));\n\t\talert("Check the console for submitted data!");\n\t};\n\n\treturn (\n\t\t<div className="flex w-full max-w-3xl items-center justify-center p-4">\n\t\t\t<InputBox tools={AI_TOOLS} handleSubmit={handleSubmit} />\n\t\t</div>\n\t)\n}'

export function ChainOfThoughtUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

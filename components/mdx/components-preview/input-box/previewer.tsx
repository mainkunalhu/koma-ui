"use client"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import InputBox, { InputBoxToolType } from "../../components/input-box"
import { Globe, Image as ImageIcon, Paintbrush, TerminalSquare } from "lucide-react"

const AI_TOOLS: InputBoxToolType[] = [
  {
    icon: Globe,
    value: "Web Search",
  },
  {
    icon: ImageIcon,
    value: "Create Images",
  },
  {
    icon: Paintbrush,
    value: "Canvas",
  },
  {
    icon: TerminalSquare,
    value: "Run Code",
  },
]

export function InputBoxPreview() {
  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-2 md:p-6">
        <InputBox tools={AI_TOOLS} />
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

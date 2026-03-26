"use client"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import MutipleModelsInputBox, { MutipleModelSelectionItems } from "../../components/mutiple-models-input-box"
import { OpenAI, Kimi, Groq, Meta, Qwen } from "@lobehub/icons"
import { Bot, Cpu } from "lucide-react"

export const modelSelectionData: MutipleModelSelectionItems[] = [
  {
    title: "OpenAI",
    icon: OpenAI,
    models: ["whisper-large-v3-turbo", "openai/gpt-oss-20b", "whisper-large-v3", "openai/gpt-oss-safeguard-20b", "openai/gpt-oss-120b"],
  },
  {
    title: "Moonshot AI",
    icon: Kimi,
    models: ["moonshotai/kimi-k2-instruct", "moonshotai/kimi-k2-instruct-0905"],
  },
  {
    title: "Groq",
    icon: Groq,
    models: ["groq/compound-mini", "groq/compound"],
  },
  {
    title: "Meta",
    icon: Meta,
    models: ["llama-3.3-70b-versatile", "meta-llama/llama-prompt-guard-2-86m", "meta-llama/llama-prompt-guard-2-22m", "meta-llama/llama-4-scout-17b-16e-instruct", "llama-3.1-8b-instant"],
  },
  {
    title: "Alibaba Cloud",
    icon: Qwen,
    models: ["qwen/qwen3-32b"],
  },
  {
    title: "Canopy Labs",
    icon: Bot,
    models: ["canopylabs/orpheus-v1-english", "canopylabs/orpheus-arabic-saudi"],
  },
  {
    title: "SDAIA",
    icon: Cpu,
    models: ["allam-2-7b"],
  },
]

export function MutipleModelsInputBoxPreview() {
  const handleSubmit = () => {}
  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-2 md:p-6">
        <MutipleModelsInputBox data={modelSelectionData} handleSubmit={handleSubmit} />
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

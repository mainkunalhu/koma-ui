import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code =
  '"use client"\n\nimport MutipleModelsInputBox, { MutipleModelSelectionItems } from "@/components/mutiple-models-input-box"\nimport { OpenAI, Groq, Meta } from "@lobehub/icons"\n\nconst MODEL_DATA: MutipleModelSelectionItems[] = [\n\t{\n\t\ttitle: "OpenAI",\n\t\ticon: OpenAI,\n\t\tmodels: ["whisper-large-v3-turbo", "openai/gpt-oss-20b"],\n\t},\n\t{\n\t\ttitle: "Meta",\n\t\ticon: Meta,\n\t\tmodels: ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"],\n\t},\n\t{\n\t\ttitle: "Groq",\n\t\ticon: Groq,\n\t\tmodels: ["groq/compound-mini", "groq/compound"],\n\t},\n]\n\nexport default function MutipleModelsInputBoxDemo() {\n\tconst handleSubmit = async (text: string, modelName: string | null) => {\n\t\tconsole.log("Text:", text);\n\t\tconsole.log("Model selected:", modelName);\n\t\t\n\t\t// Simulating an async API call\n\t\tawait new Promise((resolve) => setTimeout(resolve, 1000));\n\t\talert("Check the console for submitted data!");\n\t};\n\n\treturn (\n\t\t<div className="flex w-full max-w-3xl items-center justify-center p-4">\n\t\t\t<MutipleModelsInputBox data={MODEL_DATA} handleSubmit={handleSubmit} />\n\t\t</div>\n\t)\n}'

export function MutipleModelsInputBoxUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code =
  '"use client"\n\nimport { useState, useEffect } from "react"\nimport { ChainOfThought } from "@/components/ui/chain-of-thought"\n\nconst SAMPLE_REASONING = `Analyzing user request...\\nIdentifying core requirements for the component...\\nEvaluating state management approaches...\\nImplementing simulated streaming with useEffect...\\nFinalizing component architecture.`\n\nexport default function ChainOfThoughtDemo() {\n\tconst [streamedText, setStreamedText] = useState("")\n\tconst [isStreaming, setIsStreaming] = useState(true)\n\n\tuseEffect(() => {\n\t\tlet currentIndex = 0\n\t\t\n\t\tconst interval = setInterval(() => {\n\t\t\tif (currentIndex <= SAMPLE_REASONING.length) {\n\t\t\t\tsetStreamedText(SAMPLE_REASONING.slice(0, currentIndex))\n\t\t\t\tcurrentIndex++\n\t\t\t} else {\n\t\t\t\tsetIsStreaming(false)\n\t\t\t\tclearInterval(interval)\n\t\t\t}\n\t\t}, 40)\n\n\t\treturn () => clearInterval(interval)\n\t}, [])\n\n\treturn (\n\t\t<div className="flex w-full max-w-2xl flex-col gap-4 p-4">\n\t\t\t<ChainOfThought \n\t\t\t\ttext={streamedText} \n\t\t\t\tisLoading={isStreaming} \n\t\t\t\tdefaultOpen={true}\n\t\t\t/>\n\t\t</div>\n\t)\n}'

export function ChainOfThoughtUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

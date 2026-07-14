"use client"

import PromptSuggestions from "@/components/mdx/components/prompt-suggestions"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"

const demoSuggestions = [
  {
    id: 1,
    title: "Explain a concept",
    description: "Break down complex topics into simple terms",
    prompt: "Can you explain quantum computing as if I was 5 years old?",
  },
  {
    id: 2,
    title: "Review my code",
    description: "Find bugs and optimize performance",
    prompt: "Please review the following code and suggest improvements: ",
  },
]

export function PromptSuggestionsPreview() {
  return (
    <CodePreviewRoot>
      <CodePreviewer>
        <div className="w-full p-4">
          <PromptSuggestions 
            suggestions={demoSuggestions} 
            onSelect={(prompt) => alert("Selected: " + prompt)} 
          />
        </div>
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

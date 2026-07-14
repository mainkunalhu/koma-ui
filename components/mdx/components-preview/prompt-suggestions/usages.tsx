import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"
import PropsTable, { TableProps } from "../../props-table"

const code = `"use client"

import PromptSuggestions from "@/components/mdx/components/prompt-suggestions"
import { Terminal, Code, Sparkles, MessageSquare } from "lucide-react"

export default function PromptSuggestionsDemo() {
  const suggestions = [
    {
      id: 1,
      icon: <Sparkles className="size-5" />,
      title: "Explain a concept",
      description: "Break down complex topics into simple terms",
      prompt: "Can you explain quantum computing as if I was 5 years old?",
    },
    {
      id: 2,
      icon: <Code className="size-5" />,
      title: "Review my code",
      description: "Find bugs and optimize performance",
      prompt: "Please review the following code and suggest improvements: ",
    },
    {
      id: 3,
      icon: <Terminal className="size-5" />,
      title: "Write a script",
      description: "Automate tasks with shell or Python scripts",
      prompt: "Write a Python script to recursively find all .log files and delete them.",
    },
    {
      id: 4,
      icon: <MessageSquare className="size-5" />,
      title: "Draft an email",
      description: "Professional emails tailored to your needs",
      prompt: "Draft an email to my boss asking for a timeline extension on the current project.",
    },
  ]

  return (
    <div className="w-full max-w-3xl p-4">
      <PromptSuggestions 
        suggestions={suggestions} 
        onSelect={(prompt) => console.log("Selected prompt:", prompt)} 
      />
    </div>
  )
}`

export function PromptSuggestionsUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

export function PromptSuggestionsProps() {
  const content: TableProps[] = [
    {
      propertyName: "suggestions",
      type: "PromptSuggestion[]",
      required: "true",
      description: "Array of suggestion objects containing id, title, prompt, optional icon, and description.",
    },
    {
      propertyName: "onSelect",
      type: "(prompt: string) => void",
      required: "true",
      description: "Callback function triggered when a suggestion card is clicked.",
    },
  ]
  return <PropsTable content={content} />
}

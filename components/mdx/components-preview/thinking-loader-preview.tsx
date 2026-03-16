import ThinkingLoader from "@/components/mdx/components/thinking-loader"
import { CodePreviewRoot, CodePreviewer, CodePreviewRender } from "../code-preview"
import PropsTable, { TableProps } from "../props-table"

const code = '"use client"\n\nimport ThinkingLoader from "@/components/ui/thinking-loader"\n\nexport default function ThinkingLoaderDemo() {\n\tconst thinkingText = [\n\t\t"Analyzing your prompt...",\n\t\t"Searching knowledge base...",\n\t\t"Synthesizing results...",\n\t\t"Formulating response..."\n\t];\n\n\treturn (\n\t\t<ThinkingLoader thinkingText={thinkingText} />\n\t)\n}'

export function ThinkingLoaderPreview() {
  return (
    <CodePreviewRoot>
      <CodePreviewer>
        <ThinkingLoader />
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

export function ThinkingLoaderUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

export function ThinkingLoaderProps() {
  const content: TableProps[] = [
    {
      propertyName: "thinkingText",
      type: "String[]",
      required: "false",
      description: "text of string to render",
    },
  ]
  return <PropsTable content={content} />
}

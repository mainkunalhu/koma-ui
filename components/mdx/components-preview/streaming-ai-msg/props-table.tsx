import PropsTable, { TableProps } from "../../props-table"

export function AiMessageProps() {
  const aiMessageProps: TableProps[] = [
    {
      propertyName: "content",
      type: "string",
      required: "true",
      description: "The Markdown-formatted text string to be rendered. It seamlessly handles streaming updates and automatically parses GitHub-flavored markdown.",
    },
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Additional Tailwind CSS classes to apply to the outer wrapper container.",
    },
  ]
  return <PropsTable content={aiMessageProps} />
}

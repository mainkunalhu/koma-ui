import PropsTable, { TableProps } from "../../props-table"

export function AiCodeBlockProps() {
  const codeBlockProps: TableProps[] = [
    {
      propertyName: "language",
      type: "string",
      required: "true",
      description: "The programming language of the code snippet (e.g., 'javascript', 'python'). Displayed in the header if filename is not provided.",
    },
    {
      propertyName: "code",
      type: "string",
      required: "true",
      description: "The raw source code to display inside the block. This is also the content copied to the clipboard.",
    },
    {
      propertyName: "filename",
      type: "string",
      required: "false",
      description: "Optional filename to display in the header instead of the language name.",
    },
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Additional Tailwind CSS classes to apply to the outer wrapper container.",
    },
  ]
  return <PropsTable content={codeBlockProps} />
}

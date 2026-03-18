import PropsTable, { TableProps } from "../../props-table"

export function InputBoxProps() {
  const inputBoxProps: TableProps[] = [
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Additional Tailwind CSS classes to apply to the outer wrapper container.",
    },
    {
      propertyName: "tools",
      type: "InputBoxToolType[]",
      required: "true",
      description: "Array of tools to populate the dropdown menu. Each object requires a 'value' string and accepts an optional 'icon' React component.",
    },
    {
      propertyName: "handleSubmit",
      type: "(text: string, images: File[], tool: string | null) => void | Promise<void>",
      required: "false",
      description: "Callback function triggered on submission. Receives the typed text, an array of selected files, and the currently selected tool value.",
    },
  ]
  return <PropsTable content={inputBoxProps} />
}

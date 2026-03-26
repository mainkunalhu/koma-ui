import PropsTable, { TableProps } from "../../props-table"

export function MutipleModelsInputBoxProps() {
  const multipleModelsInputBoxProps: TableProps[] = [
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Additional Tailwind CSS classes to apply to the outer wrapper container.",
    },
    {
      propertyName: "data",
      type: "MutipleModelSelectionItems[]",
      required: "true",
      description: "Array of model categories to populate the dropdown menu. Each object requires a 'title', an 'icon' component, and an array of 'models' strings.",
    },
    {
      propertyName: "handleSubmit",
      type: "(text: string, modelName: string | null) => void | Promise<void>",
      required: "false",
      description: "Callback function triggered on submission. Receives the typed text and the currently selected LLM model name.",
    },
  ]
  return <PropsTable content={multipleModelsInputBoxProps} />
}

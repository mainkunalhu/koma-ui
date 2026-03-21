import PropsTable, { TableProps } from "../../props-table"

export function ChainOfThoughtProps() {
  const chainOfThoughtProps: TableProps[] = [
    {
      propertyName: "text",
      type: "string",
      required: "true",
      description: "The streaming or completed reasoning text to display inside the component.",
    },
    {
      propertyName: "isLoading",
      type: "boolean",
      required: "false",
      description: "Indicates whether the reasoning process is currently actively streaming. Swaps the checkmark for a loading spinner.",
    },
    {
      propertyName: "title",
      type: "string",
      required: "false",
      description: "The text displayed in the header. Defaults to 'Reasoning Process'.",
    },
    {
      propertyName: "defaultOpen",
      type: "boolean",
      required: "false",
      description: "Determines if the reasoning container is expanded by default. Defaults to false.",
    },
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Additional Tailwind CSS classes to apply to the outer wrapper container.",
    },
  ]
  return <PropsTable content={chainOfThoughtProps} />
}

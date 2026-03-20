import PropsTable, { TableProps } from "../../props-table"

export function ChainOfThoughtProps() {
  const inputBoxProps: TableProps[] = [
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Additional Tailwind CSS classes to apply to the outer wrapper container.",
    },
  ]
  return <PropsTable content={inputBoxProps} />
}

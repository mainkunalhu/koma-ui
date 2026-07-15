import PropsTable, { TableProps } from "../../props-table"

export function InlineCitationPropsTable() {
  const props: TableProps[] = [
    {
      propertyName: "source",
      type: "{ url: string; title: string; snippet?: string; }",
      required: "true",
      description: "The source object containing the URL, title, and an optional snippet of text.",
    },
    {
      propertyName: "index",
      type: "number",
      required: "true",
      description: "The citation number/index to display inside the badge (e.g., 1, 2, 3).",
    },
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Optional CSS classes to apply to the wrapper span.",
    }
  ]

  return <PropsTable content={props} />
}

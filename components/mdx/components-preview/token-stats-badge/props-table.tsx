import PropsTable, { TableProps } from "../../props-table"

export function TokenStatsBadgePropsTable() {
  const props: TableProps[] = [
    {
      propertyName: "tokensPerSecond",
      type: "number",
      required: "false",
      description: "The rate of token generation (t/s).",
    },
    {
      propertyName: "latencyMs",
      type: "number",
      required: "false",
      description: "The latency or time to first token in milliseconds. Will format automatically to seconds if >= 1000.",
    },
    {
      propertyName: "cost",
      type: "number",
      required: "false",
      description: "The estimated cost of the request. Will format as USD currency.",
    },
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Optional CSS classes to apply to the wrapper div.",
    }
  ]

  return <PropsTable content={props} />
}

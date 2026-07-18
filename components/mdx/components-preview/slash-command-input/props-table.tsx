import PropsTable, { TableProps } from "../../props-table"

export function SlashCommandInputProps() {
  const inputBoxProps: TableProps[] = [
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Additional Tailwind CSS classes to apply to the outer wrapper container.",
    },
    {
      propertyName: "slashCommands",
      type: "SlashCommand[]",
      required: "false",
      description: "Array of slash commands to populate the popover menu. Each object requires an 'id', 'title', 'description' and 'icon'. Defaults to a preset list of common AI commands.",
    },
    {
      propertyName: "handleSubmit",
      type: "(text: string, images: File[], slashCommand: SlashCommand | null) => void | Promise<void>",
      required: "false",
      description: "Callback function triggered on submission. Receives the typed text, an array of selected files, and the currently selected slash command.",
    },
  ]
  return <PropsTable content={inputBoxProps} />
}

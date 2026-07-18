import PropsTable, { TableProps } from "../../props-table"

export function PersonaSettingsDrawerPropsTable() {
  const props: TableProps[] = [
    {
      propertyName: "isOpen",
      type: "boolean",
      required: "true",
      description: "Controls the visibility of the drawer.",
    },
    {
      propertyName: "onClose",
      type: "() => void",
      required: "true",
      description: "Callback invoked when the drawer needs to be closed (e.g. clicking backdrop, escape key, or cancel button).",
    },
    {
      propertyName: "onSave",
      type: "(settings: { systemPrompt: string; temperature: number; topP: number }) => void",
      required: "false",
      description: "Callback invoked when the user clicks 'Save Settings', providing the updated settings.",
    },
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Optional CSS classes to apply to the drawer panel.",
    }
  ]

  return <PropsTable content={props} />
}

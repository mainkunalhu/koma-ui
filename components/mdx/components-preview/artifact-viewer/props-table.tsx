import PropsTable, { TableProps } from "../../props-table"

export function ArtifactViewerProps() {
  const artifactViewerProps: TableProps[] = [
    {
      propertyName: "title",
      type: "string",
      required: "false",
      description: "The text displayed in the header. Defaults to 'Generated Code'.",
    },
    {
      propertyName: "language",
      type: "string",
      required: "false",
      description: "The language of the code (e.g., 'typescript', 'html'). Used for reference or syntax highlighting.",
    },
    {
      propertyName: "code",
      type: "string",
      required: "true",
      description: "The raw string of code to be displayed and copied.",
    },
    {
      propertyName: "highlightedCode",
      type: "string",
      required: "false",
      description: "An optional HTML string of syntax-highlighted code. If provided, replaces the raw code view.",
    },
    {
      propertyName: "preview",
      type: "React.ReactNode",
      required: "false",
      description: "An optional rendered React component or HTML preview.",
    },
    {
      propertyName: "defaultTab",
      type: "'code' | 'preview'",
      required: "false",
      description: "Which tab is open by default. If preview is provided, defaults to 'preview'. Otherwise defaults to 'code'.",
    },
    {
      propertyName: "className",
      type: "string",
      required: "false",
      description: "Additional Tailwind CSS classes applied to the root container.",
    },
  ]
  return <PropsTable content={artifactViewerProps} />
}

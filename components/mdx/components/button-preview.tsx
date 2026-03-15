import { Button } from "components/ui/button"
import { CodePreviewRoot, CodePreviewer, CodePreviewRender } from "../code-preview"

const buttonCode = `import { Button } from "@/components/ui/button"

export default function Demo() {
  return (
    <Button variant="default" size="sm">
      Hello Koma
    </Button>
  )
}`

export default function ButtonPreview() {
  return (
    <CodePreviewRoot>
      <CodePreviewer>
        <Button variant="default" size="sm">
          Hello Koma
        </Button>
      </CodePreviewer>
      <CodePreviewRender code={buttonCode} lang="tsx" />
    </CodePreviewRoot>
  )
}

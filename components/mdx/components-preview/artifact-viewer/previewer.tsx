import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import { ArtifactViewer } from "@/components/mdx/components/artifact-viewer"
import { highlightCode } from "@/lib/highlighter"

export async function ArtifactViewerPreview() {
  const exampleCode = `function calculateFibonacci(n: number): number {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

console.log(calculateFibonacci(10)); // 55`

  const highlightedCode = await highlightCode(exampleCode, "typescript")

  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-8 bg-muted/30">
        <div className="w-full max-w-3xl h-[400px]">
          <ArtifactViewer 
            title="fibonacci.ts"
            language="typescript"
            code={exampleCode}
            highlightedCode={highlightedCode}
            preview={
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <h3 className="text-xl font-semibold">Interactive Preview</h3>
                <p className="text-muted-foreground">
                  The preview tab can render HTML, React components, or markdown.
                </p>
                <div className="p-4 bg-primary/10 rounded-lg text-primary font-mono">
                  Result: 55
                </div>
              </div>
            }
          />
        </div>
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

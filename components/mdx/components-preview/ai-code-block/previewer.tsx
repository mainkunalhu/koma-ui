"use client"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import AiCodeBlock from "../../components/ai-code-block"

export function AiCodeBlockPreview() {
  const sampleCode = `function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

// Example usage:
console.log(calculateFibonacci(10));`

  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-2 md:p-6 bg-background">
        <div className="w-full max-w-2xl">
          <AiCodeBlock language="javascript" code={sampleCode} filename="fibonacci.js" />
        </div>
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

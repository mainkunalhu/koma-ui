import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

export async function InlineCitationUsages() {
  const code = `import { InlineCitation } from "@/components/mdx/components/inline-citation"

export default function App() {
  const source = {
    url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
    title: "Retrieval-augmented generation",
    snippet: "Retrieval-augmented generation (RAG) is a technique that grounds large language models on external knowledge sources."
  }

  return (
    <p>
      RAG greatly reduces hallucinations in AI models 
      <InlineCitation source={source} index={1} className="mx-1" />
      by retrieving facts before generating an answer.
    </p>
  )
}
`

  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} />
    </CodePreviewRoot>
  )
}

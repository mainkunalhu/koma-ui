import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

export async function TokenStatsBadgeUsages() {
  const code = `import { TokenStatsBadge } from "@/components/mdx/components/token-stats-badge"

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      {/* Full stats (tokens, latency, cost) */}
      <TokenStatsBadge 
        tokensPerSecond={32} 
        latencyMs={1200} 
        cost={0.004} 
      />
      
      {/* Only latency and tokens */}
      <TokenStatsBadge 
        tokensPerSecond={45} 
        latencyMs={600} 
      />
      
      {/* Only latency */}
      <TokenStatsBadge 
        latencyMs={350} 
      />
    </div>
  )
}
`

  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} />
    </CodePreviewRoot>
  )
}

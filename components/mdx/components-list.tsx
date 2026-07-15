import ListGrid, { GridItem } from "./list-grid"

const componentsList: GridItem[] = [
  {
    name: "Thinking Loader",
    linkPath: "/docs/components/thinking-loader",
  },
  {
    name: "Input Box",
    linkPath: "/docs/components/input-box",
  },
  {
    name: "Chain of thought",
    linkPath: "/docs/components/chain-of-thought",
  },
  {
    name: "Streaming AI Message",
    linkPath: "/docs/components/streaming-ai-message",
  },
  {
    name: "Mutiple Models Input Box",
    linkPath: "/docs/components/mutiple-models-input-box",
  },
  {
    name: "Prompt Suggestions",
    linkPath: "/docs/components/prompt-suggestions",
  },
  {
    name: "Artifact Viewer",
    linkPath: "/docs/components/artifact-viewer",
  },
  {
    name: "Inline Citation",
    linkPath: "/docs/components/inline-citation",
  },
]

export function ComponentsList() {
  return <ListGrid items={componentsList} />
}

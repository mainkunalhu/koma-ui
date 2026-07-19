import ListGrid, { GridItem } from "./list-grid"

const blocksList: GridItem[] = [
  {
    name: "Chat Layout",
    linkPath: "/docs/blocks/chat-layout",
  },
  {
    name: "Copilot Widget",
    linkPath: "/docs/blocks/copilot-widget",
  },
]

export function BlocksList() {
  return <ListGrid items={blocksList} />
}

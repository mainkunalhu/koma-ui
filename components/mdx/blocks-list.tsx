import ListGrid, { GridItem } from "./list-grid"

const blocksList: GridItem[] = [
  {
    name: "Chat Layout",
    linkPath: "/docs/blocks/chat-layout",
  },
]

export function BlocksList() {
  return <ListGrid items={blocksList} />
}

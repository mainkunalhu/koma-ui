import ListGrid, { GridItem } from "./list-grid"

const componentsList: GridItem[] = [
  {
    name: "Thinking Loader",
    linkPath: "/docs/components/thinking-loader",
  },
]

export function ComponentsList() {
  return <ListGrid items={componentsList} />
}

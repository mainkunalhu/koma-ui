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
]

export function ComponentsList() {
  return <ListGrid items={componentsList} />
}

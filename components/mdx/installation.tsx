import { highlightCode } from "@/lib/highlighter"
import { CopyButton } from "./copy-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const base_url = "https://komaui.iamkunal.in"

interface Props {
  name: string
}

export async function InstalltionCmd({ name }: Props) {
  const cmds = [
    {
      key: "bun",
      cmd: `bunx --bun shadcn@latest add ${base_url}/r/${name}.json`,
    },
    {
      key: "pnpm",
      cmd: `pnpm dlx shadcn@latest add ${base_url}/r/${name}.json`,
    },
    {
      key: "npm",
      cmd: `npx shadcn@latest add ${base_url}/r/${name}.json`,
    },
    {
      key: "yarn",
      cmd: `yarn dlx shadcn@latest add ${base_url}/r/${name}.json`,
    },
  ]
  return (
    <Tabs defaultValue="bun">
      <TabsList variant="line">
        <TabsTrigger value="bun">bun</TabsTrigger>
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        <TabsTrigger value="yarn">yarn</TabsTrigger>
        <TabsTrigger value="npm">npm</TabsTrigger>
      </TabsList>

      {cmds.map(async (data, key) => {
        const highlighted = await highlightCode(data.cmd, "bash")
        return (
          <TabsContent className="manual-shiki-container group relative flex w-full items-center justify-between overflow-x-auto rounded-md border bg-black/90 p-2 font-mono text-sm dark:bg-muted/40" value={data.key} key={data.key + key}>
            <div className="rounded-none border-none" dangerouslySetInnerHTML={{ __html: highlighted }} />
            <CopyButton value={data.cmd} />
          </TabsContent>
        )
      })}
    </Tabs>
  )
}

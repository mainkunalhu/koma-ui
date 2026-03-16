import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export interface TableProps {
  propertyName: string
  type: string
  required: "true" | "false"
  description: string
}

export default function PropsTable({ content }: { content: TableProps[] }) {
  return (
    <Table className="bg-transparent">
      <TableHeader className="border-b border-zinc-800 bg-zinc-900/50">
        <TableRow className="border-none hover:bg-transparent">
          <TableHead className="h-10 text-xs tracking-wider text-zinc-400 uppercase">Property</TableHead>
          <TableHead className="h-10 text-xs tracking-wider text-zinc-400 uppercase">Type</TableHead>
          <TableHead className="h-10 text-xs tracking-wider text-zinc-400 uppercase">Required</TableHead>
          <TableHead className="h-10 text-right text-xs tracking-wider text-zinc-400 uppercase">Description</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {content.map(({ description, propertyName, required, type }, key) => (
          <TableRow key={propertyName + key} className="border-zinc-800 transition-colors hover:bg-zinc-900/30">
            <TableCell className="py-4 font-mono text-sm font-semibold text-primary">{propertyName}</TableCell>

            <TableCell className="py-4">
              <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-zinc-300">{type}</code>
            </TableCell>

            <TableCell className="py-4 text-sm">{required === "true" ? <span className="text-red-400/80">Yes</span> : <span className="text-zinc-500">No</span>}</TableCell>

            <TableCell className="max-w-[300px] py-4 text-right text-sm leading-relaxed text-zinc-400">{description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

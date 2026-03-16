import { highlightCode } from "@/lib/highlighter"
import { cn } from "@/lib/utils"
import { CopyButton } from "./copy-button"

export function CodePreviewRoot({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex flex-col overflow-hidden rounded-xl border border-border bg-background">{children}</div>
  )
}

export function CodePreviewer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex min-h-32 items-center justify-center border-b border-border p-6", className)}>
      {children}
    </div>
  )
}

export async function CodePreviewRender({ code, lang = "tsx" }: { code: string; lang?: string }) {
  const highlighted = await highlightCode(code, lang)

  return (
    <div className="manual-shiki-container group relative w-full overflow-x-auto bg-black/90 px-2 py-4 font-mono text-sm dark:bg-muted/40">
      <div className="absolute top-4 right-4 z-20">
        <CopyButton value={code} className="border" />
      </div>

      <div className="rounded-none border-none" dangerouslySetInnerHTML={{ __html: highlighted }} />
    </div>
  )
}

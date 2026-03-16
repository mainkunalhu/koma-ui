import { cn } from "@/lib/utils"

export function GridRootLayout({ children }: { children?: React.ReactNode }) {
  return <div className="grid w-full grid-cols-1 gap-3 p-2 md:grid-cols-2 lg:grid-cols-4">{children}</div>
}

export function GridBox({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <div className={cn("col-span-1 flex h-full min-h-16 items-center justify-center rounded-md border", className)}>{children}</div>
}

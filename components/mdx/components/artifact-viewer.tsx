"use client"

import * as React from "react"
import { Copy, Check, Code, MonitorPlay } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export interface ArtifactViewerProps {
  title?: string
  language?: string
  code: string
  highlightedCode?: string
  preview?: React.ReactNode
  defaultTab?: "code" | "preview"
  className?: string
}

export function ArtifactViewer({
  title = "Generated Code",
  language = "typescript",
  code,
  highlightedCode,
  preview,
  defaultTab = preview ? "preview" : "code",
  className,
}: ArtifactViewerProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] w-full transition-all duration-300",
        className
      )}
    >
      <Tabs defaultValue={defaultTab} className="flex flex-col h-full w-full max-w-full">
        {/* Sleek Glassmorphic Header */}
        <div className="relative flex items-center justify-between border-b border-border/50 bg-muted/30 px-3 sm:px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <div className="flex shrink-0 h-6 w-6 items-center justify-center rounded bg-primary/10">
              <Code className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-sm font-semibold tracking-tight truncate">{title}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {preview && (
              <TabsList className="h-8 p-1 bg-muted/50 rounded-lg">
                <TabsTrigger 
                  value="preview" 
                  className="px-2 sm:px-3 py-1 text-xs rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  <MonitorPlay className="h-3.5 w-3.5 sm:mr-1.5" />
                  <span className="hidden sm:inline">Preview</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="code" 
                  className="px-2 sm:px-3 py-1 text-xs rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                >
                  <Code className="h-3.5 w-3.5 sm:mr-1.5" />
                  <span className="hidden sm:inline">Code</span>
                </TabsTrigger>
              </TabsList>
            )}

            <button
              onClick={handleCopy}
              className="group relative flex shrink-0 h-8 w-8 items-center justify-center rounded-lg border border-border/50 bg-background/50 hover:bg-muted transition-colors"
              aria-label="Copy code"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Check className="h-4 w-4 text-emerald-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative flex-1 min-h-0 bg-background rounded-b-2xl overflow-hidden">
          <TabsContent 
            value="code" 
            className="manual-shiki-container group relative m-0 h-full w-full overflow-auto bg-black/90 p-4 sm:p-6 font-mono text-sm dark:bg-muted/40 outline-none data-[state=inactive]:hidden"
          >
            {highlightedCode ? (
              <div 
                className="rounded-none border-none text-[13px] leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: highlightedCode }} 
              />
            ) : (
              <pre className="rounded-none border-none bg-transparent text-[13px] leading-relaxed text-zinc-100 dark:text-zinc-200">
                <code>{code}</code>
              </pre>
            )}
          </TabsContent>

          {preview && (
            <TabsContent
              value="preview"
              className="m-0 h-full w-full outline-none data-[state=inactive]:hidden bg-background overflow-auto"
            >
              <div className="h-full w-full p-4 sm:p-6 animate-in fade-in duration-500">
                {preview}
              </div>
            </TabsContent>
          )}
        </div>
      </Tabs>
    </div>
  )
}

export default ArtifactViewer

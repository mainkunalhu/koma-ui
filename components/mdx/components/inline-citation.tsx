"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CitationSource {
  url: string
  title: string
  snippet?: string
}

export interface InlineCitationProps {
  source: CitationSource
  index: number
  className?: string
}

export function InlineCitation({ source, index, className }: InlineCitationProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)
  
  // Extract domain name for display
  const domain = React.useMemo(() => {
    try {
      return new URL(source.url).hostname.replace(/^www\./, "")
    } catch {
      return source.url
    }
  }, [source.url])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200) // Small delay to allow moving mouse into the popover
  }
  
  const toggleOpen = (e: React.MouseEvent) => {
    // Prevent document click from immediately closing it
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  // Close on outside click for mobile
  React.useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = () => setIsOpen(false)
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  return (
    <span 
      className={cn("inline-flex relative items-center justify-center align-baseline", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleOpen}
        type="button"
        aria-label={`Citation ${index}: ${source.title}`}
        className={cn(
          "inline-flex items-center justify-center mx-0.5",
          "h-5 min-w-5 px-1.5 rounded-md text-[11px] font-semibold transition-all duration-200",
          "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground",
          "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isOpen && "bg-primary text-primary-foreground shadow-sm"
        )}
      >
        {index}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-1/2 bottom-full z-50 mb-2 w-72 -translate-x-1/2 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Arrow */}
            <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-border/50 bg-background shadow-sm" />
            
            {/* Card Content */}
            <div className="relative flex flex-col gap-2 overflow-hidden rounded-xl border border-border/50 bg-background p-4 shadow-xl backdrop-blur-md dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" />
                  <span className="truncate">{domain}</span>
                </div>
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  title="Open source"
                >
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              
              <h4 className="text-sm font-semibold leading-tight tracking-tight text-foreground line-clamp-2">
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {source.title}
                </a>
              </h4>
              
              {source.snippet && (
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mt-1">
                  "{source.snippet}"
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}

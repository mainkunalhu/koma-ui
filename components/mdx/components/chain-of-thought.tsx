"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronRight, Brain, Loader2, Check } from "lucide-react"

export interface ChainOfThoughtProps {
  text: string
  isLoading?: boolean
  title?: string
  defaultOpen?: boolean
  className?: string
}

export default function ChainOfThought({ text, isLoading = false, title = "Reasoning Process", defaultOpen = false, className = "" }: ChainOfThoughtProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={`w-[85%] rounded-xl border border-border bg-card text-card-foreground shadow-sm ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-muted/50">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">{isLoading ? <Loader2 className="h-4 w-4 animate-spin text-primary" /> : <Check className="h-4 w-4 text-emerald-500" />}</div>
          <span className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-muted-foreground" />
            {title}
          </span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
              <div className="font-mono text-xs leading-relaxed whitespace-pre-wrap">{text || (isLoading ? "Thinking..." : "No reasoning recorded.")}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

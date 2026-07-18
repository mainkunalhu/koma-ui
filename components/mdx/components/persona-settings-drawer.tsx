"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, Settings2, Sparkles, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

export interface PersonaSettingsDrawerProps {
  isOpen: boolean
  onClose: () => void
  onSave?: (settings: { systemPrompt: string; temperature: number; topP: number }) => void
  className?: string
}

export function PersonaSettingsDrawer({
  isOpen,
  onClose,
  onSave,
  className,
}: PersonaSettingsDrawerProps) {
  const [systemPrompt, setSystemPrompt] = React.useState(
    "You are a helpful, brilliant, and concise AI assistant."
  )
  const [temperature, setTemperature] = React.useState(0.7)
  const [topP, setTopP] = React.useState(0.9)

  // Handle escape key to close
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const handleSave = () => {
    if (onSave) {
      onSave({ systemPrompt, temperature, topP })
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border/50 bg-background shadow-2xl flex flex-col",
              className
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Settings2 className="h-5 w-5" />
                <h2>Persona Settings</h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              {/* System Prompt Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <label htmlFor="system-prompt">System Instructions</label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Define how the AI should behave, its tone, and any constraints.
                </p>
                <textarea
                  id="system-prompt"
                  value={systemPrompt}
                  onChange={(e) => setSystemPrompt(e.target.value)}
                  className="min-h-[160px] w-full resize-none rounded-xl border border-border/50 bg-muted/30 p-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all"
                  placeholder="e.g. You are a helpful assistant..."
                />
              </div>

              {/* Model Parameters */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground border-b border-border/50 pb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h3>Model Parameters</h3>
                </div>

                {/* Temperature Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="temperature" className="text-sm font-medium text-foreground">
                      Temperature
                    </label>
                    <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                      {temperature.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type="range"
                    id="temperature"
                    min="0"
                    max="2"
                    step="0.01"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full accent-primary h-1.5 bg-muted rounded-full appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
                    <span>Precise</span>
                    <span>Creative</span>
                  </div>
                </div>

                {/* Top P Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="top-p" className="text-sm font-medium text-foreground">
                      Top P
                    </label>
                    <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                      {topP.toFixed(2)}
                    </span>
                  </div>
                  <input
                    type="range"
                    id="top-p"
                    min="0"
                    max="1"
                    step="0.01"
                    value={topP}
                    onChange={(e) => setTopP(parseFloat(e.target.value))}
                    className="w-full accent-primary h-1.5 bg-muted rounded-full appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
                    <span>Focused</span>
                    <span>Diverse</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border/50 p-6 flex justify-end gap-3 bg-background">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
              >
                Save Settings
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

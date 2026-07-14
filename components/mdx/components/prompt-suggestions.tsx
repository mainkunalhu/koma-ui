"use client"

import { ReactNode } from "react"
import { motion } from "motion/react"

export interface PromptSuggestion {
  id: string | number
  icon?: ReactNode
  title: string
  description?: string
  prompt: string
}

interface PromptSuggestionsProps {
  suggestions: PromptSuggestion[]
  onSelect: (prompt: string) => void
}

export default function PromptSuggestions({ suggestions, onSelect }: PromptSuggestionsProps) {
  return (
    <div className="grid w-full max-w-2xl grid-cols-1 gap-3 md:grid-cols-2 mx-auto">
      {suggestions.map((suggestion, index) => (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          key={suggestion.id}
          onClick={() => onSelect(suggestion.prompt)}
          className="group flex flex-col items-start p-4 bg-background border border-border rounded-xl hover:bg-muted/50 hover:border-primary/20 transition-all duration-200 text-left focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {suggestion.icon && (
            <div className="mb-2 text-muted-foreground group-hover:text-primary transition-colors">
              {suggestion.icon}
            </div>
          )}
          <span className="text-sm font-medium text-foreground">{suggestion.title}</span>
          {suggestion.description && (
            <span className="mt-1 text-xs text-muted-foreground line-clamp-2">
              {suggestion.description}
            </span>
          )}
        </motion.button>
      ))}
    </div>
  )
}

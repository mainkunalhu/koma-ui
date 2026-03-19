"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"

interface AiMessageProps {
  content: string
  className?: string
}

export default function AiMessage({ content, className }: AiMessageProps) {
  return (
    <div className={cn("rounded-2xl bg-card px-5 py-2", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

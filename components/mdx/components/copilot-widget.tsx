"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CopilotWidgetProps {
  /** Title displayed in the header */
  title?: string
  /** Subtitle displayed in the header */
  subtitle?: string
  /** The position of the widget. "absolute" is mostly for doc previews. Typically "fixed" in real apps. */
  position?: "fixed" | "absolute"
  /** Additional CSS classes for the wrapper */
  className?: string
}

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
}

export default function CopilotWidget({
  title = "AI Copilot",
  subtitle = "How can I help you today?",
  position = "fixed",
  className,
}: CopilotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hello! I am your AI assistant. How can I help you today?", sender: "ai" },
  ])

  const toggleWidget = () => setIsOpen((prev) => !prev)

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg: Message = { id: Date.now().toString(), text: input, sender: "user" }
    setMessages((prev) => [...prev, userMsg])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = { id: (Date.now() + 1).toString(), text: "I'm just a demo assistant, but I'm here to help!", sender: "ai" }
      setMessages((prev) => [...prev, aiMsg])
    }, 1000)
  }

  return (
    <div
      className={cn(
        "z-50 flex flex-col items-end",
        position === "fixed"
          ? "fixed bottom-4 right-4 sm:bottom-6 sm:right-6"
          : "absolute bottom-4 right-4 sm:bottom-6 sm:right-6",
        className
      )}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 flex h-[500px] max-h-[calc(100%-8rem)] w-[calc(100%-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:w-[360px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border bg-muted/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium leading-none text-foreground">{title}</span>
                  <span className="text-[11px] leading-none text-muted-foreground">{subtitle}</span>
                </div>
              </div>
              <button
                onClick={toggleWidget}
                className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close widget"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn("flex w-full", msg.sender === "user" ? "justify-end" : "justify-start")}
                >
                  <div className="flex max-w-[80%] items-end gap-2">
                    {msg.sender === "ai" && (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Bot className="h-3 w-3" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-2 text-sm",
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      )}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="border-t border-border bg-background px-4 py-3">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full rounded-full border border-border bg-muted/50 py-2.5 pl-4 pr-12 text-sm outline-none transition-colors focus:border-primary focus:bg-background"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleWidget}
        className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
        aria-label="Toggle copilot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

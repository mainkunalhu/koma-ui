"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { motion, AnimatePresence } from "motion/react"
import { PanelLeftClose, PanelLeft, Plus } from "lucide-react"

// Context for sidebar state
interface ChatLayoutContextType {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const ChatLayoutContext = createContext<ChatLayoutContextType | undefined>(undefined)

export function useChatLayout() {
  const context = useContext(ChatLayoutContext)
  if (!context) {
    throw new Error("Chat components must be used within a ChatLayout")
  }
  return context
}

// 1. Root Layout
export function ChatLayout({
  children,
  defaultOpen = true,
}: {
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(defaultOpen)
  
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)

  return (
    <ChatLayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      <div className="flex h-[80vh] w-full min-h-[500px] overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm antialiased">
        {children}
      </div>
    </ChatLayoutContext.Provider>
  )
}

// 2. Sidebar
export function ChatSidebar({ children }: { children: ReactNode }) {
  const { isSidebarOpen } = useChatLayout()

  return (
    <AnimatePresence initial={false}>
      {isSidebarOpen && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 260, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="flex h-full flex-col border-r border-border/50 bg-muted/30 backdrop-blur-xl"
        >
          <div className="flex w-[260px] h-full flex-col overflow-hidden">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Sidebar Header
export function ChatSidebarHeader({
  onNewChat,
}: {
  onNewChat?: () => void
}) {
  return (
    <div className="flex items-center justify-between p-3">
      <button
        onClick={onNewChat}
        className="flex flex-1 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground/80"
      >
        <Plus className="size-4" />
        New Chat
      </button>
    </div>
  )
}

// Sidebar Group
export function ChatSidebarGroup({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col px-3 py-2">
      <div className="mb-1 px-3 text-xs font-medium text-muted-foreground/80 uppercase tracking-wider">
        {title}
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  )
}

// Sidebar Item
export function ChatSidebarItem({
  children,
  active,
  onClick,
}: {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`truncate rounded-lg px-3 py-2 text-left text-sm transition-colors ${
        active 
          ? "bg-black/5 dark:bg-white/10 text-foreground font-medium" 
          : "text-foreground/70 hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  )
}

// Sidebar Content wrapper
export function ChatSidebarContent({ children }: { children: ReactNode }) {
  return <div className="flex-1 overflow-y-auto overflow-x-hidden">{children}</div>
}

// Sidebar Footer wrapper
export function ChatSidebarFooter({ children }: { children: ReactNode }) {
  return <div className="p-3 border-t border-border/50">{children}</div>
}

// 3. Main Area
export function ChatMain({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden bg-background">
      {children}
    </div>
  )
}

// Main Header
export function ChatHeader({ title }: { title?: ReactNode }) {
  const { isSidebarOpen, toggleSidebar } = useChatLayout()

  return (
    <div className="flex h-14 items-center border-b border-border/50 bg-background/80 px-4 backdrop-blur-xl z-10 sticky top-0">
      <button
        onClick={toggleSidebar}
        className="flex size-8 items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-muted-foreground"
      >
        {isSidebarOpen ? <PanelLeftClose className="size-5" /> : <PanelLeft className="size-5" />}
      </button>
      {title && <div className="ml-3 text-sm font-medium">{title}</div>}
    </div>
  )
}

// Chat Feed
export function ChatFeed({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">{children}</div>
    </div>
  )
}

// Input Area
export function ChatInputArea({ children }: { children: ReactNode }) {
  return (
    <div className="sticky bottom-0 p-4 md:p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
      <div className="mx-auto max-w-3xl">{children}</div>
    </div>
  )
}

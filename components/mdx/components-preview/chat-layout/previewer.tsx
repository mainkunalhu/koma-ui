"use client"

import { useState } from "react"
import { 
  ChatLayout, 
  ChatSidebar, 
  ChatSidebarHeader, 
  ChatSidebarGroup, 
  ChatSidebarItem, 
  ChatSidebarContent, 
  ChatSidebarFooter, 
  ChatMain, 
  ChatHeader, 
  ChatFeed, 
  ChatInputArea 
} from "@/components/mdx/components/chat-layout"
import { CodePreviewRoot, CodePreviewer } from "../../code-preview"
import { Globe, Image as ImageIcon, Paintbrush, TerminalSquare, User } from "lucide-react"
import InputBox, { InputBoxToolType } from "@/components/mdx/components/input-box"

const AI_TOOLS: InputBoxToolType[] = [
  { icon: Globe, value: "Web Search" },
  { icon: ImageIcon, value: "Create Images" },
  { icon: Paintbrush, value: "Canvas" },
  { icon: TerminalSquare, value: "Run Code" },
]

export function ChatLayoutPreview() {
  const [messages, setMessages] = useState([
    { role: "user", text: "Can you help me design a new web app layout?" },
    { role: "ai", text: "I'd love to! Do you have a specific style in mind? Minimalist, vibrant, dark mode?" },
    { role: "user", text: "A clean, Apple-like minimal style with frosted glass and subtle shadows." },
    { role: "ai", text: "Excellent choice. Let's start with a collapsible sidebar and a sticky chat input footer to keep the conversation perfectly framed." }
  ])


  return (
    <CodePreviewRoot>
      <CodePreviewer className="p-0 border-0 bg-transparent">
        <ChatLayout defaultOpen={true}>
          <ChatSidebar>
            <ChatSidebarHeader onNewChat={() => alert("New Chat!")} />
            <ChatSidebarContent>
              <ChatSidebarGroup title="Today">
                <ChatSidebarItem active>Design Web App</ChatSidebarItem>
                <ChatSidebarItem>Fix React Bugs</ChatSidebarItem>
              </ChatSidebarGroup>
              <ChatSidebarGroup title="Previous 7 Days">
                <ChatSidebarItem>Python Scripting</ChatSidebarItem>
                <ChatSidebarItem>Email Drafts</ChatSidebarItem>
                <ChatSidebarItem>Recipe Ideas</ChatSidebarItem>
              </ChatSidebarGroup>
            </ChatSidebarContent>
            <ChatSidebarFooter>
              <div className="flex items-center gap-3 rounded-lg px-2 py-1 hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <User className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Kunal</span>
                  <span className="text-xs text-muted-foreground">Pro Plan</span>
                </div>
              </div>
            </ChatSidebarFooter>
          </ChatSidebar>
          
          <ChatMain>
            <ChatHeader title="Design Web App" />
            <ChatFeed>
              {messages.map((m, i) => (
                <div key={i} className={`flex w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted/50 text-foreground"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </ChatFeed>
            <ChatInputArea>
              <InputBox 
                tools={AI_TOOLS} 
                handleSubmit={(text) => {
                  if (text.trim()) {
                    setMessages((prev) => [...prev, { role: "user", text }])
                  }
                }} 
              />
            </ChatInputArea>
          </ChatMain>
        </ChatLayout>
      </CodePreviewer>
    </CodePreviewRoot>
  )
}

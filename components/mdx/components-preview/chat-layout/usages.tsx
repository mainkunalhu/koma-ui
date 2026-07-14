import { CodePreviewRoot, CodePreviewRender } from "../../code-preview"

const code = `"use client"

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
import { Globe, Image as ImageIcon, Paintbrush, TerminalSquare, User } from "lucide-react"
import InputBox, { InputBoxToolType } from "@/components/mdx/components/input-box"

const AI_TOOLS: InputBoxToolType[] = [
  { icon: Globe, value: "Web Search" },
  { icon: ImageIcon, value: "Create Images" },
  { icon: Paintbrush, value: "Canvas" },
  { icon: TerminalSquare, value: "Run Code" },
]

export default function ChatLayoutDemo() {
  return (
    <div className="p-4 h-[100vh] w-full">
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
            </ChatSidebarGroup>
          </ChatSidebarContent>
          <ChatSidebarFooter>
            <div className="flex items-center gap-3 rounded-lg px-2 py-1 hover:bg-black/5 cursor-pointer">
              <User className="size-4" />
              <span className="text-sm font-medium">Kunal</span>
            </div>
          </ChatSidebarFooter>
        </ChatSidebar>
        
        <ChatMain>
          <ChatHeader title="Design Web App" />
          <ChatFeed>
            <div className="bg-primary text-primary-foreground p-4 rounded-xl ml-auto max-w-[80%]">
              Hello, this is a user message!
            </div>
            <div className="bg-muted text-foreground p-4 rounded-xl mr-auto max-w-[80%] mt-4">
              And this is an AI response.
            </div>
          </ChatFeed>
          <ChatInputArea>
            <InputBox 
              tools={AI_TOOLS} 
              handleSubmit={(text) => {
                console.log("Submitted:", text)
              }} 
            />
          </ChatInputArea>
        </ChatMain>
      </ChatLayout>
    </div>
  )
}`

export function ChatLayoutUsages() {
  return (
    <CodePreviewRoot>
      <CodePreviewRender code={code} lang="tsx" />
    </CodePreviewRoot>
  )
}

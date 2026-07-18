"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import { ImagePlus, X, ArrowUp, UploadCloud, Search, Paintbrush, FileText, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FileThumbnail } from "./file-thumbnail"
import { motion, AnimatePresence } from "motion/react"

export interface SlashCommand {
  id: string
  title: string
  description: string
  icon: React.ElementType
}

const DEFAULT_SLASH_COMMANDS: SlashCommand[] = [
  { id: "search", title: "Search Web", description: "Search the web for real-time information", icon: Search },
  { id: "draw", title: "Draw", description: "Generate an image or diagram", icon: Paintbrush },
  { id: "summarize", title: "Summarize", description: "Summarize the attached context", icon: FileText },
  { id: "persona", title: "Change Persona", description: "Switch the AI's behavior", icon: UserCircle },
]

interface Props {
  className?: string
  slashCommands?: SlashCommand[]
  handleSubmit?: (text: string, images: File[], slashCommand: SlashCommand | null) => void | Promise<void>
}

export default function SlashCommandInput({ className, slashCommands = DEFAULT_SLASH_COMMANDS, handleSubmit }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  
  const [text, setText] = useState("")
  const [images, setImages] = useState<{ id: string; file: File }[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [selectedSlashCommand, setSelectedSlashCommand] = useState<SlashCommand | null>(null)

  // Slash Command Menu State
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false)
  const [commandSearchQuery, setCommandSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const disable = text.trim().length === 0 && images.length === 0

  const filteredCommands = slashCommands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(commandSearchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(commandSearchQuery.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [commandSearchQuery])

  // Vercel Best Practice: useCallback for event handlers
  const handleInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)

    // Auto-resize
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }

    // Slash command detection
    const cursorPosition = e.target.selectionStart || 0
    const textBeforeCursor = value.slice(0, cursorPosition)
    const wordsBeforeCursor = textBeforeCursor.split(/\s+/)
    const currentWord = wordsBeforeCursor[wordsBeforeCursor.length - 1]

    if (currentWord.startsWith("/") && !selectedSlashCommand) {
      setIsCommandMenuOpen(true)
      setCommandSearchQuery(currentWord.slice(1))
    } else {
      setIsCommandMenuOpen(false)
    }
  }, [selectedSlashCommand])

  const handleSelectCommand = useCallback((cmd: SlashCommand) => {
    setSelectedSlashCommand(cmd)
    setIsCommandMenuOpen(false)
    
    // Remove the slash query from text
    const words = text.split(" ")
    words.pop()
    const newText = words.join(" ") + (words.length > 0 ? " " : "")
    setText(newText)
    
    // Reset height
    if (textareaRef.current) {
      textareaRef.current.value = newText
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      textareaRef.current.focus()
    }
  }, [text])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isCommandMenuOpen) {
      if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => Math.max(0, prev - 1))
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => Math.min(filteredCommands.length - 1, prev + 1))
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          handleSelectCommand(filteredCommands[selectedIndex])
        }
      } else if (e.key === "Escape") {
        e.preventDefault()
        setIsCommandMenuOpen(false)
      }
    } else {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSubmitClick()
      }
      if (e.key === "Backspace" && text === "" && selectedSlashCommand) {
        setSelectedSlashCommand(null)
      }
    }
  }, [isCommandMenuOpen, filteredCommands, selectedIndex, handleSelectCommand, text, selectedSlashCommand])

  const handleSubmitClick = async () => {
    if (!handleSubmit || disable) return
    try {
      await handleSubmit(text, images.map((i) => i.file), selectedSlashCommand)
      setText("")
      setImages([])
      setSelectedSlashCommand(null)
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    } catch (error) {
      console.error("Submission failed:", error)
    }
  }

  // File Handling
  const processFiles = useCallback((files: FileList | File[]) => {
    const newImages = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substring(7),
      file,
    }))
    setImages((prev) => [...prev, ...newImages])
  }, [])

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files)
    }
  }, [processFiles])

  const handleRemoveImg = useCallback((idToRemove: string) => {
    setImages((prev) => prev.filter((img) => img.id !== idToRemove))
  }, [])

  // Drag and Drop
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    if (e.currentTarget.contains(e.relatedTarget as Node)) return
    setIsDragging(false)
  }, [])
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files)
    }
  }, [processFiles])

  return (
    <div
      className={cn(
        "relative flex flex-col w-full rounded-xl border border-input bg-background dark:bg-input/20 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all p-2",
        className
      )}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*,application/pdf" multiple className="hidden" />

      {/* Drag & Drop Overlay */}
      <AnimatePresence>
        {isDragging && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary bg-background/80 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center gap-2 text-primary pointer-events-none">
              <p className="text-sm font-medium">Drop files to attach</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slash Command Menu Popover */}
      <AnimatePresence>
        {isCommandMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ type: "spring", bounce: 0, duration: 0.25 }}
            className="absolute bottom-[calc(100%+8px)] left-0 w-full max-w-[340px] overflow-hidden rounded-xl border border-input bg-background/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-xl z-50"
          >
            <div className="p-1.5 flex flex-col max-h-[300px] overflow-y-auto">
              {filteredCommands.length === 0 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">No commands found.</div>
              ) : (
                filteredCommands.map((cmd, i) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelectCommand(cmd)}
                    className={cn(
                      "flex items-center gap-2.5 w-full p-2 rounded-lg text-left transition-colors",
                      i === selectedIndex
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                    )}
                  >
                    <div className="flex items-center justify-center rounded-sm p-1">
                      <cmd.icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium leading-tight">{cmd.title}</span>
                      <span className="text-xs opacity-70 mt-0.5">{cmd.description}</span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Images */}
      {images.length > 0 && (
        <div className="flex flex-wrap gap-2 px-2 pt-2">
          <AnimatePresence>
            {images.map(({ id, file }) => (
              <FileThumbnail key={id} file={file} onRemove={() => handleRemoveImg(id)} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Selected Command Pill */}
      {selectedSlashCommand && (
        <div className="flex px-2 pt-2">
          <div className="flex items-center gap-1.5 rounded-full bg-secondary/80 text-secondary-foreground px-3 py-1 text-xs font-medium shadow-sm border border-input/50 backdrop-blur-md">
            <selectedSlashCommand.icon className="h-3.5 w-3.5" />
            {selectedSlashCommand.title}
            <button
              onClick={() => setSelectedSlashCommand(null)}
              className="ml-1 opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Input Area (Bottom row) */}
      <div className="flex items-end gap-2 px-1 pb-1 w-full relative">
        <Button
          onClick={() => fileInputRef.current?.click()}
          className="h-8 w-8 rounded-full shrink-0 text-muted-foreground hover:text-foreground mb-0.5"
          size="icon"
          variant="ghost"
          type="button"
        >
          <ImagePlus className="h-5 w-5" />
        </Button>

        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything or type '/' for commands..."
          className="w-full bg-transparent text-[15px] resize-none outline-none py-1.5 placeholder:text-muted-foreground min-h-[32px] max-h-[200px]"
          rows={1}
        />

        <Button
          disabled={disable}
          size="icon"
          onClick={handleSubmitClick}
          className={cn(
            "h-8 w-8 rounded-full shrink-0 mb-0.5 transition-all",
            !disable ? "bg-primary text-primary-foreground shadow-sm" : "bg-primary/10 text-primary/40"
          )}
        >
          <ArrowUp className="h-[18px] w-[18px]" />
        </Button>
      </div>
    </div>
  )
}

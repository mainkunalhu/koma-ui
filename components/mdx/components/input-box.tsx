"use client"
import { Button } from "@/components/ui/button"
import { ElementType } from "react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from "@/components/ui/input-group"
import { cn } from "@/lib/utils"
import { ImagePlus, ToolCase, X } from "lucide-react"
import Image from "next/image"
import { useRef, useState, Activity } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export interface InputBoxToolType {
  icon?: ElementType
  value: string
}

interface Props {
  className?: string
  tools: InputBoxToolType[]
  handleSubmit?: (text: string, images: File[], tool: string | null) => void | Promise<void>
}

import { FileThumbnail } from "./file-thumbnail"
import { UploadCloud } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

function InputBox({ className, tools, handleSubmit }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [disable, setDisable] = useState(true)
  const [text, setText] = useState("")
  const [images, setImages] = useState<{ id: string; file: File }[]>([])
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (selectedFiles && selectedFiles.length > 0) {
      const newFilesArray = Array.from(selectedFiles).map((file) => ({
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(7),
        file,
      }))
      setImages((prevImages) => [...prevImages, ...newFilesArray])
    }
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Prevent flickering when dragging over child elements
    if (e.currentTarget.contains(e.relatedTarget as Node)) return
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isDragging) setIsDragging(true)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles && droppedFiles.length > 0) {
      const newFilesArray = Array.from(droppedFiles).map((file) => ({
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(7),
        file,
      }))
      setImages((prevImages) => [...prevImages, ...newFilesArray])
    }
  }

  const handleImagePlusClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)
    setDisable(value.trim().length === 0)
  }

  const handleSubmitClick = async () => {
    if (!handleSubmit) return

    try {
      await handleSubmit(text, images.map(i => i.file), selectedTool)
      setText("")
      setImages([])
      setSelectedTool(null)
    } catch (error) {
      console.error("Submission failed:", error)
    }
  }
  const handleRemoveImg = (idToRemove: string) => {
    setImages((prevImages) => prevImages.filter((img) => img.id !== idToRemove))
  }
  return (
    <div 
      className={cn("w-full relative", className)}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*,application/pdf" multiple className="hidden" />
      
      <AnimatePresence>
        {isDragging && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/50 bg-background/60 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center gap-2 text-primary pointer-events-none">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <UploadCloud className="h-10 w-10" />
              </motion.div>
              <p className="text-sm font-medium">Drop files here</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <InputGroup>
        <Activity mode={images.length > 0 ? "visible" : "hidden"}>
          <InputGroupAddon align="block-start">
            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {images.map(({ id, file }) => (
                  <FileThumbnail
                    key={id}
                    file={file}
                    onRemove={() => handleRemoveImg(id)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </InputGroupAddon>
        </Activity>

        <InputGroupTextarea value={text} onChange={handleInputChange} className="max-h-24" placeholder="Let's write or build together" />
        <InputGroupAddon align="block-end">
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-2">
              <Button onClick={handleImagePlusClick} className={"cursor-pointer"} size={"default"} variant={"outline"} type="button">
                <ImagePlus />
              </Button>
              <Select value={selectedTool || undefined} onValueChange={(value) => setSelectedTool(value)}>
                <SelectTrigger className="w-fit md:w-48">
                  <ToolCase className="h-4 w-4" />
                  <SelectValue placeholder="Tools" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {tools.map((tool) => (
                      <SelectItem key={tool.value} value={tool.value}>
                        {tool.icon && <tool.icon className="h-4 w-4" />}
                        {tool.value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <InputGroupButton disabled={disable} size="sm" variant="default" onClick={handleSubmitClick}>
              Submit
            </InputGroupButton>
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default InputBox

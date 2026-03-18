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

function InputBox({ className, tools, handleSubmit }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [disable, setDisable] = useState(true)
  const [text, setText] = useState("")
  const [images, setImages] = useState<File[]>([])
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    if (selectedFiles && selectedFiles.length > 0) {
      const newFilesArray = Array.from(selectedFiles)
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
      await handleSubmit(text, images, selectedTool)
      setText("")
      setImages([])
      setSelectedTool(null)
    } catch (error) {
      console.error("Submission failed:", error)
    }
  }
  const handleRemoveImg = (indexToRemove: number) => {
    setImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove))
  }
  return (
    <div className={cn("w-full", className)}>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" multiple className="hidden" />
      <InputGroup>
        <Activity mode={images.length > 0 ? "visible" : "hidden"}>
          <InputGroupAddon align="block-start">
            <div className="flex flex-wrap gap-2">
              {images.map((file, index) => {
                const imageUrl = URL.createObjectURL(file)
                return (
                  <div key={index} className="relative h-16 w-16 overflow-hidden rounded-xl border border-border">
                    <Image width={100} height={100} src={imageUrl} alt={`Preview ${index}`} className="h-16 w-16 object-cover" />
                    <Button className={"absolute top-1 right-1 z-10 cursor-pointer"} variant={"default"} size={"icon-xs"} onClick={() => handleRemoveImg(index)}>
                      <X className="text-black" />
                    </Button>
                  </div>
                )
              })}
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

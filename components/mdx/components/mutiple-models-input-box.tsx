"use client"

import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupTextarea } from "@/components/ui/input-group"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"
import { Dispatch, ElementType, SetStateAction, useState, memo } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export interface MutipleModelsInputBoxProps {
  className?: string
  handleSubmit?: (text: string, modelName: string | null) => void | Promise<void>
  data: MutipleModelSelectionItems[]
}

export interface MutipleModelSelectionItems {
  title: string
  icon: ElementType
  models: string[]
}

export interface MutipleModelSelectionProps {
  data: MutipleModelSelectionItems[]
  llmModels: string | null
  setLlmModels: Dispatch<SetStateAction<string | null>>
}

const ModelSelection = memo(function ModelSelection({ data, llmModels, setLlmModels }: MutipleModelSelectionProps) {
  const handleValueChange = (value: string | null) => {
    setLlmModels(value)
  }

  return (
    <Select value={llmModels || ""} onValueChange={(value) => handleValueChange(value)}>
      <SelectTrigger className="w-72 md:w-fit md:min-w-96">
        <SelectValue placeholder="Select an LLM model" />
      </SelectTrigger>
      <SelectContent className="py-2">
        {data.map((item, index) => {
          return (
            <SelectGroup className="md:w-96" key={index + item.title}>
              <SelectLabel className="flex items-center justify-start gap-2 text-xs font-semibold text-primary md:text-sm">
                <item.icon className="size-4 md:size-5" /> {item.title}
              </SelectLabel>
              {item.models.map((name) => {
                return (
                  <SelectItem className="ml-2 w-[97%] cursor-pointer text-muted-foreground" value={name} key={name}>
                    {name}
                  </SelectItem>
                )
              })}
            </SelectGroup>
          )
        })}
      </SelectContent>
    </Select>
  )
})

export default function MutipleModelsInputBox({ className, handleSubmit, data }: MutipleModelsInputBoxProps) {
  const [text, setText] = useState("")
  const [llmModels, setLlmModels] = useState<string | null>(null)

  const isButtonDisabled = text.trim().length === 0 && !llmModels

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleSubmitClick = async () => {
    if (!handleSubmit) return

    try {
      await handleSubmit(text, llmModels)
      setText("")
    } catch (error) {
      console.error("Submission failed:", error)
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <InputGroup className="p-1">
        <InputGroupTextarea value={text} onChange={handleInputChange} className="max-h-24" placeholder="Type your message here..." />
        <InputGroupAddon align="block-end">
          <div className="flex w-full items-center justify-between">
            <ModelSelection data={data} llmModels={llmModels} setLlmModels={setLlmModels} />
            <InputGroupButton disabled={isButtonDisabled} size="sm" variant="default" onClick={handleSubmitClick}>
              <ArrowUp />
            </InputGroupButton>
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

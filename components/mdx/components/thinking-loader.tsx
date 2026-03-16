"use client"

import { motion } from "motion/react"
import { Spinner } from "@/components/ui/spinner"

function ThinkingText({ textData = [] }: { textData?: string[] }) {
  if (!textData || textData.length === 0) return null
  const extendedTextData = [...textData, textData[0]]
  const yKeyframes = extendedTextData.flatMap((_, index) => {
    const yPosition = `-${(index * 100) / extendedTextData.length}%`
    if (index === extendedTextData.length - 1) {
      return [yPosition]
    }
    return [yPosition, yPosition]
  })

  return (
    <div className="h-6 overflow-hidden text-sm text-primary">
      <motion.div
        animate={{ y: yKeyframes }}
        transition={{
          duration: textData.length * 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="flex flex-col"
      >
        {extendedTextData.map((item, index) => (
          <div key={`${item}-${index}`} className="flex h-6 items-center">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function ThinkingLoader({ thinkingText = ["Thinking ...", "Searching Web", "Extracting Relevant Info", "Generating Answer"] }: { thinkingText?: string[] }) {
  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <Spinner className="size-6" />
      <ThinkingText textData={thinkingText} />
    </div>
  )
}

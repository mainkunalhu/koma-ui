"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { FileText, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface FileThumbnailProps {
  file: File
  onRemove: () => void
}

export function FileThumbnail({ file, onRemove }: FileThumbnailProps) {
  const [isUploading, setIsUploading] = useState(true)
  const [objectUrl, setObjectUrl] = useState<string | null>(null)

  const isImage = file.type.startsWith("image/")

  useEffect(() => {
    if (isImage) {
      const url = URL.createObjectURL(file)
      setObjectUrl(url)
      return () => URL.revokeObjectURL(url)
    }
  }, [file, isImage])

  // Simulate upload delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUploading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/50"
    >
      <AnimatePresence mode="wait">
        {isUploading ? (
          <motion.div
            key="uploading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10"
          >
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10"
          >
            <Button
              className="absolute top-1 right-1 h-5 w-5 rounded-full p-0 shadow-md transition-transform hover:scale-110"
              variant="secondary"
              onClick={onRemove}
              aria-label="Remove file"
            >
              <X className="h-3 w-3" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {isImage && objectUrl ? (
        <Image
          src={objectUrl}
          alt={file.name}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
          <FileText className="h-6 w-6" />
          <span className="max-w-[50px] truncate text-[9px] font-medium uppercase tracking-wider">
            {file.name.split('.').pop()}
          </span>
        </div>
      )}
    </motion.div>
  )
}

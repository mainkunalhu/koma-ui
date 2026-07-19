"use client"

import React, { useState, useEffect } from "react"
import { Check, Copy } from "lucide-react"
import { codeToHtml } from "shiki"

export interface AiCodeBlockProps {
  language: string
  code: string
  filename?: string
  className?: string
}

export default function AiCodeBlock({
  language,
  code,
  filename,
  className = "",
}: AiCodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false)
  const [html, setHtml] = useState<string>("")

  useEffect(() => {
    let isMounted = true
    const highlight = async () => {
      try {
        const out = await codeToHtml(code, {
          lang: language || "text",
          theme: "github-dark",
        })
        if (isMounted) {
          setHtml(out)
        }
      } catch (err) {
        // Fallback to plain text if language is missing or errors
        try {
          const fallback = await codeToHtml(code, {
            lang: "text",
            theme: "github-dark",
          })
          if (isMounted) {
            setHtml(fallback)
          }
        } catch (e) {
          if (isMounted) {
            setHtml(`<pre><code>${code}</code></pre>`)
          }
        }
      }
    }
    
    // Clear html to prevent flash of wrong code if code changes
    setHtml("")
    highlight()

    return () => {
      isMounted = false
    }
  }, [code, language])

  const copyToClipboard = async () => {
    if (!code) return
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code: ", err)
    }
  }

  return (
    <div className={`my-4 overflow-hidden rounded-xl border border-border/50 bg-[#0d1117] shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-[#161b22] px-4 py-2 text-xs text-muted-foreground border-b border-border/10">
        <div className="flex items-center gap-2">
          {filename ? (
            <span className="font-medium text-foreground/80">{filename}</span>
          ) : (
            <span className="uppercase font-medium">{language || "text"}</span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 transition-colors hover:bg-muted/30 hover:text-foreground"
          aria-label="Copy code"
        >
          {isCopied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code Body */}
      <div className="overflow-x-auto p-4 text-sm [&>pre]:!m-0 [&>pre]:!bg-transparent [&>pre]:!p-0 [&_code]:!bg-transparent">
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre className="text-foreground/90 font-mono">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}

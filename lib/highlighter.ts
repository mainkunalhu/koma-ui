import { createHighlighter } from "shiki"

export async function highlightCode(code: string, lang: string = "tsx") {
  const highlighter = await createHighlighter({
    themes: ["none", "ayu-dark"],
    langs: ["tsx", "typescript", "bash"],
  })

  const html = highlighter.codeToHtml(code, {
    lang,
    theme: "none",
    structure: "classic",
  })

  return html
}

import { createHighlighter } from "shiki"

export async function highlightCode(code: string, lang: string = "tsx") {
  const highlighter = await createHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["tsx", "typescript", "bash"],
  })

  const html = highlighter.codeToHtml(code, {
    lang,

    theme: "github-dark",

    structure: "classic",
  })

  return html
}

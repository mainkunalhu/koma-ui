import { createHighlighter, type Highlighter } from "shiki"

const globalForShiki = globalThis as unknown as {
  highlighterPromise: Promise<Highlighter> | undefined
}

export async function highlightCode(code: string, lang: string = "tsx") {
  if (!globalForShiki.highlighterPromise) {
    globalForShiki.highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["tsx", "typescript", "bash"],
    })
  }

  const highlighter = await globalForShiki.highlighterPromise

  const html = highlighter.codeToHtml(code, {
    lang,
    theme: "github-dark",
    structure: "classic",
  })

  return html
}

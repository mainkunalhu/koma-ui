import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { InputBoxPreview, ThinkingLoaderPreview, ThinkingLoaderProps, ThinkingLoaderUsages, InputBoxProps, InputBoxUsages, AiMessagePreview, AiMessageProps, AiMessageUsages } from "./components-preview"
import { InstalltionCmd } from "./installation"
import { ComponentsList } from "./components-list"

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...components,
    ComponentsList,
    InstalltionCmd,
    // components
    InputBoxPreview,
    ThinkingLoaderPreview,
    ThinkingLoaderProps,
    ThinkingLoaderUsages,
    InputBoxProps,
    InputBoxUsages,
    AiMessagePreview,
    AiMessageProps,
    AiMessageUsages,
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}

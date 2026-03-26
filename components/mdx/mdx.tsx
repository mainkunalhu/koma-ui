import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { InputBoxPreview, ThinkingLoaderPreview, ThinkingLoaderProps, ThinkingLoaderUsages, InputBoxProps, InputBoxUsages, AiMessagePreview, AiMessageProps, AiMessageUsages, ChainOfThoughtPreview, ChainOfThoughtProps, ChainOfThoughtUsages, MutipleModelsInputBoxPreview, MutipleModelsInputBoxProps, MutipleModelsInputBoxUsages } from "./components-preview"
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
    ChainOfThoughtPreview,
    ChainOfThoughtProps,
    ChainOfThoughtUsages,
    MutipleModelsInputBoxPreview,
    MutipleModelsInputBoxProps,
    MutipleModelsInputBoxUsages,
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}

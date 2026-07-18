import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"
import { InputBoxPreview, ThinkingLoaderPreview, ThinkingLoaderProps, ThinkingLoaderUsages, InputBoxProps, InputBoxUsages, AiMessagePreview, AiMessageProps, AiMessageUsages, ChainOfThoughtPreview, ChainOfThoughtProps, ChainOfThoughtUsages, MutipleModelsInputBoxPreview, MutipleModelsInputBoxProps, MutipleModelsInputBoxUsages, PromptSuggestionsPreview, PromptSuggestionsProps, PromptSuggestionsUsages, ChatLayoutPreview, ChatLayoutUsages, ArtifactViewerPreview, ArtifactViewerProps, ArtifactViewerUsages, InlineCitationPreview, InlineCitationPropsTable, InlineCitationUsages, TokenStatsBadgePreview, TokenStatsBadgePropsTable, TokenStatsBadgeUsages } from "./components-preview"
import { InstalltionCmd } from "./installation"
import { ComponentsList } from "./components-list"
import { BlocksList } from "./blocks-list"

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...components,
    ComponentsList,
    BlocksList,
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
    PromptSuggestionsPreview,
    PromptSuggestionsProps,
    PromptSuggestionsUsages,
    ChatLayoutPreview,
    ChatLayoutUsages,
    ArtifactViewerPreview,
    ArtifactViewerProps,
    ArtifactViewerUsages,
    InlineCitationPreview,
    InlineCitationPropsTable,
    InlineCitationUsages,
    TokenStatsBadgePreview,
    TokenStatsBadgePropsTable,
    TokenStatsBadgeUsages,
  } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}

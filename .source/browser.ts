// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"blocks.mdx": () => import("../content/docs/blocks.mdx?collection=docs"), "components.mdx": () => import("../content/docs/components.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "blocks/chat-layout.mdx": () => import("../content/docs/blocks/chat-layout.mdx?collection=docs"), "blocks/copilot-widget.mdx": () => import("../content/docs/blocks/copilot-widget.mdx?collection=docs"), "components/ai-code-block.mdx": () => import("../content/docs/components/ai-code-block.mdx?collection=docs"), "components/artifact-viewer.mdx": () => import("../content/docs/components/artifact-viewer.mdx?collection=docs"), "components/chain-of-thought.mdx": () => import("../content/docs/components/chain-of-thought.mdx?collection=docs"), "components/inline-citation.mdx": () => import("../content/docs/components/inline-citation.mdx?collection=docs"), "components/input-box.mdx": () => import("../content/docs/components/input-box.mdx?collection=docs"), "components/mutiple-models-input-box.mdx": () => import("../content/docs/components/mutiple-models-input-box.mdx?collection=docs"), "components/prompt-suggestions.mdx": () => import("../content/docs/components/prompt-suggestions.mdx?collection=docs"), "components/slash-command-input.mdx": () => import("../content/docs/components/slash-command-input.mdx?collection=docs"), "components/streaming-ai-message.mdx": () => import("../content/docs/components/streaming-ai-message.mdx?collection=docs"), "components/thinking-loader.mdx": () => import("../content/docs/components/thinking-loader.mdx?collection=docs"), "components/token-stats-badge.mdx": () => import("../content/docs/components/token-stats-badge.mdx?collection=docs"), }),
};
export default browserCollections;
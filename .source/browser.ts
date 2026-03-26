// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"blocks.mdx": () => import("../content/docs/blocks.mdx?collection=docs"), "components.mdx": () => import("../content/docs/components.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/chain-of-thought.mdx": () => import("../content/docs/components/chain-of-thought.mdx?collection=docs"), "components/input-box.mdx": () => import("../content/docs/components/input-box.mdx?collection=docs"), "components/mutiple-models-input-box.mdx": () => import("../content/docs/components/mutiple-models-input-box.mdx?collection=docs"), "components/streaming-ai-message.mdx": () => import("../content/docs/components/streaming-ai-message.mdx?collection=docs"), "components/thinking-loader.mdx": () => import("../content/docs/components/thinking-loader.mdx?collection=docs"), }),
};
export default browserCollections;
// @ts-nocheck
import * as __fd_glob_13 from "../content/docs/components/token-stats-badge.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/components/thinking-loader.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/components/streaming-ai-message.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/components/prompt-suggestions.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/persona-settings-drawer.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/mutiple-models-input-box.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/input-box.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/components/inline-citation.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/chain-of-thought.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/artifact-viewer.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/blocks/chat-layout.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/components.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/blocks.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"blocks.mdx": __fd_glob_0, "components.mdx": __fd_glob_1, "index.mdx": __fd_glob_2, "blocks/chat-layout.mdx": __fd_glob_3, "components/artifact-viewer.mdx": __fd_glob_4, "components/chain-of-thought.mdx": __fd_glob_5, "components/inline-citation.mdx": __fd_glob_6, "components/input-box.mdx": __fd_glob_7, "components/mutiple-models-input-box.mdx": __fd_glob_8, "components/persona-settings-drawer.mdx": __fd_glob_9, "components/prompt-suggestions.mdx": __fd_glob_10, "components/streaming-ai-message.mdx": __fd_glob_11, "components/thinking-loader.mdx": __fd_glob_12, "components/token-stats-badge.mdx": __fd_glob_13, });
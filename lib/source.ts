import { docs } from "collections/server"
import { loader } from "fumadocs-core/source"
import { icons } from "./icons"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(iconName) {
    if (iconName && iconName in icons) {
      return icons[iconName as keyof typeof icons]
    }
  },
})

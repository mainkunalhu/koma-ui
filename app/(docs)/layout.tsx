import { RootProvider } from "fumadocs-ui/provider/next"

export default function DocsRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main suppressHydrationWarning className="flex min-h-screen flex-col">
      <RootProvider>{children}</RootProvider>
    </main>
  )
}

"use client"

import { Contrast } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const handlePress = () => {
    if (theme) {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }

  return (
    <div onClick={handlePress} className="cursor-pointer">
      <Contrast className="size-5 text-primary" />
    </div>
  )
}

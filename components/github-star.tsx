"use client"

import { Github } from "lucide-react"
import Link from "next/link"
// import { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"

export default function GithubStar() {
  // const [stars, setStars] = useState<number | null>(null)

  // useEffect(() => {
  //   async function fetchStars() {
  //     try {
  //       const response = await fetch(`https://api.github.com/repos/mainkunalhu/koma-ui`)
  //       const data = await response.json()
  //       setStars(data.stargazers_count)
  //     } catch (error) {
  //       console.error("Error fetching GitHub stars:", error)
  //     }
  //   }
  //   fetchStars()
  // }, [])

  return (
    <Link href="https://github.com/mainkunalhu/koma-ui" target="_blank" className="flex flex-row items-center justify-center gap-1">
      <Github className="size-5" />

      {/*<div className="flex items-center gap-1.5">
        <AnimatePresence mode="wait">
          {stars !== null ? (
            <motion.span key="count" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="tabular-nums">
              {stars.toLocaleString()}
            </motion.span>
          ) : (
            <motion.span key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-3 w-8 animate-pulse rounded bg-primary/50" />
          )}
        </AnimatePresence>
      </div>*/}
    </Link>
  )
}

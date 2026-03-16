"use client"

import Link from "next/link"

export interface GridItem {
  name: string
  linkPath: string
}

export default function ListGrid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link key={item.linkPath} href={item.linkPath} className="flex items-center py-2 text-primary">
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  )
}

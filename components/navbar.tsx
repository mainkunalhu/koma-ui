import Image from "next/image"
import Link from "next/link"
import ThemeToggle from "./theme-toggle"
import GithubStar from "./github-star"

export default function Navbar() {
  const links = [
    {
      name: "Docs",
      href: "/docs",
    },
    {
      name: "Components",
      href: "/docs/components",
    },
    {
      name: "Blocks",
      href: "/docs/blocks",
    },
  ]
  return (
    <nav className="text-md flex w-full flex-row items-center justify-between border-b p-3 md:p-2.5">
      <div className="flex flex-row items-center justify-center gap-8">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={32} height={32} alt="logo" className="size-8 rounded-xs border" />
        </Link>
        <div className="hidden flex-row gap-4 md:flex">
          {links.map(({ href, name }) => {
            return (
              <Link className="text-sm font-semibold text-primary transition-colors hover:text-primary/70" key={name} href={href}>
                {name}
              </Link>
            )
          })}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <ThemeToggle />
        <GithubStar />
      </div>
    </nav>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { advancedSections } from "@/components/docs/advanced/sections"
import { cn } from "cn"

const links = [
  { href: "/", label: "Overview" },
  { href: "/foundations", label: "Foundations" },
  { href: "/components", label: "Components" },
]

const componentLinks = [
  { href: "/components/actions", label: "Actions" },
  { href: "/components/forms", label: "Forms" },
  { href: "/components/overlays", label: "Overlays" },
  { href: "/components/data", label: "Data" },
  { href: "/components/feedback", label: "Feedback" },
]

const advancedLinks = advancedSections.map((section) => ({
  href: `/components/advanced/${section.slug}`,
  label: section.title,
}))

export function DocsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-full bg-background md:grid md:grid-cols-[15rem_minmax(0,1fr)]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <header className="flex items-center gap-3 border-b border-sidebar-border bg-sidebar px-4 py-3 md:hidden">
        <Wordmark />
      </header>
      <nav className="flex gap-1 overflow-x-auto border-b border-sidebar-border bg-sidebar px-3 py-2 md:hidden">
        {[...links, ...componentLinks, { href: "/components/advanced", label: "Advanced" }, ...advancedLinks].map(
          (link) => (
            <NavLink key={link.href} {...link} active={pathname === link.href} />
          ),
        )}
      </nav>
      <aside className="sticky top-0 hidden h-dvh flex-col overflow-y-auto border-r border-sidebar-border bg-sidebar px-3 py-4 md:flex">
        <Wordmark />
        <div className="mt-6 flex flex-col gap-px">
          {links.map((link) => (
            <NavLink key={link.href} {...link} active={pathname === link.href} />
          ))}
          <div className="mt-3 flex flex-col gap-px">
            {componentLinks.map((link) => (
              <NavLink key={link.href} {...link} active={pathname === link.href} nested />
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-px">
            <NavLink href="/components/advanced" label="Advanced" active={pathname === "/components/advanced"} />
            {advancedLinks.map((link) => (
              <NavLink key={link.href} {...link} active={pathname === link.href} nested />
            ))}
          </div>
        </div>
      </aside>
      <main id="content" className="px-5 py-8 md:px-10 md:py-10">
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </main>
    </div>
  )
}

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2 px-2 text-sm font-semibold tracking-tight">
      <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
      Sprynt
    </Link>
  )
}

function NavLink({
  href,
  active,
  label,
  nested = false,
}: {
  href: string
  active: boolean
  label: string
  nested?: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-md px-2 py-1.5 text-sm whitespace-nowrap",
        nested && "py-1 pl-4 text-[13px]",
        active
          ? "bg-secondary font-semibold text-foreground"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
      )}
    >
      {label}
    </Link>
  )
}

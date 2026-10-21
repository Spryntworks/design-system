import type { Metadata } from "next"
import Link from "next/link"

import { advancedSections } from "@/components/docs/advanced/sections"

export const metadata: Metadata = { title: "Advanced" }

export default function AdvancedPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="type-display">Advanced</h1>
        <p className="type-body mt-3 text-muted-foreground">
          Patterns a desk repeats. Each one is its own section.
        </p>
      </header>
      <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {advancedSections.map((section) => (
          <li key={section.slug}>
            <Link
              href={`/components/advanced/${section.slug}`}
              className="flex flex-col gap-1 px-4 py-3 hover:bg-muted"
            >
              <span className="text-sm font-semibold">{section.title}</span>
              <span className="text-sm text-muted-foreground">{section.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

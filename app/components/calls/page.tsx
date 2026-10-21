import type { Metadata } from "next"
import Link from "next/link"

import { callSections } from "@/components/docs/calls/sections"

export const metadata: Metadata = { title: "Calls" }

export default function CallsPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="text-3xl font-semibold">Calls</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          The line. Who is waiting, who is speaking, and when a person takes over.
        </p>
      </header>
      <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {callSections.map((section) => (
          <li key={section.slug}>
            <Link
              href={`/components/calls/${section.slug}`}
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

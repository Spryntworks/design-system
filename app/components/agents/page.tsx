import type { Metadata } from "next"
import Link from "next/link"

import { agentSections } from "@/components/docs/agents/sections"

export const metadata: Metadata = { title: "Agents" }

export default function AgentsPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="type-display">Agents</h1>
        <p className="type-body mt-3 text-muted-foreground">
          The worker beside the line. What it heard, what it wants to do, and where it waits for a person.
        </p>
      </header>
      <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {agentSections.map((section) => (
          <li key={section.slug}>
            <Link
              href={`/components/agents/${section.slug}`}
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

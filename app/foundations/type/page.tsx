import type { Metadata } from "next"

import { StatusPill } from "@/components/ui/status-pill"

export const metadata: Metadata = {
  title: "Type",
}

const roles = [
  ["Display", "type-display", "Page title", "Space Grotesk 600", "1.85rem"],
  ["Title", "type-title", "Section", "Space Grotesk 600", "1.28rem"],
  ["Body", "type-body", "Reading", "Space Grotesk 400", "1rem"],
  ["Label", "type-label", "Names a control or a row", "Space Grotesk 500", "1rem"],
  ["Meta", "type-meta text-muted-foreground", "Secondary sentence", "Space Grotesk 400", "0.86rem"],
  ["Data", "type-data", "Time, count, token", "Geist Mono 500", "0.86rem"],
  ["Figure", "type-figure", "The number you read first", "Geist Mono 500", "2rem"],
] as const

const tools = [
  { name: "Training Portal", meta: "Week 12 narrative", status: "WAIT" },
  { name: "Support Portal", meta: "Open tickets", status: "READY" },
  { name: "Content Copilot", meta: "Launch thread", status: "BLOCKED" },
] as const

export default function TypePage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="max-w-[68ch]">
        <h1 className="type-display">Type</h1>
        <p className="type-body mt-3 text-muted-foreground">
          Space Grotesk carries the interface. Geist Mono carries time, counts, and tokens.
          The root is 14px, so the desk stays dense. Roles are named by the job, not the pixel size.
        </p>
      </header>

      <section className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border px-5 py-5">
          <h2 className="type-display">The desk</h2>
          <p className="type-body mt-3 max-w-[68ch] text-muted-foreground">
            The same roles in every internal tool. A name, a status, and a figure do not change face when the tool changes.
          </p>
        </div>
        <ul className="divide-y divide-border">
          {tools.map((tool) => (
            <li key={tool.name} className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
              <div>
                <p className="type-label">{tool.name}</p>
                <p className="type-meta mt-1 text-muted-foreground">{tool.meta}</p>
              </div>
              <StatusPill value={tool.status} />
            </li>
          ))}
          <li className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="type-label">Call desk</p>
              <p className="type-meta mt-1 text-muted-foreground">Maya Chen on the line</p>
            </div>
            <p className="type-figure">04:18</p>
          </li>
        </ul>
        <p className="type-data border-t border-border px-5 py-4 text-muted-foreground">var(--font-space-grotesk)</p>
      </section>

      <section>
        <h2 className="type-title">Roles</h2>
        <p className="type-meta mt-2 max-w-[68ch] text-muted-foreground">
          Display and title change size and weight. Label stays the body size and uses weight.
          Meta drops a size. Data and figure are the only mono roles.
        </p>
        <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
          {roles.map(([name, sample, use, face, size]) => (
            <div
              key={name}
              className="grid items-baseline gap-3 border-t border-border px-5 py-4 first:border-t-0 md:grid-cols-[8rem_minmax(0,1fr)_auto]"
            >
              <p className="type-meta text-muted-foreground">{name}</p>
              <p className={sample}>{use}</p>
              <p className="type-data text-muted-foreground">
                {face} · {size}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

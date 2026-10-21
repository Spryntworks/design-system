import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { StatusPill } from "@/components/ui/status-pill"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Overview",
}

const runs = [
  { project: "Training Portal", surface: "Week 12 batch", status: "READY" },
  { project: "Support Portal", surface: "Open tickets", status: "WAIT" },
  { project: "Content Copilot", surface: "Campaign draft", status: "BLOCKED" },
] as const

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="max-w-[68ch]">
        <h1 className="type-display">Sprynt</h1>
        <p className="type-body mt-3 text-muted-foreground">
          The tool language from the GTM desk. A cool gray ground, white panels,
          a hairline border, and magenta for the one action that matters.
          Ready, Wait, and Blocked are the only statuses.
        </p>
        <p className="type-body mt-3">
          Tokens live in <code className="type-data">app/globals.css</code>.
          Components live in <code className="type-data">components/ui</code>.
          This site renders those files. Change the system here, then bring the
          same files into a tool.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/foundations" className={buttonVariants()}>
            Foundations
          </Link>
          <Link href="/components" className={buttonVariants({ variant: "outline" })}>
            Components
          </Link>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold">A desk row</h2>
        <p className="mt-2 max-w-[68ch] text-sm leading-6 text-muted-foreground">
          The same panel, type, and status every internal tool should start from.
        </p>
        <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
            <div>
              <h3 className="text-sm font-semibold">Runs</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">This week</p>
            </div>
            <Link href="/components" className={buttonVariants()}>
              New run
            </Link>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Surface</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {runs.map((run) => (
                <TableRow key={run.project}>
                  <TableCell className="font-medium">{run.project}</TableCell>
                  <TableCell>{run.surface}</TableCell>
                  <TableCell>
                    <StatusPill value={run.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  )
}

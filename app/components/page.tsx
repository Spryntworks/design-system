import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Components",
}

const groups = [
  {
    href: "/components/actions",
    title: "Actions",
    note: "Buttons, sizes, groups, toggles, and shortcuts.",
  },
  {
    href: "/components/forms",
    title: "Forms",
    note: "Fields, search, select, combobox, choice, slider, and date.",
  },
  {
    href: "/components/overlays",
    title: "Overlays",
    note: "Command, dialog, sheet, menu, popover, tooltip, and hover card.",
  },
  {
    href: "/components/data",
    title: "Data",
    note: "Breadcrumb, selectable table, pagination, tabs, and accordion.",
  },
  {
    href: "/components/feedback",
    title: "Feedback",
    note: "Status, alerts, progress, skeleton, empty, and toast.",
  },
  {
    href: "/components/advanced",
    title: "Advanced",
    note: "Sidebar, split view, sorting, filters, chart, steps, and confirm.",
  },
]

export default function ComponentsPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="text-3xl font-semibold">Components</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          The files in{" "}
          <code className="font-mono text-[0.85em] text-foreground">components/ui</code>.
          Each group shows the variations a tool is allowed to use.
        </p>
      </header>
      <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
        {groups.map((group) => (
          <li key={group.href}>
            <Link href={group.href} className="flex flex-col gap-1 px-4 py-3 hover:bg-muted">
              <span className="text-sm font-semibold">{group.title}</span>
              <span className="text-sm text-muted-foreground">{group.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

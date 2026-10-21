import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Foundations",
}

const colors = [
  ["Ground", "Page background", "bg-background", "#F3F4F6", "text-foreground"],
  ["Panel", "Cards, dialogs, menus", "bg-card", "#FFFFFF", "text-card-foreground"],
  ["Sidebar", "App chrome", "bg-sidebar", "#FBFCFD", "text-sidebar-foreground"],
  ["Ink", "Text", "bg-foreground", "#0F172A", "text-background"],
  ["Muted", "Secondary text", "bg-muted-foreground", "#5C6B7E", "text-background"],
  ["Line", "Borders", "bg-border", "#E2E8F0", "text-foreground"],
  ["Mark", "The primary action", "bg-primary", "#FE00AB", "text-primary-foreground"],
  ["Ready", "Status label on a tint", "bg-ready-foreground", "#A5006B", "text-background"],
  ["Wait", "Waiting on someone", "bg-wait", "#B45309", "text-background"],
  ["Blocked", "Stopped, needs a fix", "bg-blocked", "#C2410C", "text-white"],
] as const

const type = [
  ["Display", "text-3xl font-semibold", "Sprynt"],
  ["Title", "text-xl font-semibold", "Runs"],
  ["Body", "text-base", "The shared language for internal tools."],
  ["Label", "text-sm font-medium", "Mission title"],
  ["Meta", "text-sm text-muted-foreground", "Week 12 batch"],
  ["Token", "font-mono text-sm", "var(--primary)"],
] as const

const space = [
  ["1", "0.25rem"],
  ["2", "0.5rem"],
  ["3", "0.75rem"],
  ["4", "1rem"],
  ["6", "1.5rem"],
  ["8", "2rem"],
  ["12", "3rem"],
] as const

const radii = [
  ["sm", "rounded-sm"],
  ["md", "rounded-md"],
  ["lg", "rounded-lg"],
  ["xl", "rounded-xl"],
] as const

export default function FoundationsPage() {
  return (
    <div className="flex flex-col gap-16">
      <header className="max-w-[68ch]">
        <h1 className="text-3xl font-semibold">Foundations</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Color, type, space, and radius from the GTM desk. These values are the
          CSS variables in{" "}
          <code className="font-mono text-[0.85em] text-foreground">app/globals.css</code>.
          Components read them. Tools should too.
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Color</h2>
        <p className="mt-2 max-w-[68ch] text-sm leading-6 text-muted-foreground">
          Magenta is the mark, used for the primary action and for Ready.
          Wait is amber. Blocked is red-orange. Everything else stays gray,
          white, and ink. Elevation is the 1px line. Shadow is only for a
          floating menu or a toast.
        </p>
        <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted text-left">
              <tr>
                <th className="px-4 py-2 font-medium">Token</th>
                <th className="px-4 py-2 font-medium">Use</th>
                <th className="px-4 py-2 font-medium">Value</th>
              </tr>
            </thead>
            <tbody>
              {colors.map(([name, use, swatch, value, ink]) => (
                <tr key={name} className="border-t border-border">
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-3">
                      <span
                        className={`${swatch} ${ink} inline-flex size-8 items-center justify-center rounded-md text-[10px] font-medium ring-1 ring-foreground/10`}
                      >
                        Aa
                      </span>
                      {name}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{use}</td>
                  <td className="px-4 py-3 font-mono tabular-nums">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Type</h2>
        <p className="mt-3 max-w-[68ch] text-sm leading-6 text-muted-foreground">
          Space Grotesk for interface text. Geist Mono for tokens, code, and
          measurements.
        </p>
        <div className="mt-6 flex flex-col">
          {type.map(([name, className, sample]) => (
            <div
              key={name}
              className="grid gap-2 border-t border-border py-4 sm:grid-cols-[7rem_1fr] sm:items-baseline"
            >
              <p className="text-sm text-muted-foreground">{name}</p>
              <p className={className}>{sample}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Space</h2>
        <p className="mt-3 max-w-[68ch] text-sm leading-6 text-muted-foreground">
          Use the Tailwind spacing scale. Tight inside a control, wider between
          sections.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {space.map(([step, size]) => (
            <div key={step} className="flex items-center gap-4">
              <span className="w-16 shrink-0 font-mono text-sm tabular-nums">
                {step} · {size}
              </span>
              <span
                className="h-3 rounded-sm bg-primary"
                style={{ width: size }}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Radius</h2>
        <p className="mt-2 max-w-[68ch] text-sm leading-6 text-muted-foreground">
          Controls use 6px. Large panels use 12px.
        </p>
        <div className="mt-6 flex flex-wrap gap-6">
          {radii.map(([name, radius]) => (
            <div key={name} className="flex flex-col gap-2">
              <span className={`size-16 border border-border bg-card ${radius}`} />
              <span className="font-mono text-sm">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

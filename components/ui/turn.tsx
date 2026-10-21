import { cn } from "cn"

export function TurnList({
  label,
  framed = true,
  children,
}: {
  label: string
  framed?: boolean
  children: React.ReactNode
}) {
  return (
    <ol
      aria-label={label}
      className={cn("divide-y divide-border", framed && "rounded-xl border border-border bg-card")}
    >
      {children}
    </ol>
  )
}

export function Turn({
  who,
  meta,
  kind = "person",
  children,
}: {
  who: string
  meta?: string
  kind?: "person" | "agent" | "note"
  children: React.ReactNode
}) {
  if (kind === "note") {
    return (
      <li className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 bg-muted px-5 py-3">
        <span className="pt-0.5 font-mono text-xs tabular-nums text-muted-foreground">{meta}</span>
        <p className="text-sm leading-6 text-muted-foreground">
          <span className="font-semibold text-foreground">{who}. </span>
          {children}
        </p>
      </li>
    )
  }

  return (
    <li className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 px-5 py-3.5">
      <span className="pt-0.5 font-mono text-xs tabular-nums text-muted-foreground">{meta}</span>
      <div className="min-w-0">
        <p className={cn("text-sm font-semibold", kind === "agent" && "text-foreground")}>{who}</p>
        <p className="mt-1 text-sm leading-6">{children}</p>
      </div>
    </li>
  )
}

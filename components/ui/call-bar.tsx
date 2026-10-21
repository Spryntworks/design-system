import { cn } from "cn"

import { Presence } from "@/components/ui/presence"

export function CallBar({
  name,
  detail,
  time,
  presence,
  controls,
  children,
  className,
}: {
  name: string
  detail: string
  time: string
  presence: "LIVE" | "HOLD" | "QUEUE" | "ENDED"
  controls?: React.ReactNode
  children?: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("overflow-hidden rounded-xl border border-border bg-card", className)}>
      <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 px-5 pt-5 pb-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <Presence value={presence} />
          </div>
          <p className="mt-1 max-w-[52ch] text-sm leading-6 text-muted-foreground">{detail}</p>
        </div>
        <p className="font-mono text-3xl leading-none font-medium tabular-nums tracking-tight">{time}</p>
      </header>
      {children ? <div className="border-t border-border">{children}</div> : null}
      {controls ? (
        <div className="flex flex-wrap items-center gap-2 border-t border-border bg-sidebar px-3 py-2.5">
          {controls}
        </div>
      ) : null}
    </section>
  )
}

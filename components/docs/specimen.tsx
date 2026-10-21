export function Specimen({
  title,
  note,
  flush = false,
  children,
}: {
  title: string
  note?: string
  flush?: boolean
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-lg font-semibold">{title}</h2>
      {note ? (
        <p className="mt-2 max-w-[68ch] text-sm leading-6 text-muted-foreground">{note}</p>
      ) : null}
      <div className={flush ? "mt-5" : "mt-5 overflow-hidden rounded-xl border border-border bg-card"}>
        {children}
      </div>
    </section>
  )
}

export function DeskRow({
  title,
  detail,
  children,
  className,
}: {
  title: string
  detail?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-border px-5 py-4 first:border-t-0">
      <div className="min-w-[12rem] max-w-[40ch] flex-1">
        <p className="text-sm font-semibold">{title}</p>
        {detail ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{detail}</p> : null}
      </div>
      <div className={className ?? "flex flex-wrap items-center gap-2"}>{children}</div>
    </div>
  )
}

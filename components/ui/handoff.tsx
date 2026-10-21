export function Handoff({
  figure,
  title,
  detail,
  children,
}: {
  figure?: string
  title: string
  detail: string
  children?: React.ReactNode
}) {
  return (
    <section className="rounded-xl border border-border bg-card px-5 py-5">
      {figure ? <p className="font-mono text-3xl leading-none font-medium tabular-nums tracking-tight">{figure}</p> : null}
      <h2 className={figure ? "mt-3 text-lg font-semibold" : "text-lg font-semibold"}>{title}</h2>
      <p className="mt-2 max-w-[62ch] text-sm leading-6 text-muted-foreground">{detail}</p>
      {children ? <div className="mt-5 flex flex-wrap gap-2">{children}</div> : null}
    </section>
  )
}

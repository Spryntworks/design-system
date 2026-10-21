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
      {figure ? <p className="type-figure">{figure}</p> : null}
      <h2 className={figure ? "type-title mt-3" : "type-title"}>{title}</h2>
      <p className="type-body mt-2 max-w-[62ch] text-muted-foreground">{detail}</p>
      {children ? <div className="mt-5 flex flex-wrap gap-2">{children}</div> : null}
    </section>
  )
}

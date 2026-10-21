export function Specimen({
  title,
  note,
  children,
}: {
  title: string
  note?: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="text-lg font-semibold">{title}</h2>
      {note ? (
        <p className="mt-2 max-w-[68ch] text-sm leading-6 text-muted-foreground">{note}</p>
      ) : null}
      <div className="mt-5">{children}</div>
    </section>
  )
}

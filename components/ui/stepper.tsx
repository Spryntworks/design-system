import { cn } from "cn"

export function Stepper({
  steps,
  current,
  label = "Progress",
}: {
  steps: readonly string[]
  current: number
  label?: string
}) {
  return (
    <ol aria-label={label} className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((step, index) => {
        const done = index < current
        const active = index === current
        return (
          <li
            key={step}
            className="flex items-center gap-2"
            aria-current={active ? "step" : undefined}
          >
            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums",
                done && "bg-primary text-primary-foreground",
                active && "border border-foreground text-foreground",
                !done && !active && "border border-border text-muted-foreground",
              )}
            >
              {index + 1}
            </span>
            <span
              className={cn(
                "text-sm",
                active ? "font-semibold text-foreground" : "text-muted-foreground",
              )}
            >
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="h-px w-6 bg-border" aria-hidden="true" />
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

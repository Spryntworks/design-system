import { cn } from "cn"

type Step = string | { label: string; detail?: string }

function stepLabel(step: Step) {
  return typeof step === "string" ? { label: step } : step
}

export function Stepper({
  steps,
  current,
  label = "Progress",
  orientation = "horizontal",
}: {
  steps: readonly Step[]
  current: number
  label?: string
  orientation?: "horizontal" | "vertical"
}) {
  if (orientation === "vertical") {
    return (
      <ol aria-label={label} className="flex flex-col">
        {steps.map((step, index) => {
          const item = stepLabel(step)
          const done = index < current
          const active = index === current
          const last = index === steps.length - 1
          return (
            <li
              key={item.label}
              className="relative grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-3"
              aria-current={active ? "step" : undefined}
            >
              {last ? null : (
                <span
                  className={cn(
                    "absolute top-5 bottom-0 left-[calc(0.625rem-0.5px)] w-px",
                    done ? "bg-primary" : "bg-border",
                  )}
                  aria-hidden="true"
                />
              )}
              <div className="relative flex justify-center">
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-full bg-card text-[11px] font-semibold tabular-nums",
                    done && "bg-primary text-primary-foreground",
                    active && "border border-foreground text-foreground",
                    !done && !active && "border border-border text-muted-foreground",
                  )}
                >
                  {index + 1}
                </span>
              </div>
              <div className={cn(last ? "pb-0" : "pb-5")}>
                <p className={cn("text-sm leading-5", active ? "font-semibold text-foreground" : "text-muted-foreground")}>
                  {item.label}
                </p>
                {item.detail ? <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p> : null}
              </div>
            </li>
          )
        })}
      </ol>
    )
  }

  return (
    <ol aria-label={label} className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {steps.map((step, index) => {
        const item = stepLabel(step)
        const done = index < current
        const active = index === current
        return (
          <li key={item.label} className="flex items-center gap-2" aria-current={active ? "step" : undefined}>
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
            <span className={cn("text-sm", active ? "font-semibold text-foreground" : "text-muted-foreground")}>
              {item.label}
            </span>
            {index < steps.length - 1 ? <span className="h-px w-6 bg-border" aria-hidden="true" /> : null}
          </li>
        )
      })}
    </ol>
  )
}

import { cn } from "cn"

const presence = {
  LIVE: {
    pill: "border-[rgba(254,0,171,0.25)] bg-[rgba(254,0,171,0.08)] text-ready-foreground",
    dot: "bg-ready desk-live",
  },
  WORKING: {
    pill: "border-[rgba(254,0,171,0.25)] bg-[rgba(254,0,171,0.08)] text-ready-foreground",
    dot: "bg-ready desk-live",
  },
  HOLD: {
    pill: "border-[rgba(180,83,9,0.25)] bg-[rgba(180,83,9,0.08)] text-wait",
    dot: "bg-wait",
  },
  QUEUE: {
    pill: "border-[rgba(180,83,9,0.25)] bg-[rgba(180,83,9,0.08)] text-wait",
    dot: "bg-wait",
  },
  WAITING: {
    pill: "border-[rgba(180,83,9,0.25)] bg-[rgba(180,83,9,0.08)] text-wait",
    dot: "bg-wait",
  },
  ENDED: {
    pill: "border-border bg-muted text-muted-foreground",
    dot: "bg-muted-foreground",
  },
  IDLE: {
    pill: "border-border bg-muted text-muted-foreground",
    dot: "bg-muted-foreground",
  },
} as const

export function Presence({ value }: { value: keyof typeof presence }) {
  const tone = presence[value]
  return (
    <span
      className={cn(
        "inline-flex h-5 items-center gap-1.5 rounded-full border px-2 text-[0.68rem] font-bold tracking-[0.06em]",
        tone.pill,
      )}
    >
      <span className={cn("size-1.5 rounded-full", tone.dot)} aria-hidden="true" />
      {value}
    </span>
  )
}

import { cn } from "cn"

const status = {
  READY: {
    pill: "border-[rgba(254,0,171,0.25)] bg-[rgba(254,0,171,0.08)] text-ready-foreground",
    dot: "bg-ready",
  },
  WAIT: {
    pill: "border-[rgba(180,83,9,0.25)] bg-[rgba(180,83,9,0.08)] text-wait",
    dot: "bg-wait",
  },
  BLOCKED: {
    pill: "border-[rgba(194,65,12,0.25)] bg-[rgba(194,65,12,0.08)] text-blocked",
    dot: "bg-blocked",
  },
} as const

export function StatusPill({
  value,
}: {
  value: keyof typeof status
}) {
  const tone = status[value]
  return (
    <span
      className={cn(
        "inline-flex h-5 items-center gap-1.5 rounded-full border px-2 text-[0.68rem] font-bold tracking-[0.06em]",
        tone.pill,
      )}
    >
      <span className={cn("size-2 rounded-full", tone.dot)} aria-hidden="true" />
      {value}
    </span>
  )
}

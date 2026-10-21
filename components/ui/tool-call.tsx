import { cn } from "cn"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function ToolCall({
  name,
  status,
  input,
  output,
  defaultOpen = false,
  flush = false,
}: {
  name: string
  status: "Running" | "Done"
  input: string
  output?: string
  defaultOpen?: boolean
  flush?: boolean
}) {
  const running = status === "Running"
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      className={cn(!flush && "overflow-hidden rounded-xl border border-border bg-card")}
    >
      <CollapsibleTrigger className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-muted">
        <span className={cn("size-1.5 rounded-full", running ? "bg-wait desk-live" : "bg-muted-foreground")} aria-hidden="true" />
        <span className="font-mono text-[13px] text-foreground">{name}</span>
        <span className={cn("ml-auto text-xs font-semibold tracking-[0.04em]", running ? "text-wait" : "text-muted-foreground")}>
          {status}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t border-border">
        <div className={cn("grid", output && "sm:grid-cols-2 sm:divide-x sm:divide-border")}>
          <div className="px-4 py-3">
            <p className="text-xs font-semibold text-muted-foreground">In</p>
            <pre className="mt-2 overflow-x-auto font-mono text-[13px] leading-5 break-words whitespace-pre-wrap text-foreground">{input}</pre>
          </div>
          <div className="border-t border-border px-4 py-3 sm:border-t-0">
            <p className="text-xs font-semibold text-muted-foreground">Out</p>
            <pre className="mt-2 overflow-x-auto font-mono text-[13px] leading-5 break-words whitespace-pre-wrap text-foreground">
              {output ?? "Still running."}
            </pre>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

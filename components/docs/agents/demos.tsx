"use client"

import { useState } from "react"

import type { AgentSlug } from "@/components/docs/agents/sections"
import { Button } from "@/components/ui/button"
import { Handoff } from "@/components/ui/handoff"
import { Presence } from "@/components/ui/presence"
import { Stepper } from "@/components/ui/stepper"
import { ToolCall } from "@/components/ui/tool-call"
import { Turn, TurnList } from "@/components/ui/turn"

const roster = [
  {
    name: "Refund desk",
    detail: "On 1842 with Maya Chen. The second charge is $42.",
    presence: "WORKING",
  },
  {
    name: "After-hours line",
    detail: "No line open. It does not refund.",
    presence: "IDLE",
  },
  {
    name: "Queue triage",
    detail: "Three callers waiting. Longest has been here 02:10.",
    presence: "WAITING",
  },
] as const

export function RosterSection() {
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-card">
      {roster.map((agent) => (
        <li key={agent.name} className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{agent.name}</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{agent.detail}</p>
          </div>
          <Presence value={agent.presence} />
        </li>
      ))}
    </ul>
  )
}

export function ThreadSection() {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card">
      <TurnList framed={false} label="Agent thread">
        <Turn who="Maya Chen" meta="09:01">
          Refund the duplicate charge on 1842.
        </Turn>
        <Turn who="Refund desk" meta="09:01" kind="agent">
          I found two charges. The second is $42. I will ask before I send the refund.
        </Turn>
      </TurnList>
      <div className="border-t border-border">
        <ToolCall
          flush
          defaultOpen
          name="lookup_order"
          status="Done"
          input='{ "order": "1842" }'
          output="Two charges. The second is $42, posted at 09:02. Refund window is open."
        />
      </div>
      <TurnList framed={false} label="After the lookup">
        <Turn who="Refund desk" kind="note">
          Waiting on a person. Nothing has been sent.
        </Turn>
      </TurnList>
    </section>
  )
}

export function ToolSection() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <ToolCall
        flush
        name="lookup_order"
        status="Done"
        defaultOpen
        input='{ "order": "1842" }'
        output="Two charges. The second is $42, posted at 09:02. Refund window is open."
      />
      <div className="border-t border-border">
        <ToolCall flush name="draft_reply" status="Running" input='{ "to": "Maya Chen" }' />
      </div>
    </div>
  )
}

export function RunSection() {
  return (
    <section className="rounded-xl border border-border bg-card px-5 py-5">
      <Stepper
        orientation="vertical"
        current={2}
        label="Refund run"
        steps={[
          { label: "Read the request", detail: "Refund the duplicate charge on 1842." },
          { label: "Look up the order", detail: "Two charges. The second is $42, posted at 09:02." },
          { label: "Ask for approval", detail: "Waiting here. Nothing has been sent." },
          { label: "Send the refund", detail: "Starts only after a person allows it." },
        ]}
      />
    </section>
  )
}

export function ApprovalSection() {
  const [decision, setDecision] = useState<"open" | "allowed" | "stopped">("open")

  return (
    <Handoff
      figure={decision === "open" ? "$42" : undefined}
      title={
        decision === "allowed"
          ? "Refund allowed"
          : decision === "stopped"
            ? "Refund stopped"
            : "Second charge on 1842"
      }
      detail={
        decision === "allowed"
          ? "Refund desk will refund the second charge on 1842 and tell Maya."
          : decision === "stopped"
            ? "Nothing was sent. The line can still explain why."
            : "Refund desk wants to refund the second charge on 1842. It will not send it until you allow it."
      }
    >
      {decision === "open" ? (
        <>
          <Button onClick={() => setDecision("allowed")}>Allow refund</Button>
          <Button variant="outline" onClick={() => setDecision("stopped")}>
            Stop
          </Button>
        </>
      ) : null}
    </Handoff>
  )
}

export function AgentDemo({ slug }: { slug: AgentSlug }) {
  const Demo = agentDemos[slug]
  return <Demo />
}

const agentDemos: Record<AgentSlug, () => React.ReactNode> = {
  roster: RosterSection,
  thread: ThreadSection,
  tool: ToolSection,
  run: RunSection,
  approval: ApprovalSection,
}

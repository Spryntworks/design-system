"use client"

import { useState } from "react"
import { MicIcon, MicOffIcon, PauseIcon, PhoneOffIcon } from "lucide-react"
import Link from "next/link"

import type { CallSlug } from "@/components/docs/calls/sections"
import { Button, buttonVariants } from "@/components/ui/button"
import { CallBar } from "@/components/ui/call-bar"
import { Handoff } from "@/components/ui/handoff"
import { Presence } from "@/components/ui/presence"
import { Turn, TurnList } from "@/components/ui/turn"

const callers = [
  { id: "maya", name: "Maya Chen", wait: "02:10", topic: "Duplicate charge on 1842" },
  { id: "sam", name: "Sam Ortiz", wait: "00:40", topic: "Login code never arrived" },
  { id: "priya", name: "Priya Shah", wait: "00:15", topic: "Change the delivery day" },
]

export function LiveCallSection() {
  const [muted, setMuted] = useState(false)
  const [held, setHeld] = useState(false)
  const [ended, setEnded] = useState(false)
  const presence = ended ? "ENDED" : held ? "HOLD" : "LIVE"

  return (
    <CallBar
      name="Maya Chen"
      detail={ended ? "The line is closed. The recording stays with the call." : "Duplicate charge on order 1842."}
      time="04:18"
      presence={presence}
      controls={
        <>
          <Button
            variant={muted ? "secondary" : "outline"}
            aria-pressed={muted}
            disabled={ended}
            onClick={() => setMuted((current) => !current)}
          >
            {muted ? <MicOffIcon /> : <MicIcon />}
            {muted ? "Unmute" : "Mute"}
          </Button>
          <Button
            variant={held ? "secondary" : "outline"}
            aria-pressed={held}
            disabled={ended}
            onClick={() => setHeld((current) => !current)}
          >
            <PauseIcon />
            {held ? "Resume" : "Hold"}
          </Button>
          <Button className="ml-auto" variant="destructive" disabled={ended} onClick={() => setEnded(true)}>
            <PhoneOffIcon />
            End
          </Button>
        </>
      }
    >
      <TurnList framed={false} label="Live transcript">
        <Turn who="Maya Chen" meta="00:12">
          The charge posted twice this morning.
        </Turn>
        <Turn who="Desk" meta="00:20" kind="agent">
          I see two charges on 1842. The second is $42. I will not refund it until a person allows it.
        </Turn>
        <Turn who="System" meta="00:21" kind="note">
          The refund stays here until a person allows it.
        </Turn>
      </TurnList>
    </CallBar>
  )
}

export function TranscriptSection() {
  return (
    <TurnList label="Call transcript">
      <Turn who="Maya Chen" meta="00:04">
        Hi, I was charged twice for the same order.
      </Turn>
      <Turn who="Desk" meta="00:11" kind="agent">
        I am looking up 1842 now.
      </Turn>
      <Turn who="Desk" meta="00:18" kind="agent">
        Two charges. The second is $42, posted at 9:02.
      </Turn>
      <Turn who="System" meta="00:19" kind="note">
        A refund needs a person. The agent is holding the line.
      </Turn>
      <Turn who="Maya Chen" meta="00:26">
        Yes, please take the extra one off.
      </Turn>
    </TurnList>
  )
}

export function QueueSection() {
  const [answered, setAnswered] = useState<string | null>(null)
  const active = callers.find((caller) => caller.id === answered)

  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card">
      <header className="flex flex-wrap items-end justify-between gap-3 border-b border-border px-5 py-4">
        <h2 className="text-lg font-semibold">{active ? `${active.name} is on the line` : "3 waiting"}</h2>
        <p className="font-mono text-sm tabular-nums text-muted-foreground">
          {active ? `Waited ${active.wait}` : "Longest 02:10"}
        </p>
      </header>
      <ul className="divide-y divide-border">
        {callers.map((caller, index) => {
          const live = answered === caller.id
          return (
            <li key={caller.id} className="grid items-center gap-3 px-5 py-3.5 sm:grid-cols-[minmax(0,1fr)_4.5rem_auto]">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">{caller.name}</span>
                  <Presence value={live ? "LIVE" : "QUEUE"} />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{caller.topic}</p>
              </div>
              <span className="font-mono text-lg tabular-nums">{caller.wait}</span>
              <Button
                variant={index === 0 && !answered ? "default" : "outline"}
                disabled={answered !== null}
                onClick={() => setAnswered(caller.id)}
              >
                {live ? "On the line" : "Answer"}
              </Button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export function SummarySection() {
  return (
    <section className="overflow-hidden rounded-xl border border-border bg-card">
      <header className="flex flex-wrap items-end justify-between gap-4 px-5 pt-5 pb-4">
        <div>
          <h2 className="text-lg font-semibold">Refund held</h2>
          <p className="mt-1 text-sm text-muted-foreground">Maya Chen · order 1842</p>
        </div>
        <p className="type-figure">04:18</p>
      </header>
      <dl className="border-t border-border">
        <SummaryRow label="Outcome" value="The second charge is $42. Nothing was sent." />
        <SummaryRow label="Next" value="A person allows the refund, or stops it." />
        <SummaryRow label="Recording" value="Kept with the call." />
      </dl>
      <div className="border-t border-border bg-sidebar px-5 py-3">
        <Link href="/components/agents/approval" className={buttonVariants()}>
          Review the refund
        </Link>
      </div>
    </section>
  )
}

export function CallHandoffSection() {
  const [choice, setChoice] = useState<"open" | "taken" | "left">("open")

  return (
    <Handoff
      figure={choice === "open" ? "04:18" : undefined}
      title={
        choice === "taken" ? "You have the line" : choice === "left" ? "Desk still has the line" : "Maya Chen is holding"
      }
      detail={
        choice === "taken"
          ? "The agent stepped back. Maya is waiting on the duplicate charge."
          : choice === "left"
            ? "The agent will keep Maya posted and will not refund the $42."
            : "The agent found a second charge of $42 and will not refund it alone. Take the line, or leave it with the agent."
      }
    >
      {choice === "open" ? (
        <>
          <Button onClick={() => setChoice("taken")}>Take the line</Button>
          <Button variant="outline" onClick={() => setChoice("left")}>
            Leave it with the agent
          </Button>
        </>
      ) : null}
    </Handoff>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 px-4 py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-sm font-medium">{value}</dd>
    </div>
  )
}

export function CallDemo({ slug }: { slug: CallSlug }) {
  const Demo = callDemos[slug]
  return <Demo />
}

const callDemos: Record<CallSlug, () => React.ReactNode> = {
  live: LiveCallSection,
  transcript: TranscriptSection,
  queue: QueueSection,
  summary: SummarySection,
  handoff: CallHandoffSection,
}

import type { Metadata } from "next"
import { Suspense } from "react"
import { notFound } from "next/navigation"

import { AgentDemo } from "@/components/docs/agents/demos"
import { agentSections } from "@/components/docs/agents/sections"

type Params = Promise<{ section: string }>

export function generateStaticParams() {
  return agentSections.map((section) => ({ section: section.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { section } = await params
  const item = agentSections.find((entry) => entry.slug === section)
  return { title: item?.title ?? "Agents" }
}

export default function AgentSectionPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<SectionFallback />}>
      <AgentSection params={params} />
    </Suspense>
  )
}

async function AgentSection({ params }: { params: Params }) {
  const { section } = await params
  const item = agentSections.find((entry) => entry.slug === section)
  if (!item) notFound()

  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="type-display">{item.title}</h1>
        <p className="type-body mt-3 text-muted-foreground">{item.note}</p>
      </header>
      <div className="mt-8">
        <AgentDemo slug={item.slug} />
      </div>
    </div>
  )
}

function SectionFallback() {
  return (
    <div>
      <div className="h-9 w-48 rounded-md bg-muted" />
      <div className="mt-3 h-6 max-w-[68ch] rounded-md bg-muted" />
      <div className="mt-8 h-64 rounded-xl border border-border bg-card" />
    </div>
  )
}

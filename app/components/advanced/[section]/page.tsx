import type { Metadata } from "next"
import { Suspense } from "react"
import { notFound } from "next/navigation"

import { AdvancedDemo } from "@/components/docs/advanced/demos"
import { advancedSections } from "@/components/docs/advanced/sections"

type Params = Promise<{ section: string }>

export function generateStaticParams() {
  return advancedSections.map((section) => ({ section: section.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { section } = await params
  const item = advancedSections.find((entry) => entry.slug === section)
  return { title: item?.title ?? "Advanced" }
}

export default function AdvancedSectionPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<SectionFallback />}>
      <AdvancedSection params={params} />
    </Suspense>
  )
}

async function AdvancedSection({ params }: { params: Params }) {
  const { section } = await params
  const item = advancedSections.find((entry) => entry.slug === section)
  if (!item) notFound()

  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="text-3xl font-semibold">{item.title}</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">{item.note}</p>
      </header>
      <div className="mt-8">
        <AdvancedDemo slug={item.slug} />
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

import type { Metadata } from "next"

import { AdvancedCatalog } from "@/components/docs/advanced-catalog"

export const metadata: Metadata = { title: "Advanced" }

export default function AdvancedPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="text-3xl font-semibold">Advanced</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Patterns a desk repeats: a frame, a split, a sorted list, and the moment before something is removed.
        </p>
      </header>
      <div className="mt-8">
        <AdvancedCatalog />
      </div>
    </div>
  )
}

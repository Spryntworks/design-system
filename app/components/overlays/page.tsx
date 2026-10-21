import type { Metadata } from "next"

import { OverlaysCatalog } from "@/components/docs/overlays-catalog"

export const metadata: Metadata = { title: "Overlays" }

export default function OverlaysPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="type-display">Overlays</h1>
        <p className="type-body mt-3 text-muted-foreground">
          Surfaces that open over the desk. Each one has a different job.
        </p>
      </header>
      <div className="mt-8">
        <OverlaysCatalog />
      </div>
    </div>
  )
}

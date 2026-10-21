import type { Metadata } from "next"

import { FormsCatalog } from "@/components/docs/forms-catalog"

export const metadata: Metadata = { title: "Forms" }

export default function FormsPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="type-display">Forms</h1>
        <p className="type-body mt-3 text-muted-foreground">
          Labels, hints, and the controls that collect a run.
        </p>
      </header>
      <div className="mt-8">
        <FormsCatalog />
      </div>
    </div>
  )
}

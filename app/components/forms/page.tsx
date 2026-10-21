import type { Metadata } from "next"

import { FormsCatalog } from "@/components/docs/forms-catalog"

export const metadata: Metadata = { title: "Forms" }

export default function FormsPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="text-3xl font-semibold">Forms</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Labels, hints, and the controls that collect a run.
        </p>
      </header>
      <div className="mt-8">
        <FormsCatalog />
      </div>
    </div>
  )
}

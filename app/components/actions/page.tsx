import type { Metadata } from "next"

import { ActionsCatalog } from "@/components/docs/actions-catalog"

export const metadata: Metadata = { title: "Actions" }

export default function ActionsPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="type-display">Actions</h1>
        <p className="type-body mt-3 text-muted-foreground">
          How a person starts, confirms, or switches a view.
        </p>
      </header>
      <div className="mt-8">
        <ActionsCatalog />
      </div>
    </div>
  )
}

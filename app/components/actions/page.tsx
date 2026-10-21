import type { Metadata } from "next"

import { ActionsCatalog } from "@/components/docs/actions-catalog"

export const metadata: Metadata = { title: "Actions" }

export default function ActionsPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="text-3xl font-semibold">Actions</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          How a person starts, confirms, or switches a view.
        </p>
      </header>
      <div className="mt-8">
        <ActionsCatalog />
      </div>
    </div>
  )
}

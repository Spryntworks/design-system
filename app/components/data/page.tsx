import type { Metadata } from "next"

import { DataCatalog } from "@/components/docs/data-catalog"

export const metadata: Metadata = { title: "Data" }

export default function DataPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="text-3xl font-semibold">Data</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Lists, pages, and the path into a record.
        </p>
      </header>
      <div className="mt-8">
        <DataCatalog />
      </div>
    </div>
  )
}

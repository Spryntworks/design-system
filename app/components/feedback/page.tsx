import type { Metadata } from "next"

import { FeedbackCatalog } from "@/components/docs/feedback-catalog"

export const metadata: Metadata = { title: "Feedback" }

export default function FeedbackPage() {
  return (
    <div>
      <header className="max-w-[68ch]">
        <h1 className="type-display">Feedback</h1>
        <p className="type-body mt-3 text-muted-foreground">
          What the desk says while work is waiting, failing, or done.
        </p>
      </header>
      <div className="mt-8">
        <FeedbackCatalog />
      </div>
    </div>
  )
}

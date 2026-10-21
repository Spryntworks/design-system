"use client"

import { InboxIcon } from "lucide-react"
import { toast } from "sonner"

import { Specimen } from "@/components/docs/specimen"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { StatusPill } from "@/components/ui/status-pill"

export function FeedbackCatalog() {
  return (
    <div className="flex flex-col gap-10">
      <Specimen
        title="Status"
        note="Ready, Wait, and Blocked. A dot and the word. Do not add a fourth status color."
      >
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill value="READY" />
          <StatusPill value="WAIT" />
          <StatusPill value="BLOCKED" />
        </div>
      </Specimen>

      <Specimen title="Badge" note="A count or a neutral tag. Status stays on the pill, not the badge.">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>12 open</Badge>
          <Badge variant="secondary">Week 12</Badge>
          <Badge variant="outline">Draft</Badge>
          <Badge variant="destructive">Failed</Badge>
        </div>
      </Specimen>

      <Specimen title="Alert" note="A condition of the page, not a toast. Say what happened and how to recover.">
        <div className="grid max-w-xl gap-3">
          <Alert>
            <AlertTitle>Batch locked</AlertTitle>
            <AlertDescription>Week 12 stopped taking new runs on Friday.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Could not save</AlertTitle>
            <AlertDescription>The run title is empty. Add one and try again.</AlertDescription>
          </Alert>
        </div>
      </Specimen>

      <Specimen title="Progress" note="Show the fraction when the bar alone would hide it.">
        <Progress value={68} className="max-w-md">
          <ProgressLabel>Briefs reviewed</ProgressLabel>
          <ProgressValue />
        </Progress>
      </Specimen>

      <Specimen title="Skeleton" note="The shape of the row that is about to arrive. Not a spinner in the middle of a list.">
        <div className="grid max-w-md gap-3 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <Skeleton className="size-8 rounded-full" />
            <Skeleton className="h-4 w-40" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </Specimen>

      <Specimen title="Empty" note="Name what is missing and the action that fills it.">
        <Empty className="max-w-md border border-border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>No runs this week</EmptyTitle>
            <EmptyDescription>
              Week 13 is open. Add the first run when the brief is ready.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={() => toast("Run created")}>New run</Button>
          </EmptyContent>
        </Empty>
      </Specimen>

      <Specimen title="Spinner" note="For a control that is working. A page that is loading uses a skeleton.">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Spinner />
          Publishing the run
        </div>
      </Specimen>

      <Specimen title="Toast" note="Confirms an action that already happened. It does not ask a question.">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => toast("Run saved")}>
            Save run
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("The run title is empty. Add one and try again.")}
          >
            Show an error
          </Button>
        </div>
      </Specimen>
    </div>
  )
}

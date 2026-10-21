"use client"

import { InboxIcon } from "lucide-react"
import { toast } from "sonner"

import { DeskRow, Specimen } from "@/components/docs/specimen"
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
        <DeskRow title="Week 11 recap" detail="Support Portal. The draft can publish.">
          <StatusPill value="READY" />
        </DeskRow>
        <DeskRow title="Week 12 narrative" detail="Training Portal. A reviewer still has it.">
          <StatusPill value="WAIT" />
        </DeskRow>
        <DeskRow title="Launch thread" detail="Content Copilot. A missing asset is holding it.">
          <StatusPill value="BLOCKED" />
        </DeskRow>
      </Specimen>

      <Specimen title="Badge" note="A count or a neutral tag. Status stays on the pill, not the badge.">
        <DeskRow title="Open count" detail="Ink, because a count is not the primary action.">
          <Badge>12 open</Badge>
        </DeskRow>
        <DeskRow title="Batch" detail="A neutral tag for the week.">
          <Badge variant="secondary">Week 12</Badge>
        </DeskRow>
        <DeskRow title="Draft" detail="An outline when the tag should stay quiet.">
          <Badge variant="outline">Draft</Badge>
        </DeskRow>
        <DeskRow title="Failed" detail="The run did not save. The word is the status, in the destructive color.">
          <Badge variant="destructive">Failed</Badge>
        </DeskRow>
      </Specimen>

      <Specimen title="Alert" note="A condition of the page, not a toast. Say what happened and how to recover.">
        <div className="grid gap-3 px-5 py-4">
          <Alert>
            <AlertTitle>Batch locked</AlertTitle>
            <AlertDescription>Week 12 stopped taking new runs on Friday. Open week 13 to add one.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Could not save</AlertTitle>
            <AlertDescription>The run title is empty. Add one and try again.</AlertDescription>
          </Alert>
        </div>
      </Specimen>

      <Specimen title="Progress" note="Show the fraction when the bar alone would hide it.">
        <DeskRow title="Briefs reviewed" detail="Seventeen of twenty-five briefs have a reviewer." className="w-full max-w-sm">
          <Progress value={68}>
            <ProgressLabel>Briefs reviewed</ProgressLabel>
            <ProgressValue />
          </Progress>
        </DeskRow>
      </Specimen>

      <Specimen title="Skeleton" note="The shape of the row that is about to arrive. Not a spinner in the middle of a list." flush>
        <div className="divide-y divide-border rounded-xl border border-border bg-card">
          {["w-48", "w-40", "w-56"].map((width) => (
            <div key={width} className="flex items-center gap-3 px-5 py-4">
              <Skeleton className="size-8 rounded-full" />
              <div className="grid flex-1 gap-2">
                <Skeleton className={`h-4 ${width}`} />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </Specimen>

      <Specimen title="Empty" note="Name what is missing and the action that fills it." flush>
        <Empty className="border border-border bg-card">
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
        <DeskRow title="Publishing the run" detail="The control is working. The page itself would use a skeleton.">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Spinner />
            Publishing
          </span>
        </DeskRow>
      </Specimen>

      <Specimen title="Toast" note="Confirms an action that already happened. It does not ask a question.">
        <DeskRow title="Save run" detail="The toast confirms the save. It does not ask a question.">
          <Button variant="outline" onClick={() => toast("Run saved")}>
            Save run
          </Button>
        </DeskRow>
        <DeskRow title="Show an error" detail="The toast names the problem and the recovery.">
          <Button
            variant="outline"
            onClick={() => toast.error("The run title is empty. Add one and try again.")}
          >
            Show an error
          </Button>
        </DeskRow>
      </Specimen>
    </div>
  )
}

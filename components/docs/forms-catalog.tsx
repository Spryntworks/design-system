"use client"

import { Suspense } from "react"
import { SearchIcon } from "lucide-react"

import { DeskRow, Specimen } from "@/components/docs/specimen"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const projects = ["Training Portal", "Support Portal", "Content Copilot"]

const batches = [
  { value: "week-12", label: "Week 12" },
  { value: "week-13", label: "Week 13" },
  { value: "week-14", label: "Week 14" },
]

export function FormsCatalog() {
  return (
    <div className="flex flex-col gap-10">
      <Specimen
        title="Field"
        note="Label, hint, control, then the error. The error names the fix."
      >
        <DeskRow title="Run title" detail="Shown on the run list and in the log." className="w-full max-w-md">
          <Input id="run-title" defaultValue="Week 12 narrative" />
        </DeskRow>
        <DeskRow title="Owner" detail="Choose an owner before saving." className="w-full max-w-md">
          <Field data-invalid="true">
            <FieldLabel htmlFor="run-owner" className="sr-only">
              Owner
            </FieldLabel>
            <Input id="run-owner" aria-invalid="true" placeholder="Who reviews this" />
            <FieldError>Choose an owner before saving.</FieldError>
          </Field>
        </DeskRow>
      </Specimen>

      <Specimen title="Search" note="A search field can carry an icon and the shortcut that opens it.">
        <DeskRow title="Find a run" detail="The shortcut is the same one that opens command." className="w-full max-w-md">
          <InputGroup>
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupInput placeholder="Search runs" />
            <InputGroupAddon align="inline-end">
              <Kbd>⌘K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </DeskRow>
      </Specimen>

      <Specimen title="Select" note="A short, known list. The closed control shows the label, not the value key.">
        <DeskRow title="Batch" detail="Week 12 is the open batch." className="w-full max-w-md">
          <Select defaultValue="week-12" items={batches}>
            <SelectTrigger id="batch" className="w-full">
              <SelectValue placeholder="Choose a batch" />
            </SelectTrigger>
            <SelectContent>
              {batches.map((batch) => (
                <SelectItem key={batch.value} value={batch.value}>
                  {batch.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </DeskRow>
      </Specimen>

      <Specimen title="Combobox" note="Use this when the list is long enough to type through.">
        <DeskRow title="Project" detail="Type to narrow Training Portal, Support Portal, or Content Copilot." className="w-full max-w-md">
          <Combobox items={projects}>
            <ComboboxInput placeholder="Find a project" className="w-full" />
            <ComboboxContent>
              <ComboboxEmpty>No projects.</ComboboxEmpty>
              <ComboboxList>
                {(item: string) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </DeskRow>
      </Specimen>

      <Specimen title="Notes">
        <DeskRow title="Notes" detail="What the reviewer needs before Friday standup." className="w-full max-w-md">
          <Textarea id="notes" defaultValue="Review the briefs before Friday standup." />
        </DeskRow>
      </Specimen>

      <Specimen title="Choice" note="Radio for one channel. Checkbox for options that stack. Switch for a setting that is on or off.">
        <DeskRow title="Channel" detail="One destination for this run.">
          <RadioGroup defaultValue="linkedin" className="gap-3">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="linkedin" id="channel-linkedin" aria-label="LinkedIn" />
              <Label htmlFor="channel-linkedin">LinkedIn</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="x" id="channel-x" aria-label="X" />
              <Label htmlFor="channel-x">X</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="both" id="channel-both" aria-label="Both" />
              <Label htmlFor="channel-both">Both</Label>
            </div>
          </RadioGroup>
        </DeskRow>
        <DeskRow title="Visible to the batch" detail="The batch can open this run while it is in review.">
          <Checkbox id="visible" defaultChecked aria-label="Visible to the batch" />
        </DeskRow>
        <DeskRow title="Notify when a review lands" detail="A note goes to the owner. It does not publish the run.">
          <Switch id="notify" defaultChecked aria-label="Notify when a review lands" />
        </DeskRow>
      </Specimen>

      <Specimen title="Slider" note="A range with a number the person can judge. 0 to 100 posts in a batch.">
        <DeskRow title="Posts in the batch" detail="Forty of one hundred are in this run." className="w-full max-w-sm">
          <Slider defaultValue={[40]} max={100} aria-label="Posts in the batch" />
        </DeskRow>
      </Specimen>

      <Specimen title="Date" note="Pick a day for the run. The calendar sits in a panel, or inside a popover when the form is tight." flush>
        <Suspense fallback={<div className="h-72 w-72 rounded-xl border border-border bg-card" />}>
          <div className="w-fit rounded-xl border border-border bg-card">
            <Calendar mode="single" />
          </div>
        </Suspense>
      </Specimen>

      <Specimen title="Disabled">
        <DeskRow title="Published title" detail="Locked after publish. The update stays visible so the lock is obvious." className="grid w-full max-w-md gap-3">
          <Input id="locked" disabled defaultValue="Locked after publish" />
          <Button className="w-fit" disabled>
            Update
          </Button>
        </DeskRow>
      </Specimen>
    </div>
  )
}

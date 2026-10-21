"use client"

import { Suspense } from "react"
import { SearchIcon } from "lucide-react"

import { Specimen } from "@/components/docs/specimen"
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
  FieldDescription,
  FieldError,
  FieldGroup,
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
        <FieldGroup className="max-w-md">
          <Field>
            <FieldLabel htmlFor="run-title">Run title</FieldLabel>
            <Input id="run-title" defaultValue="Week 12 narrative" />
            <FieldDescription>Shown on the run list and in the log.</FieldDescription>
          </Field>
          <Field data-invalid="true">
            <FieldLabel htmlFor="run-owner">Owner</FieldLabel>
            <Input id="run-owner" aria-invalid="true" placeholder="Who reviews this" />
            <FieldError>Choose an owner before saving.</FieldError>
          </Field>
        </FieldGroup>
      </Specimen>

      <Specimen title="Search" note="A search field can carry an icon and the shortcut that opens it.">
        <InputGroup className="max-w-md">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search runs" />
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </Specimen>

      <Specimen title="Select" note="A short, known list. The closed control shows the label, not the value key.">
        <div className="grid max-w-md gap-2">
          <Label htmlFor="batch">Batch</Label>
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
        </div>
      </Specimen>

      <Specimen title="Combobox" note="Use this when the list is long enough to type through.">
        <Combobox items={projects}>
          <ComboboxInput placeholder="Find a project" className="max-w-md" />
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
      </Specimen>

      <Specimen title="Notes">
        <div className="grid max-w-md gap-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea id="notes" defaultValue="Review the briefs before Friday standup." />
        </div>
      </Specimen>

      <Specimen title="Choice" note="Radio for one channel. Checkbox for options that stack. Switch for a setting that is on or off.">
        <div className="grid max-w-md gap-6">
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
          <div className="flex items-center gap-2">
            <Checkbox id="visible" defaultChecked />
            <Label htmlFor="visible">Visible to the batch</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="notify" defaultChecked />
            <Label htmlFor="notify">Notify when a review lands</Label>
          </div>
        </div>
      </Specimen>

      <Specimen title="Slider" note="A range with a number the person can judge. 0 to 100 posts in a batch.">
        <div className="max-w-sm">
          <Slider defaultValue={[40]} max={100} aria-label="Posts in the batch" />
        </div>
      </Specimen>

      <Specimen title="Date" note="Pick a day for the run. The calendar sits in a panel, or inside a popover when the form is tight.">
        <Suspense fallback={<div className="h-72 w-72 rounded-xl border border-border bg-card" />}>
          <div className="w-fit rounded-xl border border-border bg-card">
            <Calendar mode="single" />
          </div>
        </Suspense>
      </Specimen>

      <Specimen title="Disabled">
        <div className="grid max-w-md gap-2">
          <Label htmlFor="locked">Published title</Label>
          <Input id="locked" disabled defaultValue="Locked after publish" />
          <Button className="w-fit" disabled>
            Update
          </Button>
        </div>
      </Specimen>
    </div>
  )
}

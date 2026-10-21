"use client"

import { PlusIcon } from "lucide-react"

import { DeskRow, Specimen } from "@/components/docs/specimen"
import { Button } from "@/components/ui/button"
import { StatusPill } from "@/components/ui/status-pill"
import { ButtonGroup } from "@/components/ui/button-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Spinner } from "@/components/ui/spinner"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ActionsCatalog() {
  return (
    <div className="flex flex-col gap-10">
      <Specimen
        title="On the desk"
        note="The primary action sits with the work. Everything else stays quiet."
      >
        <DeskRow title="Week 12 narrative" detail="In review">
          <StatusPill value="WAIT" />
          <Button variant="ghost">Skip</Button>
          <Button variant="outline">Preview</Button>
          <Button>Save run</Button>
        </DeskRow>
      </Specimen>

      <Specimen
        title="Variants"
        note="One primary action per view. Outline and ghost carry the rest. Destructive is for a delete that cannot be undone from this screen."
      >
        <DeskRow title="Primary" detail="The action that moves this screen forward.">
          <Button>Save run</Button>
        </DeskRow>
        <DeskRow title="Outline" detail="A real choice that is not the main one.">
          <Button variant="outline">Cancel</Button>
        </DeskRow>
        <DeskRow title="Secondary" detail="A quieter fill when outline would disappear on white.">
          <Button variant="secondary">Preview</Button>
        </DeskRow>
        <DeskRow title="Ghost" detail="Available, but it should not compete.">
          <Button variant="ghost">Skip</Button>
        </DeskRow>
        <DeskRow title="Destructive" detail="Deletes or archives something this screen cannot undo.">
          <Button variant="destructive">Delete</Button>
        </DeskRow>
        <DeskRow title="Link" detail="Leaves the screen. It is not a button that acts here.">
          <Button variant="link">View log</Button>
        </DeskRow>
      </Specimen>

      <Specimen title="Sizes" note="Default is the desk size. Large is for a lone action. Extra small sits inside a table row.">
        <DeskRow title="Extra small" detail="Inside a table row, next to a status.">
          <Button size="xs">Open</Button>
        </DeskRow>
        <DeskRow title="Small" detail="A filter or a chip action.">
          <Button size="sm" variant="outline">Week 12</Button>
        </DeskRow>
        <DeskRow title="Default" detail="Toolbars, forms, and confirms.">
          <Button>Save run</Button>
        </DeskRow>
        <DeskRow title="Large" detail="The only action on an empty screen.">
          <Button size="lg">New run</Button>
        </DeskRow>
      </Specimen>

      <Specimen title="Icons" note="An icon button needs a name. The visible icon is not the label.">
        <DeskRow title="Label and icon" detail="The word says what happens. The icon supports it.">
          <Button>
            <PlusIcon />
            New run
          </Button>
        </DeskRow>
        <DeskRow title="Icon only" detail="The accessible name is New run. The icon is not the label.">
          <Button size="icon" variant="outline" aria-label="New run">
            <PlusIcon />
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Add">
            <PlusIcon />
          </Button>
        </DeskRow>
      </Specimen>

      <Specimen title="Loading and disabled" note="A disabled primary keeps the pink wash so the action is still recognizable.">
        <DeskRow title="Saving" detail="The press already happened. The label says what is in progress.">
          <Button disabled>
            <Spinner />
            Saving
          </Button>
        </DeskRow>
        <DeskRow title="Saved" detail="The action finished. The control stays so the place does not jump.">
          <Button disabled>Saved</Button>
        </DeskRow>
        <DeskRow title="Locked" detail="A published run cannot be edited from this screen.">
          <Button variant="outline" disabled>
            Locked
          </Button>
        </DeskRow>
      </Specimen>

      <Specimen title="Group" note="A group is one control with a few choices, not three separate buttons.">
        <DeskRow title="Range" detail="Day, week, or month. One of them is the view.">
          <ButtonGroup>
            <Button variant="outline">Day</Button>
            <Button variant="outline">Week</Button>
            <Button variant="outline">Month</Button>
          </ButtonGroup>
        </DeskRow>
      </Specimen>

      <Specimen title="Toggle" note="Use a toggle when the choice changes the view and stays selected.">
        <DeskRow title="Layout" detail="List stays selected until someone picks another view.">
          <ToggleGroup defaultValue={["list"]} variant="outline" spacing={0}>
            <ToggleGroupItem value="list">List</ToggleGroupItem>
            <ToggleGroupItem value="board">Board</ToggleGroupItem>
            <ToggleGroupItem value="calendar">Calendar</ToggleGroupItem>
          </ToggleGroup>
        </DeskRow>
      </Specimen>

      <Specimen title="Shortcut" note="Show the key beside the action. Do not make the key the only way to find it.">
        <DeskRow title="Command" detail="The button opens the same search as the keys.">
          <Button variant="outline">
            Command
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </Button>
        </DeskRow>
      </Specimen>
    </div>
  )
}

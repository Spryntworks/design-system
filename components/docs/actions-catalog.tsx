"use client"

import { PlusIcon } from "lucide-react"

import { Specimen } from "@/components/docs/specimen"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Spinner } from "@/components/ui/spinner"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ActionsCatalog() {
  return (
    <div className="flex flex-col gap-10">
      <Specimen
        title="Variants"
        note="One primary action per view. Outline and ghost carry the rest. Destructive is for a delete that cannot be undone from this screen."
      >
        <div className="flex flex-wrap items-center gap-2">
          <Button>Save run</Button>
          <Button variant="outline">Cancel</Button>
          <Button variant="secondary">Preview</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">View log</Button>
        </div>
      </Specimen>

      <Specimen title="Sizes" note="Default is the desk size. Large is for a lone action. Extra small sits inside a table row.">
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </Specimen>

      <Specimen title="Icons" note="An icon button needs a name. The visible icon is not the label.">
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <PlusIcon />
            New run
          </Button>
          <Button size="icon" variant="outline" aria-label="New run">
            <PlusIcon />
          </Button>
          <Button size="icon-sm" variant="ghost" aria-label="Add">
            <PlusIcon />
          </Button>
        </div>
      </Specimen>

      <Specimen title="Loading and disabled" note="A disabled primary keeps the pink wash so the action is still recognizable.">
        <div className="flex flex-wrap items-center gap-2">
          <Button disabled>
            <Spinner />
            Saving
          </Button>
          <Button disabled>Saved</Button>
          <Button variant="outline" disabled>
            Locked
          </Button>
        </div>
      </Specimen>

      <Specimen title="Group" note="A group is one control with a few choices, not three separate buttons.">
        <ButtonGroup>
          <Button variant="outline">Day</Button>
          <Button variant="outline">Week</Button>
          <Button variant="outline">Month</Button>
        </ButtonGroup>
      </Specimen>

      <Specimen title="Toggle" note="Use a toggle when the choice changes the view and stays selected.">
        <ToggleGroup defaultValue={["list"]} variant="outline" spacing={0}>
          <ToggleGroupItem value="list">List</ToggleGroupItem>
          <ToggleGroupItem value="board">Board</ToggleGroupItem>
          <ToggleGroupItem value="calendar">Calendar</ToggleGroupItem>
        </ToggleGroup>
      </Specimen>

      <Specimen title="Shortcut" note="Show the key beside the action. Do not make the key the only way to find it.">
        <div className="flex items-center gap-3">
          <Button variant="outline">
            Command
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </Button>
        </div>
      </Specimen>
    </div>
  )
}

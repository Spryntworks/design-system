"use client"

import { useState } from "react"
import { toast } from "sonner"

import { DeskRow, Specimen } from "@/components/docs/specimen"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Kbd } from "@/components/ui/kbd"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { StatusPill } from "@/components/ui/status-pill"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function OverlaysCatalog() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-10">
      <Specimen
        title="Command"
        note="Jump across projects and pages. Open it from a button here. In a tool, bind it to ⌘K."
      >
        <DeskRow title="Jump" detail="Opens the same search a tool binds to ⌘K.">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open command
          <Kbd>⌘K</Kbd>
        </Button>
        </DeskRow>
        <CommandDialog open={open} onOpenChange={setOpen} title="Command" description="Jump to a project or a page.">
          <Command>
            <CommandInput placeholder="Jump to a project or a page" />
            <CommandList>
              <CommandEmpty>No matches.</CommandEmpty>
              <CommandGroup heading="Projects">
                <CommandItem onSelect={() => setOpen(false)}>
                  Training Portal
                  <CommandShortcut>TP</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  Support Portal
                  <CommandShortcut>SP</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>
                  Content Copilot
                  <CommandShortcut>CC</CommandShortcut>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Pages">
                <CommandItem onSelect={() => setOpen(false)}>Runs</CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>Hub</CommandItem>
                <CommandItem onSelect={() => setOpen(false)}>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </Specimen>

      <Specimen title="Dialog" note="Stops the page. Use it when the next step can discard work.">
        <DeskRow title="Week 12 narrative" detail="Archive leaves the active list. The log keeps the record.">
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>Archive run</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Archive this run?</DialogTitle>
              <DialogDescription>
                It leaves the active list. You can restore it from the archive.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
              <Button onClick={() => toast("Run archived")}>Archive</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        </DeskRow>
      </Specimen>

      <Specimen title="Sheet" note="A side panel for detail that should stay next to the list.">
        <DeskRow title="Week 12 narrative" detail="Detail stays next to the list. It does not cover the page.">
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>Run details</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Week 12 narrative</SheetTitle>
              <SheetDescription>Training Portal</SheetDescription>
            </SheetHeader>
            <div className="px-4">
              <StatusPill value="READY" />
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Four posts are drafted. Publish sends them to the channels chosen on the run.
              </p>
            </div>
          </SheetContent>
        </Sheet>
        </DeskRow>
      </Specimen>

      <Specimen title="Menu" note="A few actions on one record. Destructive sits last.">
        <DeskRow title="Week 12 narrative" detail="Rename, duplicate, or archive. Archive sits last.">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Run actions
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Rename</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </DeskRow>
      </Specimen>

      <Specimen title="Context menu" note="The same actions, on right-click, when the row itself is the target.">
        <DeskRow title="Right-click the row" detail="The row is the target. The menu is the same set of actions." className="w-full max-w-md">
        <ContextMenu>
          <ContextMenuTrigger className="flex w-full items-center justify-between rounded-lg border border-border bg-background px-3 py-2.5 text-sm">
            <span className="font-medium">Week 12 narrative</span>
            <StatusPill value="WAIT" />
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Open</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Archive</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        </DeskRow>
      </Specimen>

      <Specimen title="Popover" note="A small form anchored to the control that opened it.">
        <DeskRow title="Status" detail="A small form anchored to the control that opened it.">
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>Filter status</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Status</PopoverTitle>
              <PopoverDescription>Show runs in one of these states.</PopoverDescription>
            </PopoverHeader>
            <div className="flex flex-wrap gap-2">
              <StatusPill value="READY" />
              <StatusPill value="WAIT" />
              <StatusPill value="BLOCKED" />
            </div>
          </PopoverContent>
        </Popover>
        </DeskRow>
      </Specimen>

      <Specimen title="Tooltip" note="A name for an icon, or a shortcut. Not a second paragraph.">
        <DeskRow title="Publish" detail="The tooltip names the action and the shortcut. It is not a second paragraph.">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>Publish</TooltipTrigger>
          <TooltipContent>
            <span className="flex items-center gap-2">
              Send this run live
              <Kbd>⌘</Kbd>
              <Kbd>↵</Kbd>
            </span>
          </TooltipContent>
        </Tooltip>
        </DeskRow>
      </Specimen>

      <Specimen title="Hover card" note="A preview when the pointer rests on a project name.">
        <DeskRow title="Project" detail="Rest the pointer on the name to see the open count.">
        <HoverCard>
          <HoverCardTrigger
            render={<Button variant="link" className="px-0" />}
            delay={200}
          >
            Training Portal
          </HoverCardTrigger>
          <HoverCardContent>
            <p className="font-medium">Training Portal</p>
            <p className="mt-1 text-sm text-muted-foreground">18 open items · Ready</p>
          </HoverCardContent>
        </HoverCard>
        </DeskRow>
      </Specimen>
    </div>
  )
}

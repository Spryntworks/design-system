"use client"

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  FileTextIcon,
  InboxIcon,
  MoreHorizontalIcon,
  SettingsIcon,
  XIcon,
} from "lucide-react"

import type { AdvancedSlug } from "@/components/docs/advanced/sections"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { StatusPill } from "@/components/ui/status-pill"
import { Stepper } from "@/components/ui/stepper"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const deskLinks = [
  { label: "Runs", icon: InboxIcon, active: true },
  { label: "Briefs", icon: FileTextIcon, active: false },
  { label: "Settings", icon: SettingsIcon, active: false },
]

const runs = [
  { id: "w12", title: "Week 12 narrative", project: "Training Portal", status: "WAIT" },
  { id: "w11", title: "Week 11 recap", project: "Support Portal", status: "READY" },
  { id: "w10", title: "Launch thread", project: "Content Copilot", status: "BLOCKED" },
] as const

const tableRows = [
  { id: "tp", name: "Training Portal", open: 18, status: "READY" },
  { id: "sp", name: "Support Portal", open: 6, status: "WAIT" },
  { id: "cc", name: "Content Copilot", open: 11, status: "BLOCKED" },
] as const

const posts = [
  { day: "Mon", published: 4, waiting: 2 },
  { day: "Tue", published: 6, waiting: 1 },
  { day: "Wed", published: 3, waiting: 4 },
  { day: "Thu", published: 8, waiting: 2 },
  { day: "Fri", published: 5, waiting: 1 },
]

const chartConfig = {
  published: { label: "Published", color: "var(--chart-1)" },
  waiting: { label: "Waiting", color: "var(--chart-4)" },
} satisfies ChartConfig

const events = [
  { time: "09:14", text: "Brief moved to review", tone: "bg-wait" },
  { time: "09:41", text: "Copy approved for LinkedIn", tone: "bg-ready" },
  { time: "10:02", text: "X draft blocked on a missing asset", tone: "bg-blocked" },
  { time: "10:18", text: "Owner asked for a shorter opener", tone: "bg-wait" },
  { time: "11:05", text: "Asset landed and the draft is ready", tone: "bg-ready" },
  { time: "11:22", text: "Publish held until Friday standup", tone: "bg-blocked" },
]

export function SidebarSection() {
  return (
    <SidebarProvider className="h-[22rem] min-h-0 overflow-hidden rounded-xl border border-border">
      <Sidebar collapsible="none" className="border-r border-sidebar-border">
        <SidebarHeader>
          <span className="flex items-center gap-2 px-2 py-1 text-sm font-semibold">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Desk
          </span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Work</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {deskLinks.map((link) => (
                  <SidebarMenuItem key={link.label}>
                    <SidebarMenuButton isActive={link.active}>
                      <link.icon />
                      <span>{link.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <span className="px-2 text-xs text-muted-foreground">Week 12</span>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="bg-background">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold">Week 12 narrative</h2>
            <StatusPill value="WAIT" />
          </div>
          <span className="text-xs text-muted-foreground">Week 12</span>
        </div>
        <ul className="divide-y divide-border">
          <li className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="text-sm">LinkedIn draft</span>
            <StatusPill value="READY" />
          </li>
          <li className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="text-sm">X draft</span>
            <StatusPill value="BLOCKED" />
          </li>
          <li className="px-4 py-3 text-sm leading-6 text-muted-foreground">
            Publish stays off until the brief is ready.
          </li>
        </ul>
      </SidebarInset>
    </SidebarProvider>
  )
}

export function NavigationSection() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card px-3 py-2">
      <div className="flex items-center gap-3">
        <span className="px-2 text-sm font-semibold">Desk</span>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/components/advanced" className={navigationMenuTriggerStyle()}>
                Runs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent className="grid w-64 gap-1 p-2">
                <NavigationMenuLink href="/components/advanced/sidebar" className="block rounded-md px-3 py-2 hover:bg-muted">
                  <span className="block text-sm font-medium">Training Portal</span>
                  <span className="block text-xs text-muted-foreground">18 open</span>
                </NavigationMenuLink>
                <NavigationMenuLink href="/components/advanced/list" className="block rounded-md px-3 py-2 hover:bg-muted">
                  <span className="block text-sm font-medium">Support Portal</span>
                  <span className="block text-xs text-muted-foreground">6 open</span>
                </NavigationMenuLink>
                <NavigationMenuLink href="/components/advanced/chart" className="block rounded-md px-3 py-2 hover:bg-muted">
                  <span className="block text-sm font-medium">Content Copilot</span>
                  <span className="block text-xs text-muted-foreground">11 open</span>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <span className="px-2 text-xs text-muted-foreground">Week 12</span>
    </div>
  )
}

export function SplitSection() {
  const [selectedRun, setSelectedRun] = useState<(typeof runs)[number]["id"]>("w12")
  const activeRun = runs.find((run) => run.id === selectedRun) ?? runs[0]

  return (
    <ResizablePanelGroup orientation="horizontal" className="h-64 rounded-xl border border-border bg-card">
      <ResizablePanel defaultSize="38" minSize="28">
        <ul className="flex h-full flex-col">
          {runs.map((run) => (
            <li key={run.id}>
              <button
                type="button"
                onClick={() => setSelectedRun(run.id)}
                aria-current={selectedRun === run.id ? "true" : undefined}
                className="flex w-full items-center justify-between gap-3 border-b border-border px-3 py-2.5 text-left hover:bg-muted aria-[current=true]:bg-secondary"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium">{run.title}</span>
                  <span className="block truncate text-xs text-muted-foreground">{run.project}</span>
                </span>
                <StatusPill value={run.status} />
              </button>
            </li>
          ))}
        </ul>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="62" minSize="30">
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <h2 className="text-sm font-semibold">{activeRun.title}</h2>
            <StatusPill value={activeRun.status} />
          </div>
          <dl className="grid gap-4 p-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Project</dt>
              <dd className="mt-1 font-medium">{activeRun.project}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Next</dt>
              <dd className="mt-1 leading-6">Open the brief, then the draft, before this leaves the desk.</dd>
            </div>
          </dl>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export function TableSection() {
  const [sort, setSort] = useState<{ key: "name" | "open"; dir: "asc" | "desc" }>({
    key: "name",
    dir: "asc",
  })
  const sortedRows = [...tableRows].sort((a, b) => {
    const dir = sort.dir === "asc" ? 1 : -1
    if (sort.key === "name") return a.name.localeCompare(b.name) * dir
    return (a.open - b.open) * dir
  })

  function toggleSort(key: "name" | "open") {
    setSort((current) =>
      current.key === key
        ? { key, dir: current.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" },
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              aria-sort={sort.key === "name" ? (sort.dir === "asc" ? "ascending" : "descending") : "none"}
            >
              <SortButton
                label="Project"
                active={sort.key === "name"}
                dir={sort.dir}
                onClick={() => toggleSort("name")}
              />
            </TableHead>
            <TableHead
              className="text-right"
              aria-sort={sort.key === "open" ? (sort.dir === "asc" ? "ascending" : "descending") : "none"}
            >
              <SortButton
                label="Open"
                active={sort.key === "open"}
                dir={sort.dir}
                align="end"
                onClick={() => toggleSort("open")}
              />
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-10">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="text-right tabular-nums">{row.open}</TableCell>
              <TableCell>
                <StatusPill value={row.status} />
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button variant="ghost" size="icon-sm" aria-label={`Actions for ${row.name}`} />}
                  >
                    <MoreHorizontalIcon />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Open</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">Archive</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function FiltersSection() {
  const [chips, setChips] = useState(["Ready", "Week 12"])
  const [channels, setChannels] = useState<string[]>(["linkedin"])

  function toggleChannel(id: string, checked: boolean) {
    setChannels((current) =>
      checked ? [...current, id] : current.filter((item) => item !== id),
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-3">
        {chips.length === 0 ? (
          <p className="text-sm text-muted-foreground">No filters. The full list is showing.</p>
        ) : (
          chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex h-7 items-center gap-1 rounded-full border border-border bg-background px-2.5 text-xs"
            >
              {chip}
              <button
                type="button"
                aria-label={`Remove ${chip}`}
                onClick={() => setChips((current) => current.filter((item) => item !== chip))}
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon className="size-3" />
              </button>
            </span>
          ))
        )}
        <Collapsible>
          <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
            More filters
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3 flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={channels.includes("linkedin")}
                onCheckedChange={(checked) => toggleChannel("linkedin", checked === true)}
              />
              LinkedIn
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox
                checked={channels.includes("x")}
                onCheckedChange={(checked) => toggleChannel("x", checked === true)}
              />
              X
            </label>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <ul className="divide-y divide-border">
        {runs.map((run) => (
          <li key={run.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <span className="min-w-0">
              <span className="block text-sm font-medium">{run.title}</span>
              <span className="block text-xs text-muted-foreground">{run.project}</span>
            </span>
            <StatusPill value={run.status} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ListSection() {
  return (
    <ul className="divide-y divide-border rounded-xl border border-border bg-card">
      {runs.map((run) => (
        <li key={run.id} className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">{run.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{run.project}</p>
          </div>
          <StatusPill value={run.status} />
        </li>
      ))}
    </ul>
  )
}

export function StepsSection() {
  return (
    <section className="rounded-xl border border-border bg-card px-5 py-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Week 12 narrative</h2>
          <p className="mt-1 text-sm text-muted-foreground">In review</p>
        </div>
        <StatusPill value="WAIT" />
      </div>
      <Stepper
        orientation="vertical"
        current={2}
        label="Run progress"
        steps={[
          { label: "Brief", detail: "The migration story is written." },
          { label: "Draft", detail: "Four posts are in the hub." },
          { label: "Review", detail: "Waiting on the project lead." },
          { label: "Publish", detail: "Stays off until review is done." },
        ]}
      />
    </section>
  )
}

export function ActivitySection() {
  return (
    <ScrollArea className="h-64 rounded-xl border border-border bg-card">
      <ol className="divide-y divide-border">
        {events.map((event) => (
          <li key={event.time} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 px-5 py-3">
            <span className="pt-0.5 font-mono text-xs tabular-nums text-muted-foreground">{event.time}</span>
            <span className="flex items-start gap-2 text-sm leading-6">
              <span className={`mt-2 size-1.5 shrink-0 rounded-full ${event.tone}`} aria-hidden="true" />
              {event.text}
            </span>
          </li>
        ))}
      </ol>
    </ScrollArea>
  )
}

export function ChartSection() {
  return (
    <div className="rounded-xl border border-border bg-card px-5 pt-5 pb-3">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">This week</h2>
        <p className="mt-1 text-sm text-muted-foreground">Published against still waiting.</p>
      </div>
      <ChartContainer config={chartConfig} className="mt-4 aspect-auto h-56 w-full">
        <BarChart data={posts} accessibilityLayer>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="published" fill="var(--color-published)" radius={2} />
          <Bar dataKey="waiting" fill="var(--color-waiting)" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export function ConfirmSection() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4">
      <div>
        <h2 className="text-sm font-semibold">Week 12 narrative</h2>
        <p className="mt-1 text-sm text-muted-foreground">Archiving takes it off the desk. The log keeps the record.</p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="destructive" />}>Archive run</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Archive this run?</AlertDialogTitle>
            <AlertDialogDescription>
              It leaves the desk. The log keeps the record.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep it</AlertDialogCancel>
            <AlertDialogAction variant="destructive">Archive</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export function DrawerSection() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4">
      <div>
        <h2 className="text-sm font-semibold">3 runs</h2>
        <p className="mt-1 text-sm text-muted-foreground">Filters stay off the page until someone asks for them.</p>
      </div>
      <Drawer swipeDirection="right">
        <DrawerTrigger render={<Button variant="outline" />}>Open filters</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filters</DrawerTitle>
            <DrawerDescription>Narrow the run list without leaving it.</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-3 px-4 py-4">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox defaultChecked />
              Ready
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox />
              Wait
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox />
              Blocked
            </label>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Apply</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export function AdvancedDemo({ slug }: { slug: AdvancedSlug }) {
  const Demo = advancedDemos[slug]
  return <Demo />
}

const advancedDemos: Record<AdvancedSlug, () => React.ReactNode> = {
  sidebar: SidebarSection,
  navigation: NavigationSection,
  split: SplitSection,
  table: TableSection,
  filters: FiltersSection,
  list: ListSection,
  steps: StepsSection,
  activity: ActivitySection,
  chart: ChartSection,
  confirm: ConfirmSection,
  drawer: DrawerSection,
}

function SortButton({
  label,
  active,
  dir,
  align = "start",
  onClick,
}: {
  label: string
  active: boolean
  dir: "asc" | "desc"
  align?: "start" | "end"
  onClick: () => void
}) {
  const Icon = dir === "asc" ? ArrowUpIcon : ArrowDownIcon
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1 font-medium ${align === "end" ? "ml-auto" : ""}`}
    >
      {label}
      {active ? <Icon className="size-3.5" aria-hidden="true" /> : null}
    </button>
  )
}

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
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
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
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <h2 className="text-sm font-semibold">Week 12 narrative</h2>
          <StatusPill value="WAIT" />
        </div>
        <p className="px-4 py-3 text-sm text-muted-foreground">
          The brief is with review. Publish stays off until it is ready.
        </p>
      </SidebarInset>
    </SidebarProvider>
  )
}

export function NavigationSection() {
  return (
    <div className="rounded-xl border border-border bg-card px-3 py-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/components/advanced" className={navigationMenuTriggerStyle()}>
              Desk
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent className="grid w-56 gap-0.5">
              <NavigationMenuLink href="/components/advanced/sidebar">Training Portal</NavigationMenuLink>
              <NavigationMenuLink href="/components/advanced/list">Support Portal</NavigationMenuLink>
              <NavigationMenuLink href="/components/advanced/chart">Content Copilot</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
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
        <div className="flex h-full flex-col gap-3 p-4">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold">{activeRun.title}</h2>
            <StatusPill value={activeRun.status} />
          </div>
          <p className="text-sm text-muted-foreground">
            {activeRun.project}. Open the brief, then the draft, before this leaves the desk.
          </p>
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
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center gap-2">
        {chips.length === 0 ? (
          <p className="text-sm text-muted-foreground">No filters. The full list is showing.</p>
        ) : (
          chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex h-6 items-center gap-1 rounded-full border border-border bg-background px-2 text-xs"
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
      </div>
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
  )
}

export function ListSection() {
  return (
    <ItemGroup className="gap-2">
      {runs.map((run) => (
        <Item key={run.id} variant="outline">
          <ItemMedia variant="icon">
            <FileTextIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{run.title}</ItemTitle>
            <ItemDescription>{run.project}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <StatusPill value={run.status} />
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}

export function StepsSection() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <Stepper steps={["Brief", "Draft", "Review", "Publish"]} current={2} label="Run progress" />
    </div>
  )
}

export function ActivitySection() {
  return (
    <ScrollArea className="h-48 rounded-xl border border-border bg-card">
      <ol>
        {events.map((event) => (
          <li key={event.time} className="flex items-start gap-3 border-b border-border px-4 py-2.5 last:border-b-0">
            <span className={`mt-1.5 size-2 shrink-0 rounded-full ${event.tone}`} aria-hidden="true" />
            <span className="min-w-0">
              <span className="block text-sm">{event.text}</span>
              <span className="font-mono text-xs text-muted-foreground">{event.time}</span>
            </span>
          </li>
        ))}
      </ol>
    </ScrollArea>
  )
}

export function ChartSection() {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <ChartContainer config={chartConfig} className="aspect-auto h-56 w-full">
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
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Archive run</AlertDialogTrigger>
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
  )
}

export function DrawerSection() {
  return (
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

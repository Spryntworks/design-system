"use client"

import { useState } from "react"

import { DeskRow, Specimen } from "@/components/docs/specimen"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { StatusPill } from "@/components/ui/status-pill"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const rows = [
  { id: "tp", mark: "TP", name: "Training Portal", open: 18, status: "READY" },
  { id: "sp", mark: "SP", name: "Support Portal", open: 6, status: "WAIT" },
  { id: "cc", mark: "CC", name: "Content Copilot", open: 3, status: "BLOCKED" },
] as const

export function DataCatalog() {
  const [selected, setSelected] = useState<string[]>(["tp"])

  function toggle(id: string, checked: boolean) {
    setSelected((current) =>
      checked ? [...current, id] : current.filter((item) => item !== id),
    )
  }

  const allChecked = selected.length === rows.length

  return (
    <div className="flex flex-col gap-10">
      <Specimen title="Breadcrumb" note="Where this screen sits. The last crumb is the current page.">
        <DeskRow title="Data" detail="Sprynt / Components / Data. The last crumb is this page.">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Sprynt</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Data</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </DeskRow>
      </Specimen>

      <Specimen
        title="Table"
        note="Selectable rows, a count in tabular figures, and a status pill. Select a row to act on it."
        flush
      >
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox
                    checked={allChecked}
                    onCheckedChange={(checked) =>
                      setSelected(checked ? rows.map((row) => row.id) : [])
                    }
                    aria-label="Select all projects"
                  />
                </TableHead>
                <TableHead>Project</TableHead>
                <TableHead className="text-right">Open</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} data-state={selected.includes(row.id) ? "selected" : undefined}>
                  <TableCell>
                    <Checkbox
                      checked={selected.includes(row.id)}
                      onCheckedChange={(checked) => toggle(row.id, checked === true)}
                      aria-label={`Select ${row.name}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <span className="flex items-center gap-2">
                      <Avatar>
                        <AvatarFallback>{row.mark}</AvatarFallback>
                      </Avatar>
                      {row.name}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-mono tabular-nums">{row.open}</TableCell>
                  <TableCell>
                    <StatusPill value={row.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3">
            <p className="text-sm text-muted-foreground">{selected.length} selected</p>
            <p className="text-sm text-muted-foreground">3 projects</p>
          </div>
        </div>
      </Specimen>

      <Specimen title="Pagination" note="Keep the page size stable. Say previous and next in words.">
        <DeskRow title="Page 1 of 8" detail="Previous and next stay in words. The page size does not change.">
          <Pagination className="mx-0 w-auto justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#rows" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#rows" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#rows">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#rows">8</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#rows" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </DeskRow>
      </Specimen>

      <Specimen title="Tabs" note="Tabs switch a view of the same record. They are not navigation between tools.">
        <div className="px-5 py-4">
          <Tabs defaultValue="open">
            <TabsList>
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="review">In review</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
            </TabsList>
            <TabsContent value="open" className="pt-4">
              <ul className="divide-y divide-border rounded-lg border border-border">
                <li className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="text-sm font-medium">Week 12 narrative</span>
                  <StatusPill value="WAIT" />
                </li>
                <li className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="text-sm font-medium">Launch thread</span>
                  <StatusPill value="BLOCKED" />
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="review" className="pt-4 text-sm leading-6 text-muted-foreground">
              2 runs are with the project lead.
            </TabsContent>
            <TabsContent value="closed" className="pt-4 text-sm leading-6 text-muted-foreground">
              11 runs closed this week.
            </TabsContent>
          </Tabs>
        </div>
      </Specimen>

      <Specimen title="Accordion" note="A log that stays on the page. Open one section at a time.">
        <Accordion defaultValue={["brief"]}>
          <AccordionItem value="brief">
            <AccordionTrigger className="px-5">Brief</AccordionTrigger>
            <AccordionContent className="px-5">
              Week 12 covers the migration story in four posts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="channels">
            <AccordionTrigger className="px-5">Channels</AccordionTrigger>
            <AccordionContent className="px-5">LinkedIn and X. The blog draft stays in the hub.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="log">
            <AccordionTrigger className="px-5">Log</AccordionTrigger>
            <AccordionContent className="px-5">Saved Tuesday. Waiting on a review before Friday.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Specimen>
    </div>
  )
}

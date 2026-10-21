"use client"

import { useState } from "react"

import { Specimen } from "@/components/docs/specimen"
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
      </Specimen>

      <Specimen
        title="Table"
        note="Selectable rows, a count in tabular figures, and a status pill. Select a row to act on it."
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
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          {selected.length} selected
        </p>
      </Specimen>

      <Specimen title="Pagination" note="Keep the page size stable. Say previous and next in words.">
        <Pagination className="justify-start">
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
      </Specimen>

      <Specimen title="Tabs" note="Tabs switch a view of the same record. They are not navigation between tools.">
        <Tabs defaultValue="open">
          <TabsList>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="review">In review</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <TabsContent value="open" className="pt-4 text-sm">
            4 runs are waiting on a reviewer.
          </TabsContent>
          <TabsContent value="review" className="pt-4 text-sm">
            2 runs are with the project lead.
          </TabsContent>
          <TabsContent value="closed" className="pt-4 text-sm">
            11 runs closed this week.
          </TabsContent>
        </Tabs>
      </Specimen>

      <Specimen title="Accordion" note="A log that stays on the page. Open one section at a time.">
        <Accordion defaultValue={["brief"]} className="max-w-xl">
          <AccordionItem value="brief">
            <AccordionTrigger>Brief</AccordionTrigger>
            <AccordionContent>
              Week 12 covers the migration story in four posts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="channels">
            <AccordionTrigger>Channels</AccordionTrigger>
            <AccordionContent>LinkedIn and X. The blog draft stays in the hub.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="log">
            <AccordionTrigger>Log</AccordionTrigger>
            <AccordionContent>Saved Tuesday. Waiting on a review before Friday.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Specimen>
    </div>
  )
}

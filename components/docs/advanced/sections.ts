export const advancedSections = [
  {
    slug: "sidebar",
    title: "Sidebar",
    note: "The desk frame. One active item, a quiet footer, and the work in the panel beside it. Tools mount this at the app root and collapse it with the sidebar trigger.",
  },
  {
    slug: "navigation",
    title: "Navigation",
    note: "A top bar for a tool that is wider than a sidebar. The menu names a place, then the pages inside it.",
  },
  {
    slug: "split",
    title: "Split view",
    note: "A list and its detail, with a handle between them. Use this when both need to stay on screen.",
  },
  {
    slug: "table",
    title: "Sortable table",
    note: "Sort the column the person is comparing. Row actions stay in a menu so the row itself stays a record.",
  },
  {
    slug: "filters",
    title: "Filters",
    note: "Active filters stay visible as chips. Extra choices stay collapsed until someone asks for them.",
  },
  {
    slug: "list",
    title: "Run list",
    note: "A dense list when a table is more structure than the screen needs. Status stays on the pill.",
  },
  {
    slug: "steps",
    title: "Steps",
    note: "Where a run is in its sequence. Completed steps take the mark. The current step is ink.",
  },
  {
    slug: "activity",
    title: "Activity",
    note: "A log that scrolls inside its own frame, so a long history does not push the page.",
  },
  {
    slug: "chart",
    title: "Chart",
    note: "Published against waiting, for the week. Magenta is the work that shipped. Gray is still waiting.",
  },
  {
    slug: "confirm",
    title: "Confirm",
    note: "A destructive action names the consequence before it runs. Cancel is the quiet button.",
  },
  {
    slug: "drawer",
    title: "Drawer",
    note: "Filters that do not fit the page. They slide in, and Apply sends them back.",
  },
] as const

export type AdvancedSlug = (typeof advancedSections)[number]["slug"]

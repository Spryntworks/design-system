import type { Metadata } from "next"
import {
  ArchiveIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  BellIcon,
  BookOpenIcon,
  BotIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleCheckIcon,
  ClockIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  EyeOffIcon,
  FileTextIcon,
  FilterIcon,
  HeadphonesIcon,
  InboxIcon,
  InfoIcon,
  LifeBuoyIcon,
  LinkIcon,
  Loader2Icon,
  LockIcon,
  MailIcon,
  MessageSquareIcon,
  MicIcon,
  MicOffIcon,
  MoreHorizontalIcon,
  NewspaperIcon,
  OctagonXIcon,
  PanelLeftIcon,
  PaperclipIcon,
  PauseIcon,
  PencilIcon,
  PenLineIcon,
  PhoneIcon,
  PhoneOffIcon,
  PlayIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  Trash2Icon,
  TriangleAlertIcon,
  UploadIcon,
  UserIcon,
  UsersIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Icons",
}

const groups: { title: string; note: string; icons: [string, LucideIcon][] }[] = [
  {
    title: "Open",
    note: "Find a run, a day, or a person who is waiting.",
    icons: [
      ["Search", SearchIcon],
      ["Inbox", InboxIcon],
      ["File", FileTextIcon],
      ["Filter", FilterIcon],
      ["Calendar", CalendarIcon],
      ["Clock", ClockIcon],
      ["Bell", BellIcon],
    ],
  },
  {
    title: "Change",
    note: "Write, copy, attach, send, or put the work away.",
    icons: [
      ["Add", PlusIcon],
      ["Edit", PencilIcon],
      ["Write", PenLineIcon],
      ["Copy", CopyIcon],
      ["Link", LinkIcon],
      ["Attach", PaperclipIcon],
      ["Send", SendIcon],
      ["Download", DownloadIcon],
      ["Upload", UploadIcon],
      ["Refresh", RefreshCwIcon],
      ["Archive", ArchiveIcon],
      ["Delete", Trash2Icon],
    ],
  },
  {
    title: "People",
    note: "A person, a batch, a message, or something hidden.",
    icons: [
      ["Person", UserIcon],
      ["Batch", UsersIcon],
      ["Message", MessageSquareIcon],
      ["Mail", MailIcon],
      ["Show", EyeIcon],
      ["Hide", EyeOffIcon],
      ["Lock", LockIcon],
    ],
  },
  {
    title: "Lines",
    note: "A live call, a hold, or an agent that is working.",
    icons: [
      ["Phone", PhoneIcon],
      ["Listen", HeadphonesIcon],
      ["Mic", MicIcon],
      ["Muted", MicOffIcon],
      ["Hold", PauseIcon],
      ["Play", PlayIcon],
      ["End", PhoneOffIcon],
      ["Agent", BotIcon],
    ],
  },
  {
    title: "Tools",
    note: "The three desks that share this language.",
    icons: [
      ["Training", BookOpenIcon],
      ["Support", LifeBuoyIcon],
      ["Content", NewspaperIcon],
    ],
  },
  {
    title: "Chrome",
    note: "Menus, the sidebar, and the marks a toast already uses.",
    icons: [
      ["Up", ArrowUpIcon],
      ["Down", ArrowDownIcon],
      ["Previous", ChevronLeftIcon],
      ["Next", ChevronRightIcon],
      ["Expand", ChevronDownIcon],
      ["Collapse", ChevronUpIcon],
      ["Check", CheckIcon],
      ["Sidebar", PanelLeftIcon],
      ["More", MoreHorizontalIcon],
      ["Close", XIcon],
      ["Settings", SettingsIcon],
      ["Loading", Loader2Icon],
      ["Done", CircleCheckIcon],
      ["Info", InfoIcon],
      ["Alert", TriangleAlertIcon],
      ["Error", OctagonXIcon],
    ],
  },
]

export default function IconsPage() {
  return (
    <div className="flex flex-col gap-12">
      <header className="max-w-[68ch]">
        <h1 className="type-display">Icons</h1>
        <p className="type-body mt-3 text-muted-foreground">
          Lucide, stroke 2. The glyph is 1rem, the same size as the label. The button is the
          hit target, and an icon button still has a name. No emoji, and no second icon set.
        </p>
      </header>

      <section className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <FileTextIcon className="size-4 text-muted-foreground" aria-hidden="true" />
            <div>
              <p className="type-label">Week 12 narrative</p>
              <p className="type-meta mt-1 text-muted-foreground">In review</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" aria-label="More actions">
              <MoreHorizontalIcon />
            </Button>
            <Button>
              <PlusIcon />
              New run
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2 px-5 py-4">
          <SearchIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <Input placeholder="Search runs" aria-label="Search runs" />
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.title}>
          <h2 className="type-title">{group.title}</h2>
          <p className="type-meta mt-2 max-w-[68ch] text-muted-foreground">{group.note}</p>
          <ul className="mt-5 grid overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-2 md:grid-cols-4">
            {group.icons.map(([name, Icon]) => (
              <li
                key={name}
                className="flex items-center gap-3 px-5 py-4 shadow-[inset_-1px_-1px_0_0_var(--border)]"
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="type-label">{name}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

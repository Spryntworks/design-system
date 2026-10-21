export const callSections = [
  {
    slug: "live",
    title: "Live call",
    note: "Who is on the line, how long they have been there, and the controls a person can still reach.",
  },
  {
    slug: "transcript",
    title: "Transcript",
    note: "The line, in order. The caller, the desk, and a note when the system steps in.",
  },
  {
    slug: "queue",
    title: "Queue",
    note: "Who is waiting, and for how long. Answer is the one primary action.",
  },
  {
    slug: "summary",
    title: "Summary",
    note: "What the call decided, and the one next step. Written after the line ends.",
  },
  {
    slug: "handoff",
    title: "Handoff",
    note: "The agent keeps the line until a person takes it. Taking it is the primary action.",
  },
] as const

export type CallSlug = (typeof callSections)[number]["slug"]

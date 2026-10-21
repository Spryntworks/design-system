export const agentSections = [
  {
    slug: "roster",
    title: "Roster",
    note: "Which agent is working, which is idle, and which is waiting on a person.",
  },
  {
    slug: "thread",
    title: "Thread",
    note: "What the person asked, and what the agent said back. A tool call stays in its own block.",
  },
  {
    slug: "tool",
    title: "Tool call",
    note: "The name, the input, and the output. Open it when the result matters.",
  },
  {
    slug: "run",
    title: "Run",
    note: "The steps of one job. The current step is the one a person may still stop.",
  },
  {
    slug: "approval",
    title: "Approval",
    note: "The agent stops before it spends money or sends a message. Allow is the primary action.",
  },
] as const

export type AgentSlug = (typeof agentSections)[number]["slug"]

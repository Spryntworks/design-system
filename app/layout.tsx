import type { Metadata } from "next"
import { Geist_Mono, Space_Grotesk } from "next/font/google"

import { DocsShell } from "@/components/docs/shell"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

import "./globals.css"

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Sprynt",
    template: "%s · Sprynt",
  },
  description: "Design language for Sprynt internal tools.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider>
          <TooltipProvider>
            <DocsShell>{children}</DocsShell>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

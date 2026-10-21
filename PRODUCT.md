# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js, React, Tailwind CSS, and shadcn/ui, on current stable versions. Chosen by the user ("nextjs tailwind shadcn all top stuff").

## Users

Anyone at Sprynt. That includes people who do not write code, and the people who build the internal tools. They open this site when they need to decide, or check, how a tool should look and behave.

## Product Purpose

A single design system for Sprynt internal tools. It exists so those tools share one design language and so a change to that language is made here, not re-decided inside each project. Success means a person can open this site, see the language and the core components, and a tool built from it matches what the site shows.

## Positioning

The site and the component source live in one repo. Neighboring tools do not keep their own copy of the language. Client and marketing sites are not part of this system.

## Operating Context

Internal tools are separate repositories (including Training Portal, Support Portal, and Content Copilot), mostly Next.js, React, and Tailwind. People compare a tool against this site while designing or reviewing a screen. Publishing a shared package is a later step, after the system itself is in place.

## Capabilities and Constraints

- A website in this repo that shows the design language and real components.
- Readable without reading the source: foundations and components are visible on the page.
- Scope is Sprynt internal tools. Client sites (Intrinsq, Master Enterprises, Site Factory, storefronts) stay out.
- No package is published yet. The code is structured so those tools can install it later from this same repo.
- Undecided: the exact first component set beyond a tool shell, form controls, data display, and status; when a package or registry gets published.

## Evidence on Hand

No logo, photography, or brand guideline file is in this repo. Do not invent customers, metrics, or testimonials. Training Portal, Support Portal, and Content Copilot already style themselves independently; those apps are the reference for what the system has to unify.

## Product Principles

- One source of truth. The look of an internal tool is decided in this repo.
- Show the real thing. Pages render the components tools will use, not a picture of them.
- Readable by the whole company, not only by engineers.
- Change it once. Maintenance across projects happens by pointing tools at this system, not by copying rules into each repo.
- Internal tools only. This system does not theme client or marketing sites.

---
name: figma-generate-design
description: First-time webpage and HTML capture into Figma via `mcp__figma__generate_figma_design`. Use when Codex needs to send, import, capture, screenshot, or push a web page, local app screen, localhost route, or external URL into a new or existing Figma file. Do not use for incremental edits to an already-captured design; switch to `mcp__figma__use_figma` after the initial capture.
---

# Figma Generate Design

## Start

- Treat this skill as the entry point for first-time webpage-to-Figma capture.
- If the user wants to update a Figma page that has already been captured, stop and use `mcp__figma__use_figma` instead.
- If the user gives a Figma URL, extract the `fileKey` before choosing an output mode.
- If the user gives a local project instead of a URL, inspect the codebase first and identify the page, route, dev server command, and capture URL before calling the tool.

## Capture workflow

1. Identify whether the source is a local app, raw HTML, or an external URL.
2. Call `mcp__figma__generate_figma_design` without `outputMode` first to get capture options and instructions.
3. Choose the output target:
   - Use `newFile` when the user wants a fresh Figma file.
   - Use `existingFile` when the user wants the capture added to a known Figma file.
   - Use `clipboard` only when the user explicitly wants paste-ready output.
4. If `newFile` needs a team destination, get the available plans and pick the correct `planKey`.
5. Poll with the returned `captureId` every 5 seconds, up to 10 times, until the status becomes `completed`.
6. Report the resulting file URL or destination details, then hand follow-up edits to `mcp__figma__use_figma`.

## Source-specific rules

- For local projects:
  - Discover the correct route and how to run the app before capture.
  - Prefer the real local URL over guessing page structure.
- For external URLs:
  - Use Playwright MCP to capture the page.
  - Do not use generic web-page opening flows with hash fragments as a substitute.
- For Figma targets:
  - Use `existingFile` only when you have the correct `fileKey`.
  - Pass `nodeId` only when the user wants the design inserted into a specific existing node or area.

## Operating rules

- Treat each `captureId` as single-use.
- Do not skip the initial no-`outputMode` call; use it to discover the right capture path.
- Keep polling bounded. If the capture does not complete after 10 polls, stop and report the last known status.
- Preserve the distinction between capture and edit: capture with `generate_figma_design`, then modify with `use_figma`.

## Reference

- Read [references/capture-modes.md](references/capture-modes.md) when deciding between `newFile`, `existingFile`, and `clipboard`, or when you need the exact polling checklist.

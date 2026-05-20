---
name: figma-create-new-file
description: Create a new blank Figma design file or FigJam board with `mcp__figma__create_new_file`. Use when Codex needs to start a fresh file before other Figma work, especially when the user wants a brand-new draft file, a clean design canvas, or a new FigJam board and may or may not already know which Figma team or organization plan key to use.
---

# Figma Create New File

## Start

- Decide whether the target should be a `design` file or a `figjam` board. Default to `design` unless the user explicitly asks for FigJam, whiteboarding, mapping, or workshop-style collaboration.
- Reuse a user-provided `planKey` directly.
- If `planKey` is missing, call `mcp__figma__whoami` first to discover available plans.
- If `whoami` returns exactly one plan, use its `key` without asking the user.
- If multiple plans are available and the user has not identified one, ask which team or organization to use before creating the file.
- Choose a short, purpose-driven `fileName` from the request. Do not ask the user to name the file unless the distinction matters.

## Workflow

1. Normalize the requested file type:
   - use `design` for standard Figma design files
   - use `figjam` for brainstorming boards, diagrams, workshops, or note-taking
2. Resolve `planKey`:
   - use the provided value if the user already supplied one
   - otherwise call `mcp__figma__whoami`
   - auto-select the plan `key` if there is only one plan
   - ask the user to choose if there are multiple plausible plans
3. Call `mcp__figma__create_new_file` with `editorType`, `fileName`, and `planKey`.
4. Return the new file URL as a Markdown link and mention the file key when helpful.
5. If the user asked for follow-up work, continue with the new file instead of stopping at creation.

## Naming Rules

- Prefer names that reflect the file's purpose, such as `Landing Page Exploration`, `Q2 Planning Board`, or `Mobile Settings Concepts`.
- Add a date only when it meaningfully distinguishes recurring files.
- Avoid generic names like `Untitled` when the request already implies a better name.

## Decision Rules

- Use this tool only for brand-new blank files in the authenticated user's drafts area.
- If the user wants to edit an existing Figma file, use the appropriate Figma editing or context tools instead.
- If the user wants to capture or import a webpage into Figma, use `mcp__figma__generate_figma_design` instead of creating a blank file first.
- If permissions or plan membership look wrong, re-run `mcp__figma__whoami` to confirm the logged-in account before retrying.

## Response Shape

- Keep the result brief.
- Include the created file as a Markdown link.
- State any assumption you made, such as defaulting to `design` or auto-selecting the only available plan.

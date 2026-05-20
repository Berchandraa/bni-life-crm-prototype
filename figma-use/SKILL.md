---
name: figma-use
description: Direct Figma Plugin API write workflows for existing Figma files via `mcp__figma__use_figma`. Use when Codex needs to create, edit, inspect, or sync pages, frames, components, variants, variables, styles, text, images, or layout inside Figma, especially for incremental updates to an already-captured design. Do not use for first-time webpage capture; use `mcp__figma__generate_figma_design` first, then return to this skill for follow-up edits.
---

# Figma Use

## Start

- Extract `fileKey` and `nodeId` from any Figma URL before doing anything else. Convert URL `node-id=1-2` values to `1:2`.
- Prefer `mcp__figma__get_design_context` before writing when the request refers to a specific node, screen, or component and you need screenshot context or reference code.
- Use `mcp__figma__get_metadata` only for structure discovery when the target area is unclear and `get_design_context` would be too broad.
- If the user wants to capture a webpage into Figma for the first time, stop and use `mcp__figma__generate_figma_design` instead of `use_figma`.

## Write workflow

1. Clarify the exact target file or node from the prompt or URL.
2. Check for reusable assets with `mcp__figma__search_design_system` before creating new components, styles, or variables.
3. Make a small edit plan that preserves existing naming, structure, and library conventions.
4. Call `mcp__figma__use_figma` with one focused JavaScript operation at a time.
5. Verify the result by inspecting the affected node, or by re-running `get_design_context`/`get_screenshot` when visual confirmation matters.

## Operating rules

- Write idempotent plugin code whenever practical. Reuse existing pages, frames, styles, variables, and components by name instead of duplicating them.
- Load fonts with `figma.loadFontAsync` before changing text characters, font properties, or text styles.
- Prefer auto layout, padding, spacing, and constraints over absolute coordinates unless the design clearly depends on fixed positioning.
- Preserve the file's naming scheme for pages, components, variables, and styles.
- Keep destructive actions narrow. If a delete, detach, or large rename could affect ambiguous targets, pause and confirm with the user.
- Return useful identifiers after major edits, especially new page names, node ids, or component names that the next step may depend on.

## Common tool choices

- Use `mcp__figma__get_variable_defs` to inspect tokens already applied to a representative node.
- Use `mcp__figma__get_code_connect_suggestions` and `mcp__figma__send_code_connect_mappings` for Code Connect tasks rather than inventing mappings manually.
- Use `mcp__figma__whoami` when permissions or file access look wrong.

## Reference

- Read [references/plugin-patterns.md](references/plugin-patterns.md) when you need concrete `use_figma` code patterns for text edits, auto layout, component reuse, variable creation, or safe node lookup.

---
name: figma
description: Figma design-to-code and design-ops workflows. Use when working with Figma files/URLs, node IDs, components/variants, variables/styles, Code Connect mappings, asset exports, accessibility/visual QA, or when generating/updating designs via the Figma plugin API tools (get_design_context, use_figma, search_design_system, generate_diagram, generate_figma_design).
---

# Figma

## Operating rules

- Prefer `mcp__figma__get_design_context` for any node-level context (it returns a screenshot + reference code).
- Use `mcp__figma__use_figma` for *all* write operations (create/edit/delete nodes, variables, styles, components, pages).
- If the user wants to “import/capture a webpage into Figma”, use `mcp__figma__generate_figma_design` first; after that, use `use_figma` for incremental updates.
- Before creating new components, call `mcp__figma__search_design_system` to reuse existing library assets.
- When the user pastes a Figma URL, extract:
  - `fileKey`
  - `nodeId` (convert `1-2` to `1:2`)

## Standard workflow (design-to-code)

1. Identify target node(s) and goal (implement UI, extract tokens, map Code Connect, fix layout, etc.).
2. Call `mcp__figma__get_design_context` with `fileKey` + `nodeId`.
3. If the change needs edits inside Figma:
   - Make a small, explicit edit plan.
   - Apply changes via `mcp__figma__use_figma`.
4. If the change needs code implementation:
   - Use the design context screenshot to validate spacing/typography.
   - Translate to the repo’s existing components/tokens; avoid pixel-perfect magic numbers unless the design demands it.

## Code Connect workflow

1. For a target node: call `mcp__figma__get_code_connect_suggestions`.
2. Confirm which mappings are correct with the user if ambiguous.
3. Save mappings in bulk via `mcp__figma__send_code_connect_mappings`.
4. If the user asks “what is already connected?”, use `mcp__figma__get_code_connect_map`.

## Token/variables workflow

- Use `mcp__figma__get_variable_defs` on a representative node to discover tokens used.
- If you need to find an existing token/component by name, use `mcp__figma__search_design_system`.
- When creating variables/styles in Figma, do it via `mcp__figma__use_figma` and keep names consistent with existing conventions in the file/library.

## Diagram workflow (FigJam)

- Use `mcp__figma__generate_diagram` for Mermaid flowcharts/sequence/state/gantt diagrams.
- Keep diagrams simple unless the user asks for detail; quote all node/edge text in Mermaid.

## Troubleshooting checklist

- Permission errors: call `mcp__figma__whoami` to confirm the logged-in account.
- Wrong node: re-check `node-id` in the URL (and `-` vs `:` conversion).
- Too much output: re-run `get_design_context` on a narrower node (smaller subtree).

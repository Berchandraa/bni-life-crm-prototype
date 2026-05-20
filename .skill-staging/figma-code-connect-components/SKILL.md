---
name: figma-code-connect-components
description: Create, inspect, suggest, and save Figma Code Connect mappings for components. Use when Codex needs to connect Figma component nodes to code components, review existing Code Connect coverage, approve or refine AI mapping suggestions, add explicit one-off mappings, or create template-backed Code Connect component docs for frameworks such as React, Storybook, Vue, Web Components, SwiftUI, Compose, or Markdown.
---

# Figma Code Connect Components

## Start

- Extract `fileKey` and `nodeId` from any Figma URL before calling a Figma tool. Convert `node-id=1-2` to `1:2`.
- Inspect the local codebase before saving mappings. Use fast code search to find the real component name, source path, framework, and any existing Storybook or design-system wrapper that should be mapped instead of a lower-level implementation file.
- Decide whether the job is:
  - inspect existing mappings
  - get AI suggestions for mappings
  - save reviewed mappings in bulk
  - add one explicit mapping directly
  - create a template-backed Code Connect record

## Mapping Workflow

1. Identify the target component node or component set. If the user gives a broad page or file, narrow to the actual component nodes first.
2. Call `mcp__figma__get_code_connect_map` when the user asks what is already mapped or when you want to avoid overwriting an existing mapping blindly.
3. Call `mcp__figma__get_code_connect_suggestions` when you need Figma-side suggestions for a node. Use the repo's real framework and language values when known.
4. Review the suggestions against the codebase:
   - prefer public component entry points over internal implementation files
   - prefer components already used by the product or design system
   - keep naming aligned with the exported component name in code
5. Save approved suggestions with `mcp__figma__send_code_connect_mappings` when you have multiple mappings or when the suggestions already fit.
6. Use `mcp__figma__add_code_connect_map` for a single explicit mapping, especially when you need to set the label, source path, or template manually.
7. Re-read the mapping with `mcp__figma__get_code_connect_map` after saving when verification matters.

## Decision Rules

- Prefer `get_code_connect_map` before editing if the request sounds like audit, review, sync, compare, or fix.
- Prefer `send_code_connect_mappings` after `get_code_connect_suggestions`; this is the cleanest path for reviewed bulk approval.
- Prefer `add_code_connect_map` when:
  - there is only one mapping to create
  - the AI suggestion is wrong or unavailable
  - the user wants a specific `componentName`, `source`, or `label`
  - the user wants a template-backed figmadoc mapping
- Use `mcp__figma__get_design_context` when the node is visually ambiguous and you need to confirm which code component it represents.
- Use `mcp__figma__get_metadata` only to discover structure when the target component node is still unclear.

## Mapping Quality Rules

- Map to stable, user-facing components, not private helpers, generated files, or test fixtures.
- Use the framework label expected by Code Connect exactly as supported by the tool.
- Keep `componentName` aligned with the code component's actual exported name or stable display name.
- Use a source path that another engineer can follow quickly. Prefer the canonical component file or published wrapper entry point.
- Do not save a mapping that is still materially ambiguous. If two components are plausible, surface the tradeoff and ask the user to choose.
- Preserve existing mappings unless the user asks to replace them or the current mapping is clearly wrong.

## Template-Backed Mappings

- Add a `template` only when the user needs richer Code Connect documentation, prop examples, or parserless render logic.
- Keep template code minimal and executable.
- Add `templateDataJson` only with fields the template actually needs. Do not invent complex metadata.
- If the repo already has Code Connect templates or stories, mirror their naming and import style.

## Verification

- Confirm the saved mapping resolves to the intended node and source path.
- If you changed multiple mappings, summarize which nodes were linked and which candidates were rejected.
- If you could not save confidently, leave the mapping unapplied and explain the blocker.

## Reference

- Read [references/mapping-patterns.md](references/mapping-patterns.md) for quick tool selection, supported labels, and compact examples of simple and template-backed mappings.

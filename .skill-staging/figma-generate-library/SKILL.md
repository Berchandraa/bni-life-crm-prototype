---
name: figma-generate-library
description: Generate or sync reusable Figma component libraries from an existing product, design system, or codebase. Use when Codex needs to create or update library pages, variables, styles, components, variants, and supporting structure in Figma, especially when turning shared UI primitives and tokens into a maintainable design library instead of a one-off screen.
---

# Figma Generate Library

## Start

- Treat the request as library work, not screen design work. Optimize for reuse, naming consistency, and publishable components.
- Identify the source of truth before writing anything:
  - existing product codebase
  - existing Figma file or library
  - both code and Figma, with one acting as the canonical source
- Resolve the target file first. If no library file exists yet, create a new blank design file before generating the library contents.
- Inspect the current library surface before creating new assets:
  - search for reusable Figma components, styles, and variables with `mcp__figma__search_design_system`
  - inspect representative nodes with `mcp__figma__get_design_context` or `mcp__figma__get_variable_defs`
- If the library should reflect a repository, inspect the codebase first and derive the actual stack, component model, token source, and naming patterns from implementation.

## Workflow

1. Define the library scope:
   - foundations such as color, type, spacing, radius, shadow, motion
   - primitives such as buttons, inputs, icons, badges, chips
   - composed components such as cards, tables, nav, dialogs
   - examples or documentation frames only when they help usage
2. Build foundations first:
   - create or reuse variable collections before creating components that depend on them
   - create styles only when the file or team actually uses styles in addition to variables
   - keep token names aligned with the repo or existing Figma conventions
3. Build reusable components second:
   - start with primitives, then compose upward
   - prefer component sets with properties for size, state, tone, emphasis, icon placement, and loading
   - use auto layout, constraints, and text styles that keep instances resilient
4. Organize the file for maintenance:
   - separate pages such as `Foundations`, `Components`, and `Patterns` or `Examples`
   - keep published assets clean and keep exploratory frames off the main library pages
5. Verify the result:
   - confirm variables are applied instead of raw values where appropriate
   - confirm variants swap correctly and property names are clear
   - confirm repeated components were reused instead of duplicated

## Operating Rules

- Use `mcp__figma__use_figma` for all write operations.
- Make plugin edits idempotent whenever practical. Reuse existing pages, collections, variables, styles, components, and component sets by name.
- Prefer small, focused library-generation steps over one giant plugin operation.
- Load fonts before editing text.
- Prefer component properties over detached manual variants.
- Prefer auto layout over absolute positioning unless the design system clearly depends on fixed geometry.
- Preserve the target file's naming, grouping, and page conventions.
- Do not invent a mature component taxonomy if the source system is inconsistent. Build the stable shared pieces first and leave room for later refinement.
- If the source code and existing Figma library disagree, follow the user-specified source of truth. If none is specified, prefer the current shipped product implementation.

## Codebase-Derived Libraries

- Inspect shared component folders, token files, theme files, CSS variables, Tailwind config, Storybook stories, or UI docs before generating the library.
- If the codebase is inconsistent, extract the most repeated patterns into library primitives instead of forcing every edge case into the first pass.
- Use repository-specific naming for states, sizes, semantic colors, and density options.
- If helpful, generate design-system guidance first and then convert the stable parts of that guidance into Figma variables and components.

## Decision Rules

- Use this skill for reusable library generation or synchronization.
- Do not use this skill for one-off screen capture or single-screen mockups; use the broader Figma workflow for those.
- If the user wants a webpage captured into Figma for the first time, capture it first, then use this skill to extract or formalize reusable library assets.
- If the request is ambiguous between "build a screen" and "build the system behind the screen," bias toward asking whether the output should be reusable across products before creating a large library.

## Reference

- Read [references/library-build-patterns.md](references/library-build-patterns.md) when you need a compact checklist for token setup, page structure, variant modeling, or safe incremental library updates.

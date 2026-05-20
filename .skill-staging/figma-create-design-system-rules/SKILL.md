---
name: figma-create-design-system-rules
description: Generate repository-specific Figma design system rules with `mcp__figma__create_design_system_rules`. Use when Codex needs to turn an existing product codebase into practical design-system guidance for Figma, especially for component conventions, tokens, layout, typography, accessibility, naming, and reuse rules that should reflect how the repo actually works.
---

# Figma Create Design System Rules

## Start

- Inspect the codebase before calling the Figma tool. Identify the real frontend stack, styling approach, component architecture, and token sources from implementation, not guesswork.
- Infer `clientFrameworks` and `clientLanguages` conservatively. If the repo is mixed or unclear, pass `unknown` instead of over-claiming.
- Prefer evidence from shipped UI code, shared components, theme files, and design-token sources over aspirational docs.

## Workflow

1. Find the frontend surface area that best represents the design system:
   - app framework and language entry points
   - shared component folders
   - style/token sources such as CSS variables, Tailwind config, theme files, or token JSON
   - Storybook, docs, or contribution guides if they exist
2. Form a short internal summary of the stack, such as `React + TypeScript + Tailwind`.
3. Call `mcp__figma__create_design_system_rules` with the best `clientFrameworks` and `clientLanguages` values you can support from repo evidence.
4. Use the tool output as the base draft for the final rules.
5. Adapt the rules so they match the repo's current conventions, constraints, and naming. Keep the final result practical enough that another designer or engineer could follow it immediately.

## What Good Rules Should Capture

- Which shared components should be reused before creating custom UI
- Where spacing, typography, color, radius, shadow, and motion decisions come from
- How layout and responsiveness are usually handled in the repo
- How states such as hover, focus, loading, empty, error, and disabled are represented
- How accessibility expectations show up in current components and markup
- Which naming patterns appear in tokens, components, and variants
- When raw values are acceptable versus when tokens or primitives should be used

## Decision Rules

- Prefer implementation over documentation when they conflict.
- Do not invent a mature design system if the repo is inconsistent. Separate observed conventions from recommended guardrails.
- If multiple UI stacks exist, scope the rules to the requested product area when possible. Otherwise state that the repo is mixed and explain the dominant pattern you used.
- Keep recommendations close to the repo's current reality. Improve clarity and consistency without rewriting the team's whole design language.

## Output Shape

- Lead with the stack and evidence basis in one short paragraph or heading.
- Present the rules as compact, actionable bullets or short sections.
- Include both "do" guidance and clear constraints where helpful.
- If the repo has obvious gaps, end with a short "open gaps" or "follow-up cleanup" section instead of hiding the inconsistency.

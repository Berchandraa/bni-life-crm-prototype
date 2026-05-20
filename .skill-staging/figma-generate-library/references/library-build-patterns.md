# Library Build Patterns

Use this reference when a Figma task is about durable library structure rather than a one-off frame.

## Recommended page shape

- `Foundations`
  - color, typography, spacing, radius, elevation, motion
- `Components`
  - primitives first, then composed components
- `Patterns` or `Examples`
  - usage demos, layouts, and state matrices that should not be mistaken for publishable source components

## Foundations checklist

- Reuse existing variable collections before creating new ones.
- Prefer semantic token names when the product already uses them.
- Create raw primitives only when they exist in the current system or are needed to support semantic aliases.
- Keep modes intentional, such as light and dark, instead of creating unused mode shells.

## Component modeling checklist

- Prefer one component set per conceptual component family.
- Use properties for size, state, tone, emphasis, icon position, and loading when those axes recur.
- Keep property names short and predictable.
- Avoid variant explosion by splitting genuinely different structures into separate component families.
- Compose larger components from primitives when the real product does the same.

## Incremental sync rules

- Search the design system before creating components, styles, or variables.
- Reuse existing names and pages whenever the match is trustworthy.
- Make additions in narrow batches so verification is easy after each write.
- Keep exploratory or migration helpers off publishable library pages.

## Repo-to-library signals

Inspect these in the product codebase when deriving the library from implementation:

- shared component exports
- theme or token files
- CSS variable definitions
- Tailwind config or utility conventions
- Storybook stories or docs examples
- accessibility patterns such as focus, disabled, error, and loading states

## Stop-and-check cases

- One requested component appears to map to several different product implementations.
- The source repo has no stable token naming and would force large invented taxonomy.
- The Figma file already contains a partial library with conflicting naming or structure.
- The user asks for a publishable library but only provided one finished screen.

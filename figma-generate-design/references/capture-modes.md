# Capture Modes

## Choose the target

- Choose `newFile` when the user wants a standalone capture result or has not provided a Figma destination.
- Choose `existingFile` when the user explicitly wants the capture added to a known Figma file or page.
- Choose `clipboard` only for paste-ready output; prefer file-backed results for collaborative workflows.

## Inputs to gather

- Source page:
  - External URL, local route, or HTML input.
- Figma destination:
  - `fileKey` for `existingFile`.
  - `nodeId` only when insertion into a specific node matters.
- Workspace destination:
  - `planKey` for `newFile` when the tool requests a team or organization choice.

## Polling checklist

1. Make the first `mcp__figma__generate_figma_design` call without `outputMode`.
2. Make the selected output-mode call and store the returned `captureId`.
3. Poll the same tool with that `captureId` every 5 seconds.
4. Stop when the status is `completed`.
5. Stop after 10 polls if it does not complete, and report the last status instead of looping forever.

## Handoff

- After a successful capture, switch to `mcp__figma__use_figma` for edits, cleanup, relayout, or design-system alignment.

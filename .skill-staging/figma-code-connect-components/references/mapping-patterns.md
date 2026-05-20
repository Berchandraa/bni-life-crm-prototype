# Mapping Patterns

## Tool Choice

- `mcp__figma__get_code_connect_map`
  - Use to inspect existing Code Connect mappings for a node.
- `mcp__figma__get_code_connect_suggestions`
  - Use to get Figma-side mapping suggestions before saving anything.
- `mcp__figma__send_code_connect_mappings`
  - Use to bulk-save reviewed suggestions.
- `mcp__figma__add_code_connect_map`
  - Use to create one explicit mapping or one template-backed mapping.

## Supported Labels

Use the label values exactly as supported by the tool:

- `React`
- `Web Components`
- `Vue`
- `Svelte`
- `Storybook`
- `Javascript`
- `Swift`
- `Swift UIKit`
- `Objective-C UIKit`
- `SwiftUI`
- `Compose`
- `Java`
- `Kotlin`
- `Android XML Layout`
- `Flutter`
- `Markdown`

## Simple Mapping Checklist

- Find the real component in the repo first.
- Prefer exported entry points over deep internal files.
- Use the node id and file key from the exact Figma component node.
- Keep the component name and source path consistent with the repo.

## Simple Mapping Example

Use a direct explicit mapping when the suggestion step is unnecessary or wrong.

```text
componentName: "Button"
label: "React"
source: "src/components/Button.tsx"
```

## Template Mapping Checklist

- Add a template only when the user needs richer Code Connect behavior.
- Keep template imports and props minimal.
- Include `templateDataJson` only for metadata the template actually consumes.
- Reuse repo conventions for imports, prop names, and examples.

## Template Mapping Example

Use a template-backed mapping for a documented component example or parserless render path.

```text
componentName: "Button"
label: "React"
source: "src/components/Button.tsx"
template: figma.connect(
  Button,
  "Button",
  {
    props: {},
    example: () => <Button>Label</Button>,
  }
);
templateDataJson: {"isParserless":true}
```

## Ambiguity Rules

- Pause if one Figma node could map to several wrapper components.
- Pause if the best code path differs from the exported component name used across the repo.
- Inspect existing mappings before replacing them.

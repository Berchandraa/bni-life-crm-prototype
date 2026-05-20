# Plugin Patterns

Use these patterns as starting points when writing `mcp__figma__use_figma` code. Adapt names, ids, and properties to the current file instead of pasting them unchanged.

## Find or create a page

```javascript
let page = figma.root.children.find(
  (node) => node.type === "PAGE" && node.name === "Specs"
);

if (!page) {
  page = figma.createPage();
  page.name = "Specs";
}
```

## Find a node safely

```javascript
const target = figma.getNodeById("12:34");
if (!target) {
  throw new Error("Target node 12:34 was not found");
}
```

## Update text

```javascript
const textNode = figma.getNodeById("12:34");
if (!textNode || textNode.type !== "TEXT") {
  throw new Error("Expected a text node");
}

await figma.loadFontAsync(textNode.fontName);
textNode.characters = "Updated copy";
```

If the node uses mixed fonts, inspect its ranges first and load each required font before editing.

## Configure auto layout on a frame

```javascript
const frame = figma.getNodeById("12:34");
if (!frame || frame.type !== "FRAME") {
  throw new Error("Expected a frame node");
}

frame.layoutMode = "VERTICAL";
frame.primaryAxisSizingMode = "AUTO";
frame.counterAxisSizingMode = "AUTO";
frame.itemSpacing = 12;
frame.paddingTop = 24;
frame.paddingRight = 24;
frame.paddingBottom = 24;
frame.paddingLeft = 24;
```

## Reuse a library component

1. Use `mcp__figma__search_design_system` first to find the component key.
2. Import the asset in `use_figma` code only after a concrete match is chosen.

```javascript
const button = await figma.importComponentByKeyAsync("COMPONENT_KEY");
const instance = button.createInstance();
instance.name = "Primary CTA";
```

## Create or reuse a color variable

```javascript
let collection = figma.variables.localVariableCollections.find(
  (item) => item.name === "Primitives"
);
if (!collection) {
  collection = figma.variables.createVariableCollection("Primitives");
}

let variable = figma.variables.getLocalVariables().find(
  (item) => item.name === "color/brand/primary"
);
if (!variable) {
  variable = figma.variables.createVariable(
    "color/brand/primary",
    collection,
    "COLOR"
  );
}

const modeId = collection.modes[0].modeId;
variable.setValueForMode(modeId, { r: 0.04, g: 0.81, b: 0.51 });
```

## Finish with a small result payload

Prefer returning a concise summary from the plugin code when the next step depends on created nodes.

```javascript
figma.closePlugin(JSON.stringify({ pageName: page.name, nodeId: frame.id }));
```

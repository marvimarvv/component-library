---
name: create-component
description: "Enforces component library conventions when creating, adding, or building a new React component. Use when: creating a new component, adding a component, scaffolding a UI element. Enforces: CVA styling consts at top of file, gradient-theme/neon-theme variants, cutting-edge HTML/CSS over JS, TypeScript interface with JSDoc, co-located Storybook stories for every variant."
argument-hint: "Component name and description of variants/props needed"
---

# Create Component

## When to Use

Load this skill whenever creating a new React component in this library — whether scaffolding from scratch or adding a missing component to `src/components/`.

## Step-by-Step Procedure

### 1. Assess HTML/CSS first — search MDN before writing JS

Before writing any JavaScript or reaching for a library, ask: **can a native HTML element or modern CSS feature do this?**

- `<dialog>` for modals and overlays (with `::backdrop` for dimming)
- `popover` attribute for tooltips and popovers — no JS positioning needed
- `@starting-style` + `transition-behavior: allow-discrete` for enter/exit animations entirely in CSS
- Scroll-driven animations (`animation-timeline: scroll()`) for scroll-linked effects
- `:has()` for parent-responds-to-child logic
- CSS anchor positioning (`anchor-name`, `position-anchor`) for tooltips relative to a trigger
- `<details>` / `<summary>` for disclosure/accordion patterns
- Container queries (`@container`) for responsive component internals
- CSS custom properties + `light-dark()` for theming without JS

**If a new browser feature could eliminate a JS dependency**, fetch the MDN page to confirm browser support and usage before implementing.

JavaScript is only justified for:

- Complex state logic with no CSS equivalent
- Accessibility requirements (focus management, ARIA live regions)
- React-specific lifecycle needs (refs, effects tied to mount/unmount)

### 2. Create the component file

Place the file at `src/components/ComponentName.tsx`.

**File skeleton — in this exact order:**

```tsx
"use client";

import { cva } from "class-variance-authority";
// other imports

// ── Styles ────────────────────────────────────────────────────────────────────

export const elementOneStyles = cva("base-classes-here", {
  variants: {
    theme: {
      "gradient-theme": "...",
      "neon-theme": "...",
    },
    // other variants
  },
  defaultVariants: {
    theme: "gradient-theme",
  },
});

// more style consts as needed…

// ── Types ─────────────────────────────────────────────────────────────────────

interface ComponentNameProps {
  /** JSDoc description shown in Storybook autodocs */
  propName: "value-a" | "value-b";
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ComponentName({ propName }: ComponentNameProps) {
  const { theme } = useTheme() as unknown as {
    theme: "gradient-theme" | "neon-theme" | null | undefined;
  };

  return <div className={elementOneStyles({ theme })}>{/* … */}</div>;
}
```

### 3. Style rules — CVA consts

- **One `const` per logical element** that needs variants (e.g. `containerStyles`, `labelStyles`, `iconStyles`)
- **Named exports** for all style consts — sibling components can import and reuse them (e.g. `ButtonLink` reuses `buttonStyles` from `Button.tsx`)
- **Base classes** go in the first string argument to `cva()`; variant-specific classes go in `variants`
- **`compoundVariants`** when a combination of two variants (e.g. `theme` + `intent`) requires unique classes
- **Layering extra one-off Tailwind classes**: use a template literal rather than adding them to CVA
  ```tsx
  className={`${iconStyles({ theme })} opacity-100 group-open:opacity-0`}
  ```

### 4. Theming — always a `theme` variant

Every CVA const that produces different output between themes **must** include:

```ts
variants: {
  theme: {
    "gradient-theme": "...",
    "neon-theme": "...",
  },
}
```

Consume the theme in the component body using this exact cast (no exceptions):

```ts
const { theme } = useTheme() as unknown as {
  theme: "gradient-theme" | "neon-theme" | null | undefined;
};
```

Pass it to every CVA call: `elementStyles({ theme, ...otherVariants })`.

### 5. TypeScript rules

- Define props as `interface ComponentNameProps` (not a `type` alias), with **JSDoc on every prop** — these descriptions appear in Storybook's autodocs
- Use **discriminated unions** for mutually exclusive prop groups:
  ```ts
  type ComponentProps = BaseProps &
    (
      | { withImages?: never; oneItemOpen?: boolean }
      | { withImages: { images: string[] }; oneItemOpen: true }
    );
  ```
- SVG-based components: use `type SvgComponent = FC<SVGProps<SVGSVGElement>>`
- **Do not** annotate the component's return type explicitly — let TypeScript infer it

### 6. Exit animations — `isClosing` + `onAnimationEnd`

For components with animated unmounting, never use `setTimeout`. Use state + the animation lifecycle:

```tsx
const [isClosing, setIsClosing] = useState(false);

function handleClose() {
  setIsClosing(true);
}

function handleAnimationEnd() {
  if (isClosing) {
    setIsOpen(false);
    setIsClosing(false);
  }
}

// In JSX:
<div
  className={isClosing ? "animate-out" : "animate-in"}
  onAnimationEnd={handleAnimationEnd}
/>;
```

### 7. Create the stories file

Co-locate `ComponentName.stories.ts` in `src/components/`.

- Use **`.stories.ts`** (no JSX) unless a custom `render` function requires JSX → then **`.stories.tsx`**

**Required meta boilerplate:**

```ts
import type { Meta, StoryObj } from "@storybook/react";
import ComponentName from "./ComponentName";

const meta = {
  title: "Components/ComponentName",
  component: ComponentName,
  parameters: {
    layout: "centered", // use "fullscreen" for nav/full-bleed components
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;
```

**Story coverage rules:**

- One named `Story` export per significant variant combination (not a cross product of every prop, but all meaningful states a consumer would encounter)
- For navigation or full-bleed components, switch to `layout: "fullscreen"` and wrap with a `decorators` array:
  ```ts
  decorators: [
    (Story) => React.createElement("div", { style: { minHeight: "100vh" } }, React.createElement(Story)),
  ],
  ```
- Use `argTypes: { propName: { control: false } }` for derived or non-interactive props
- When a prop requires transformation before it maps to component input, use a custom `render` function:
  ```tsx
  render: ({ iconName, size }) => {
    const { filled, round } = iconMap[iconName];
    return <ComponentName filledIcon={filled} roundIcon={round} size={size} />;
  },
  ```

### 8. Checklist before finishing

- [ ] `"use client"` is the very first line
- [ ] All CVA style consts are above the component, named exports
- [ ] Every CVA const has a `theme` variant with both `"gradient-theme"` and `"neon-theme"` keys
- [ ] `useTheme()` cast boilerplate is used verbatim
- [ ] `interface Props` with JSDoc on every prop
- [ ] No explicit return type on the component function
- [ ] Native HTML/CSS used wherever possible; no unnecessary JS or libraries
- [ ] `.stories.ts(x)` file created alongside the component in `src/components/`
- [ ] `satisfies Meta<typeof Component>` in the meta definition
- [ ] `tags: ["autodocs"]` present
- [ ] One story per meaningful variant combination

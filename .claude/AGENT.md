# Component Library — Agent Instructions

## Styling: Never create separate CSS files

**Do not create `.css` files for components.** All styles belong in the component file itself.

- **Tailwind utility classes** for everything Tailwind can express — use CVA consts or a plain `const` string (see CVA section below).
- **A `<style>` JSX tag** for the rare cases Tailwind truly cannot express, e.g. including `display` or `overlay` as properties in a `transition` shorthand. Place it at the top of `return`, not in a `.css` file and not in `globals.css`.
- **`globals.css`** is for truly global resets, CSS custom properties, and theme definitions only — never for component-specific rules.

Tailwind v4 covers more than you might expect — check before reaching for a `<style>` tag:

| Need                                     | Tailwind equivalent                                              |
| ---------------------------------------- | ---------------------------------------------------------------- |
| `:popover-open`                          | `open:` variant                                                  |
| `@starting-style`                        | `starting:` variant                                              |
| `transition-behavior: allow-discrete`    | `transition-discrete` utility                                    |
| `anchor-name` / `position-area` (static) | arbitrary property `[anchor-name:--foo]` / `[position-area:top]` |

Example — `<style>` tag for genuinely unavoidable raw CSS:

```tsx
return (
  <>
    <style>{`
      .my-class {
        transition: display 150ms allow-discrete, overlay 150ms allow-discrete;
      }
    `}</style>
    {/* rest of JSX */}
  </>
);
```

## CVA conventions (from create-component skill)

- **CVA is not always required.** If an element has no theme or variant differences, a plain `const` string is enough:
  ```ts
  const wrapperStyles = "flex items-center gap-2 p-4";
  ```
- Use `cva()` only when you need **variants** (most commonly the `theme` variant).
- All style consts — whether `cva()` or plain `const` — are **named exports** above the component function.
- Every CVA const that produces theme-different output **must** have a `theme` variant with both `"gradient-theme"` and `"neon-theme"` keys.
- Base (theme-independent) classes go in the first `cva()` string argument.
- Use `compoundVariants` for combinations of `theme` + another variant.
- To layer one-off Tailwind classes use a template literal: `` `${myStyles({ theme })} extra-class` ``

## File structure (per component)

```
src/components/
  ComponentName.tsx       ← component + CVA consts + inline <style> if needed
  ComponentName.stories.tsx
```

No `.css`, no `.module.css`, no separate style files.

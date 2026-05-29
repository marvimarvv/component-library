"use client";

import { cva } from "class-variance-authority";
import { useId, useRef, type CSSProperties, type ReactNode } from "react";
import { useTheme } from "./ThemeProvider";

export const tooltipTriggerStyles = cva(
  "inline-block cursor-help focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-100",
  {
    variants: {
      theme: {
        "gradient-theme": "",
        "neon-theme": "",
      },
    },
    defaultVariants: { theme: "gradient-theme" },
  },
);

export const tooltipStyles = cva(
  "tooltip-popover m-0 px-fluid-xs py-fluid-3xs text-fluid-xs font-medium pointer-events-none",
  {
    variants: {
      theme: {
        "gradient-theme":
          "rounded-full bg-linear-to-br from-primary-300 via-primary-700 to-primary-300 text-primary-500-contrast dark:from-primary-100 dark:via-primary-300 dark:to-primary-100 dark:text-primary-700",
        "neon-theme":
          "isolate bg-primary-500 text-primary-500-contrast relative after:absolute after:h-full after:w-[0.5em] after:right-[-0.5em] after:bottom-[-0.25em] after:bg-primary-700 after:skew-y-45 before:absolute before:-right-[0.25em] before:-bottom-[0.5em] before:w-full before:h-[0.5em] before:skew-x-45 before:bg-primary-900 dark:before:bg-primary-700 after:-z-10 before:-z-10",
      },
    },
    defaultVariants: { theme: "gradient-theme" },
  },
);

interface TooltipProps {
  /** Element the tooltip anchors to and is triggered by (hover or focus) */
  children: ReactNode;
  /** Text content shown inside the tooltip */
  label: string;
  /** Side of the trigger the tooltip prefers (uses CSS anchor positioning `position-area`) */
  side?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({ children, label, side = "top" }: TooltipProps) => {
  const { theme } = useTheme() as unknown as {
    theme: "gradient-theme" | "neon-theme" | null | undefined;
  };
  const popoverRef = useRef<HTMLDivElement>(null);
  const rawId = useId();
  const safeId = rawId.replace(/:/g, "");
  const anchorName = `--tt-${safeId}`;

  const show = () => popoverRef.current?.showPopover();
  const hide = () => popoverRef.current?.hidePopover();

  return (
    <>
      <span
        className={tooltipTriggerStyles({ theme })}
        tabIndex={0}
        aria-describedby={`tooltip-${safeId}`}
        style={{ anchorName } as CSSProperties}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </span>
      <div
        ref={popoverRef}
        id={`tooltip-${safeId}`}
        role="tooltip"
        popover="manual"
        className={tooltipStyles({ theme })}
        style={
          {
            positionAnchor: anchorName,
            positionArea: side,
            margin: "0.5rem",
          } as CSSProperties
        }
      >
        {label}
      </div>
    </>
  );
};

export default Tooltip;

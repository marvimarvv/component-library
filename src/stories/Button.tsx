import React from "react";
import { cva } from "class-variance-authority";

interface ButtonProps {
  intent: "primary" | "secondary";
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const buttonStyles = cva(
  "pointer-cursor rounded-skin font-bold visited:no-underline focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-skin-primary-500 focus-visible:outline-offset-2",
  {
    variants: {
      intent: {
        primary: "text-skin-base border-none",
        secondary: "",
      },
      size: {
        small: "px-space-2xs py-space-3xs text-fluid-xs",
        medium: "px-space-xs py-space-3xs text-fluid-s",
        large: "px-space-s py-space-2xs text-fluid-m",
      },
      fullWidth: {
        true: "w-full",
      },
      isGradientTheme: {
        true: "gradient-button-hover-effect bg-gradient-to-br from-skin-primary-100 via-skin-primary-500 to-skin-primary-100 active:shadow-skin-primary-100 active:shadow-xl active:transition-shadow",
      },
      isNeonTheme: {
        true: "bg-skin-primary-500 neon-button-clip-path",
      },
    },
    compoundVariants: [
      {
        intent: "secondary",
        isGradientTheme: true,
        class:
          "relative text-transparent bg-clip-text before:bg-gradient-to-br before:from-skin-primary-100 before:to-skin-primary-500 before:absolute before:inset-0 before:rounded-skin before:-z-20 after:absolute after:inset-1 after:bg-white after:-z-10 after:rounded-skin",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      isGradientTheme: true,
    },
  }
);

export const Button = ({
  intent,
  size,
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const isGradientTheme =
    document.documentElement.classList.contains("gradient-theme");
  const isNeonTheme = document.documentElement.classList.contains("neon-theme");
  const fullWidth = props.fullWidth || false;
  return (
    <button
      type="button"
      className={buttonStyles({
        intent,
        fullWidth,
        size,
        isGradientTheme,
        isNeonTheme,
      })}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

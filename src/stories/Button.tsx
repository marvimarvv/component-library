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
  "pointer-cursor bg-gradient-to-br from-skin-primary-100 to-skin-primary-500 rounded-skin font-bold visited:no-underline outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-skin-primary active:scale-[90%] transition-transform duration-75 ease hover:scale-105",
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
        true: "",
      },
      isNeonTheme: {
        true: "",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "small",
        isGradientTheme: true,
        class:
          "bg-gradient-to-br from-skin-primary-100 to-skin-primary-50 px-gradient-primary-button-small py-gradient-primary-button-small",
      },
      {
        intent: "primary",
        size: "medium",
        isGradientTheme: true,
        class:
          "bg-gradient-to-br from-skin-primary-100 to-skin-primary-50 px-gradient-primary-button-medium py-gradient-primary-button-medium",
      },
      {
        intent: "primary",
        size: "large",
        isGradientTheme: true,
        class:
          "bg-gradient-to-br from-skin-primary-100 to-skin-primary-50 px-gradient-primary-button-large py-gradient-primary-button-large",
      },
      {
        intent: "secondary",
        isGradientTheme: true,
        class: "bg-none text-skin-primary-500 border-skin-primary-500 border-2",
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

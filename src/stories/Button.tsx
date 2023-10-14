import React from "react";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  fullwidth?: boolean;
  onClick?: () => void;
}

export const Button = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "text-skin-base border-none"
    : "bg-none text-skin-primary-500 border-skin-primary-500 border-2";
  const fullwidth = props.fullwidth || false;
  return (
    <button
      type="button"
      className={[
        "pointer-cursor bg-gradient-to-br from-skin-primary-100 to-skin-primary-500 rounded-full font-bold visited:no-underline outline-none focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-skin-primary active:scale-[90%] transition-transform duration-75 ease hover:scale-105",
        size === "small" ? "px-space-2xs py-space-3xs text-fluid-xs" : "",
        size === "medium" ? "px-space-xs py-space-3xs text-fluid-s" : "",
        size === "large" ? "px-space-s py-space-2xs text-fluid-m" : "",
        fullwidth ? "w-full" : "",
        mode,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

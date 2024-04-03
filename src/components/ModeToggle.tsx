import { Switch } from "@headlessui/react";
import { cva } from "class-variance-authority";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const switchBgStyles = cva(
  "relative inline-flex h-space-l w-space-2xl shrink-0 cursor-pointer rounded-skin transition-colors duration-200 ease outline-2 outline-slate-500 outline focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75",
  {
    variants: {
      enabled: {
        true: "bg-skin-primary-300",
        false: "bg-skin-primary-900",
      },
      theme: {
        "gradient-theme": "",
        "neon-theme": "",
      },
    },
  }
);

const switchThumbStyles = cva(
  "pointer-events-none inline-block h-full aspect-square transform rounded-skin bg-skin-background shadow-lg ring-0 transition duration-200 ease",
  {
    variants: {
      enabled: {
        true: "translate-x-full",
        false: "translate-x-0",
      },
    },
  }
);

export default function ModeToggle({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const { toggleMode } = useTheme();
  const { theme } = useTheme() as unknown as {
    theme: "gradient-theme" | "neon-theme" | null | undefined;
  };

  return (
    <div className={className}>
      <Switch
        checked={enabled}
        onChange={(checked) => {
          toggleMode();
          setEnabled(checked);
        }}
        className={switchBgStyles({ enabled, theme })}
      >
        <span className="sr-only">Toggle dark and light mode</span>
        <span
          aria-hidden="true"
          className={switchThumbStyles({ enabled, theme })}
        />
      </Switch>
    </div>
  );
}

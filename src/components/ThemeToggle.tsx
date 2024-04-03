import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return (
    <button className="text-skin-background-contrast" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

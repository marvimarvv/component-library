import { useTheme } from "./ThemeProvider";

export default function ModeToggle() {
  const { toggleMode } = useTheme();
  return (
    <button className="text-skin-on-background" onClick={toggleMode}>
      Toggle Mode
    </button>
  );
}

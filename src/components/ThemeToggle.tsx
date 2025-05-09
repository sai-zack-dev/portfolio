import { useTheme } from "../context/ThemeContext";
import {
  NavbarButton
} from "@/components/ui/resizable-navbar";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <NavbarButton
      onClick={() => {
        console.log("Toggle button clicked");
        toggleTheme();
      }}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </NavbarButton>
  );
};

export default ThemeToggle;

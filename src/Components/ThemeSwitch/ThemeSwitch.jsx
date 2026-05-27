"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="mt-1.5"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5"></Sun>
      ) : (
        <Moon className="w-5 h-5"></Moon>
      )}
    </button>
  );
};

export default ThemeSwitch;

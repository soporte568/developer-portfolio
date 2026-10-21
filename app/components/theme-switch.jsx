"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Alternar modo claro u oscuro"
      title="Alternar modo claro u oscuro"
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5eaed] bg-white text-[#243344] transition-colors hover:bg-[#f4f8fa] dark:border-white/15 dark:bg-[#132a43] dark:text-white dark:hover:bg-[#1b3652]"
    >
      <Moon className="dark:hidden" size={17} aria-hidden="true" />
      <Sun className="hidden dark:block" size={17} aria-hidden="true" />
    </button>
  );
}

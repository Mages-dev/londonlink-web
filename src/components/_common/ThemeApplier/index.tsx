"use client";

import { useEffect } from "react";
import { useTheme } from "@/context"

export function ThemeApplier() {
  const { themeName } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeName);
  }, [themeName]);

  return null;
}
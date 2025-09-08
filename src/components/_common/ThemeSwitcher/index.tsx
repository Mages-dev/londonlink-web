"use client";

import { useTheme } from "@/context"
import { ThemeName } from '@/types'
import { themes } from "@/Styles/theme"
import { useLanguage } from "@/context";
import styles from "./ThemeSwitcher.module.css"

export function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={styles.themeSwitcherRow}>
      <span className={styles.label}>{t(`themeswitcher.label`)}</span>
      <div className={styles.themeSwitcherContainer}>
        {Object.keys(themes).map((key) => {
          const themeKey = key as ThemeName;
          const currentTheme = themes[themeKey];
          return (
            <span
              key={key}
              onClick={() => setTheme(themeKey)}
              className={styles.themeSwitcher}
              style={{
                outline: themeName === key ? "2px solid " + currentTheme.colors.accent : "none",
                borderRadius: themeName === key ? "10px" : "0",
                cursor: "pointer",
              }}
            >
              {(currentTheme.name == "Claro") && <span className={styles.tooltip}>☀️</span>}
              {(currentTheme.name == "Escuro") && <span className={styles.tooltip}>🌙</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
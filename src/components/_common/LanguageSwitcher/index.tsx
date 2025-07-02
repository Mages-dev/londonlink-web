"use client";

import React from "react";
import Image from "next/image";
import { useTheme, useLanguage, translations } from "@/context";
import { Language } from '@/types'
import styles from "./LanguageSwitcher.module.css"

const LanguageSwitcher: React.FC = () => {
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className={styles.languageSwitcherContainer}>
      {Object.keys(translations).map((key) => {
        const lang = key as Language;
        return (
          <span
            key={String(key)}
            onClick={() => setLanguage(lang)}
            className={styles.languageSwitcher}
            style={{
              display: "flex",
              flexDirection: "column", // Empilha verticalmente
              gap: "8px",
              alignItems: "flex-end", // Alinha à direita
              border: language === key ? `2px solid ${theme.colors.accent}` : "none",
              borderRadius: language === key ? "999px" : "0",
              cursor: "pointer",
            }}
          >
            {(key === "pt") && (
              <span className={styles.tooltip}>
                <Image
                  src="/img/icons/br.svg"
                  width={25}
                  height={25}
                  alt="Português"
                />
              </span>
            )}
            {(key === "en") && (
              <span className={styles.tooltip}>
                <Image
                  src="/img/icons/uk.svg"
                  width={25}
                  height={25}
                  alt="Português"
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
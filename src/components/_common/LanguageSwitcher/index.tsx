"use client";

import React from "react";
import Image from "next/image";
import { useTheme, useLanguage, translations } from "@/context";
import { Language } from '@/types'
import styles from "./LanguageSwitcher.module.css"

const LanguageSwitcher: React.FC = () => {
  const { theme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t } = useLanguage();
  
  return (
    <div className={styles.languageSwitcherRow}>
      <span className={styles.label}>{t(`languageswitcher.label`)}</span>
      <div className={styles.languageSwitcherContainer}>
        {Object.keys(translations).map((key) => {
          const lang = key as Language;
          return (
            <span
              key={String(key)}
              onClick={() => setLanguage(lang)}
              className={styles.languageSwitcher}
              style={{
                outline: language === key ? `2px solid ${theme.colors.accent}` : "none",
                borderRadius: language === key ? "999px" : "0",
                cursor: "pointer",
              }}
            >
              {key === "pt" && (
                <Image src="/img/icons/br.svg" width={25} height={25} alt="Português" />
              )}
              {key === "en" && (
                <Image src="/img/icons/uk.svg" width={25} height={25} alt="Inglês" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
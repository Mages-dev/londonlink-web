"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, JSX } from 'react';
import { ThemeName, ThemeContextType, Language, Translations } from '@/types';
import { LanguageContextType } from '@/interfaces'
import { themes } from "@/Styles/theme"
import pt from '@/locales/pt.json'
import en from '@/locales/en.json'

export const translations: Record<Language, Translations> = {
  pt: pt as Translations,
  en: en as Translations,
};

const defaultValues = {
  //sections: Object.keys(components),
  sections: ['home', 'sobre', 'livros', 'galeria', 'contato'],
  titles: ['home', 'about', 'books', 'galery', 'contact'],
  defaultTitle: "LondonLink",
  //components,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const Context = createContext(defaultValues);
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function parseHTMLWithJSX(
  text: string,
  parentStyles: Record<string, string> = {}
): React.ReactNode[] {
  const parts = text.split(/({{bold}}|{{\/bold}}|<br \/>)/g);

  const result: React.ReactNode[] = [];
  let current: React.ReactNode[] = [];
  let inBold = false;

  parts.forEach((part, index) => {
    if (part === "{{bold}}") {
      inBold = true;
      current = [];
    } else if (part === "{{/bold}}") {
      inBold = false;
      result.push(
        <span key={`bold-${index}`} className={parentStyles.bold}>
          {current}
        </span>
      );
      current = [];
    } else if (part === "<br />") {
      const br = <br key={`br-${index}`} />;
      if (inBold) {
        current.push(br);
      } else {
        result.push(br);
      }
    } else {
      if (inBold) {
        current.push(part);
      } else {
        result.push(part);
      }
    }
  });

  return result;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    // Verificar se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeName | null;
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }

    // Verificar se há um idioma salvo no localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const setTheme = (name: ThemeName) => {
    setThemeName(name);
    localStorage.setItem("theme", name);
  };

  const setLanguageAndPersist = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  }

  const t = (
    key: string,
    parentStyles: Record<string, string> = {}
  ): string | JSX.Element => {
    const text = translations[language][key];
    if (!text) return key;
  
    if (text.includes("{{") || text.includes("<br")) {
      return <>{parseHTMLWithJSX(text, parentStyles)}</>;
    }
  
    return text;
  };
  
  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage: setLanguageAndPersist, t}}>
        <Context.Provider value={defaultValues}>
          {children}
        </Context.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export const useSections = () => useContext(Context);
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
//import { SectionComponents, ThemeName, ThemeContextType } from '@/types';
import { ThemeName, ThemeContextType } from '@/types';
import { themes } from "@/Styles/theme"
/*import Home from '@/Components/Home';
import Sobre from '@/Components/Sobre';
import Galeria from '@/Components/Galeria';
import Livros from '@/Components/Livros';
import Contato from '@/Components/Contato';*/

/*const components: SectionComponents = {
  home: Home,
  sobre: Sobre,
  galeria: Galeria,
  livros: Livros,
  contato: Contato
}*/

const defaultValues = {
  //sections: Object.keys(components),
  sections: ['home', 'sobre', 'livros', 'galeria', 'contato'],
  titles: ['Home', 'Sobre', 'Livros', 'Galeria', 'Contato'],
  defaultTitle: "LondonLink",
  //components,
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const Context = createContext(defaultValues);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>("light");

  useEffect(() => {
    // Verificar se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") as ThemeName | null;
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme);
    }
  }, []);

  const setTheme = (name: ThemeName) => {
    setThemeName(name);
    localStorage.setItem("theme", name);
  };

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
      <Context.Provider value={defaultValues}>
        {children}
      </Context.Provider>
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

export const useSections = () => useContext(Context);
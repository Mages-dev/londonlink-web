import React, { createContext, useContext } from 'react';
import { SectionComponents } from '@/types';
import Home from '@/components/Home';

const components: SectionComponents = {
  home: Home
}

const defaultValues = {
  sections: Object.keys(components),
  titles: ['Home', 'Sobre', 'Livros', 'Galeria', 'Contato'],
  defaultTitle: "LondonLink",
  components,
};

const Context = createContext(defaultValues);

export const useSections = () => useContext(Context);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Context.Provider value={defaultValues}>
      {children}
    </Context.Provider>
  );
};
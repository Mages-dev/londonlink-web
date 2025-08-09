"use client";
import React, { createContext, useContext, useState } from "react";

interface ForceSectionContextType {
  forceSection: string | null;
  setForceSection: React.Dispatch<React.SetStateAction<string | null>>;
}

const ForceSectionContext = createContext<ForceSectionContextType | undefined>(undefined);

export const ForceSectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [forceSection, setForceSection] = useState<string | null>(null);

  return (
    <ForceSectionContext.Provider value={{ forceSection, setForceSection }}>
      {children}
    </ForceSectionContext.Provider>
  );
};

export function useForceSection() {
  const context = useContext(ForceSectionContext);
  if (!context) throw new Error("useForceSection must be used within a ForceSectionProvider");
  return context;
}

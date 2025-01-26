"use client";
import React, { createContext, useContext, useState } from "react";

interface LevelContextType {
  level: string | null;
  setLevel: (level: string) => void;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

export const LevelProvider = ({ children }: { children: React.ReactNode }) => {
  const [level, setLevel] = useState<string | null>(null);

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
};

export const useLevel = () => {
  const context = useContext(LevelContext);
  if (!context) {
    throw new Error("useLevel must be used within a LevelProvider");
  }
  return context;
};
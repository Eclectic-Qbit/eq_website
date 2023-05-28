"use client";

import LanguageContext from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const readLang = localStorage.getItem("lang");
    readLang && readLang !== lang && setLang(readLang);
  }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

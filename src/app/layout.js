"use client";

import Menu from "@/components/global/Menu";
import "./globals.css";
import LoadingAnimation from "@/components/animations/LoadingAnimation";
import { useEffect, useState } from "react";
import settings from "@/frontendSettings";
import LanguageContext from "@/contexts/LanguageContext";

export const metadata = {
  title: "Barrio Buidlers",
  description: "Interdipendence is the new indipendence",
};

export default function RootLayout({ children }) {
  const [lang, setLang] = useState(settings.defaultLang);
  useEffect(() => {
    const userLang = localStorage.getItem("lang");
    lang && lang !== userLang && setLang(userLang);
  }, [lang]);
  return (
    <html lang={lang} className="min-h-screen min-w-screen bg-black text-white">
      <body>
        <LanguageContext.Provider value={{ lang, setLang }}>
          <LoadingAnimation />
          <Menu />
          <div className="mt-[10vh]">{children}</div>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}

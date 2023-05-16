"use client";

import { translateText } from "@/commonFrontend";
import LanguageContext from "@/contexts/LanguageContext";
import { useContext } from "react";

export function P1({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1.25rem] xl:text-[1.75rem] md:text-[1.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </p>
  );
}

export function P2({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <p
      className={`${props} text-[1rem] xl:text-[1.5rem] md:text-[1.25rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </p>
  );
}

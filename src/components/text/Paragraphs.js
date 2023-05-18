"use client";

import { translateText } from "@/commonFrontend";
import LanguageContext from "@/contexts/LanguageContext";
import { useContext } from "react";

export function P1({ style, className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <p
      style={style}
      className={`${props} text-[1.75rem] xl:text-[2.25rem] md:text-[2rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </p>
  );
}

export function P2({ style, className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <p
      style={style}
      className={`${props} text-[1.25rem] xl:text-[1.5rem] md:text-[1.375rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </p>
  );
}

export function P3({ style, className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <p
      style={style}
      className={`${props} text-[1.125rem] xl:text-[1.375rem] md:text-[1.25rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </p>
  );
}

export function P4({ style, className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <p
      style={style}
      className={`${props} text-[1rem] xl:text-[1.25rem] md:text-[1.125rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </p>
  );
}

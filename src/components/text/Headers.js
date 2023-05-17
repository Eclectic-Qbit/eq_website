"use client";

import { translateText } from "@/commonFrontend";
import LanguageContext from "@/contexts/LanguageContext";
import { useContext } from "react";
export function H1({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[6.5rem] xl:text-[13.5rem] md:text-[8.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}
export function H2({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[5rem] xl:text-[10.5rem] md:text-[6.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}
export function H3({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[4rem] xl:text-[8rem] md:text-[5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}
export function H4({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[3.5rem] xl:text-[6rem] md:text-[4rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}
export function H5({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[3rem] xl:text-[5.5rem] md:text-[3.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}
export function H6({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[2.75rem] xl:text-[4.5rem] md:text-[3rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}
export function H7({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[2.5rem] xl:text-[4.25rem] md:text-[2.75rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}
export function H8({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[2.25rem] xl:text-[4rem] md:text-[2.5rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}
export function H9({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[2rem] xl:text-[3.75rem] md:text-[2.25rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}

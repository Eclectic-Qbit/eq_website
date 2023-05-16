"use client";

import { translateText } from "@/commonFrontend";
import LanguageContext from "@/contexts/LanguageContext";
import { useContext } from "react";
export function H1({ className, children, translationPath }) {
  const { lang, setLang } = useContext(LanguageContext);
  const props = className ? className : "";
  return (
    <h1
      className={`${props} text-[4rem] 2xl:text-[10rem] xl:text-[8rem] lg:text-[6rem] sm:text-[4rem] xs:text-[4rem] leading-none transition-all duration-300 ease-in`}
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
      className={`${props} text-[4rem] 2xl:text-[9rem] xl:text-[7rem] lg:text-[5rem] sm:text-[4rem] xs:text-[4rem] leading-none transition-all duration-300 ease-in`}
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
      className={`${props} text-[4rem] 2xl:text-[8rem] xl:text-[6rem] lg:text-[4rem] sm:text-[4rem] xs:text-[4rem] leading-none transition-all duration-300 ease-in`}
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
      className={`${props} text-[3rem] 2xl:text-[7rem] xl:text-[5rem] lg:text-[3rem] sm:text-[3rem] xs:text-[3rem] leading-none transition-all duration-300 ease-in`}
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
      className={`${props} text-[3rem] 2xl:text-[6rem] xl:text-[4rem] lg:text-[2rem] sm:text-[3rem] xs:text-[3rem] leading-none transition-all duration-300 ease-in`}
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
      className={`${props} text-[3rem] 2xl:text-[5rem] xl:text-[3rem] lg:text-[3rem] sm:text-[3rem] xs:text-[3rem] leading-none transition-all duration-300 ease-in`}
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
      className={`${props} text-[2rem] 2xl:text-[4rem] xl:text-[2rem] lg:text-[2rem] sm:text-[2rem] xs:text-[2rem] leading-none transition-all duration-300 ease-in`}
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
      className={`${props} text-[2rem] 2xl:text-[3rem] xl:text-[3rem] lg:text-[2em] sm:text-[2rem] xs:text-[2rem] leading-none transition-all duration-300 ease-in`}
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
      className={`${props} text-[1rem] 2xl:text-[2rem] xl:text-[1.75rem] lg:text-[1.5rem] sm:text-[1.25rem] xs:text-[1rem] leading-none transition-all duration-300 ease-in`}
    >
      {children ? children : translateText(translationPath, lang)}
    </h1>
  );
}

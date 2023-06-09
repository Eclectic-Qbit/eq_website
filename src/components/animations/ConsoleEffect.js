"use client";

import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { P2, P3, P4 } from "../text/Paragraphs";
import settings from "@/frontendSettings";
import LanguageContext from "@/contexts/LanguageContext";
import { isDesktop, translateText } from "@/commonFrontend";
import ScrollContext from "@/contexts/ScrollContext";

export default function ConsoleEffect({
  onHover,
  forceActive,
  delta,
  style,
  className,
  content,
  additionalChar,
  placeholderChar,
  spanStyling,
  children,
}) {
  /* Fix the ghost cancellation - first noticed after lang translation */
  const { lang, setLang } = useContext(LanguageContext);
  const [parsedChar, setParsedChar] = useState(
    additionalChar ? additionalChar : ""
  );
  const parsedPlaceholderChar = placeholderChar ? placeholderChar : "";
  const [value, setValue] = useState(parsedPlaceholderChar);
  const [active, setActive] = useState(forceActive);
  const ref = useRef(null);
  const lastTimeout = useRef(null);
  const parsedDelta = useRef(delta ? delta : 20);
  const { scroll } = useContext(ScrollContext);
  const parsedContent = useMemo(() => {
    clearTimeout(lastTimeout.current);
    setValue(parsedPlaceholderChar);
    if (content.type === "raw") {
      return content.content;
    }
    let translation = translateText(content.content, lang);
    translation =
      typeof translation === "string"
        ? translation
        : translation.props.children;
    if (typeof translation !== "string") {
      translation = translation.filter((el) => typeof el === "string");
      translation = translation.join("\n");
    }
    return translation;
  }, [lang, parsedPlaceholderChar, content.content, content.type]);
  useEffect(() => {
    if (window.innerWidth < settings.mobileView) {
      setParsedChar("");
    }
  }, []);
  useEffect(() => {
    setActive(forceActive);
  }, [forceActive]);
  useEffect(() => {
    if (window.innerWidth < settings.mobileView) {
      if (
        ref.current.getBoundingClientRect().y <
        window.innerHeight - window.innerHeight * 0.1
      ) {
        setActive(forceActive !== undefined ? forceActive : true);
      }
    }
  }, [forceActive, scroll]);
  useEffect(() => {
    if (active) {
      if (
        value.length <
        parsedContent.length + parsedChar.length + parsedPlaceholderChar.length
      ) {
        // Remove spacing char if exists
        const parsedValue = parsedChar
          ? value.replace(
              parsedChar,
              parsedContent.charAt(
                value.indexOf(additionalChar) - parsedPlaceholderChar.length
              )
            )
          : value;
        // Add a new char
        const newChar = parsedContent.charAt(
          value.length - parsedPlaceholderChar.length
        );
        const newStr = parsedValue + newChar + parsedChar;
        lastTimeout.current && clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        lastTimeout.current = setTimeout(() => {
          setValue(newStr);
        }, parsedDelta.current);
      } else if (parsedChar) {
        const newStr =
          value.charAt(value.length - 1) === parsedChar
            ? value.slice(0, -1) + "|"
            : value.slice(0, -1) + parsedChar;
        lastTimeout.current && clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        lastTimeout.current = setTimeout(() => {
          setValue(newStr);
        }, 500);
      }
    } else {
      if (value.length > parsedPlaceholderChar.length) {
        const newStr = value.substring(0, value.length - 1);
        lastTimeout.current && clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        lastTimeout.current = setTimeout(() => {
          setValue(newStr);
        }, parsedDelta.current / 2);
      }
    }
  }, [
    value,
    active,
    parsedContent,
    parsedChar,
    additionalChar,
    parsedPlaceholderChar.length,
  ]);
  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseEnter={() => onHover && isDesktop(innerWidth) && setActive(true)}
      onMouseLeave={() =>
        onHover && isDesktop(innerWidth) && !forceActive && setActive(false)
      }
    >
      <div>{children}</div>
      <div className="relative">
        <P4 className="invisible relative" style={style}>
          {parsedContent.split("\n").map((el, i) => {
            return (
              <span key={i} style={spanStyling}>
                {parsedPlaceholderChar + el}
                <br />
              </span>
            );
          })}
        </P4>
        <P4 className="absolute top-0 left-0" style={style}>
          {value.split("\n").map((el, i) => {
            return (
              <span key={i} style={spanStyling}>
                {el}
                <br />
              </span>
            );
          })}
        </P4>
      </div>
    </div>
  );
}

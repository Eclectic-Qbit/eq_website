"use client";

import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { P2, P3, P4 } from "../text/Paragraphs";
import settings from "@/frontendSettings";
import LanguageContext from "@/contexts/LanguageContext";
import { translateText } from "@/commonFrontend";

export default function ConsoleEffect({
  delta,
  style,
  className,
  content,
  active,
  additionalChar,
  placeholderChar,
}) {
  /* Fix the ghost cancellation - first noticed after lang translation */
  const { lang, setLang } = useContext(LanguageContext);
  const [parsedChar, setParsedChar] = useState(
    additionalChar ? additionalChar : ""
  );
  const parsedPlaceholderChar = placeholderChar ? placeholderChar : "";
  const [value, setValue] = useState(parsedPlaceholderChar);
  const lastTimeout = useRef(null);
  const parsedDelta = useRef(delta ? delta : 20);
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
  }, [content, lang, parsedPlaceholderChar]);
  useEffect(() => {
    if (window.innerWidth < settings.mobileView) {
      setParsedChar("");
    }
  }, []);
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
        lastTimeout.current = setTimeout(
          () => setValue(newStr),
          parsedDelta.current
        );
      } else if (parsedChar) {
        const newStr =
          value.charAt(value.length - 1) === parsedChar
            ? value.slice(0, -1) + "|"
            : value.slice(0, -1) + parsedChar;
        lastTimeout.current && clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        lastTimeout.current = setTimeout(() => setValue(newStr), 500);
      }
    } else {
      if (value.length > parsedPlaceholderChar.length) {
        const newStr = value.substring(0, value.length - 1);
        lastTimeout.current && clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        lastTimeout.current = setTimeout(
          () => setValue(newStr),
          parsedDelta.current / 2
        );
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
    <div className={`relative ${className}`}>
      <P4 className="relative invisible" style={style}>
        {parsedContent}
      </P4>
      <P4 className="absolute top-0 left-0" style={style}>
        {value.split("\n").map((el, i) => {
          return (
            <span key={i}>
              {el}
              <br />
            </span>
          );
        })}
      </P4>
    </div>
  );
}

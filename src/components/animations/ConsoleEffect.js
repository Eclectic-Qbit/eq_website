"use client";

import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { P2, P3, P4 } from "../text/Paragraphs";
import settings from "@/frontendSettings";
import LanguageContext from "@/contexts/LanguageContext";
import { translateText } from "@/commonFrontend";

export default function ConsoleEffect({
  content,
  active,
  additionalChar,
  placeholderChar,
}) {
  /* Fix the ghost cancellation - first noticed after lang translation */
  const { lang, setLang } = useContext(LanguageContext);
  const text = translateText(content.content, lang);
  const parsedContent = useMemo(() => {
    return content.type === "raw"
      ? content.content
      : typeof text === "string"
      ? text
      : text.props.children;
  }, [content.content, content.type, text]);
  const [parsedChar, setParsedChar] = useState(additionalChar);
  const parsedPlaceholderChar = placeholderChar ? placeholderChar : "";
  const [value, setValue] = useState(parsedPlaceholderChar);
  const lastTimeout = useRef(null);
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
        const parsedValue = parsedChar
          ? value.replace(
              parsedChar,
              parsedContent.charAt(
                value.indexOf(additionalChar) - parsedPlaceholderChar.length
              )
            )
          : value;
        const newStr =
          parsedValue +
          parsedContent.charAt(value.length - parsedPlaceholderChar.length) +
          parsedChar;
        lastTimeout.current && clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        lastTimeout.current = setTimeout(() => setValue(newStr), 25);
      } else if (parsedChar) {
        const newStr =
          value.charAt(value.length - 1) === parsedChar
            ? value.slice(0, -1) + "|"
            : value.slice(0, -1) + parsedChar;
        lastTimeout.current && clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        setTimeout(() => setValue(newStr), 500);
      }
    } else {
      if (value.length > parsedPlaceholderChar.length) {
        const newStr = value.substring(0, value.length - 1);
        lastTimeout.current && clearTimeout(lastTimeout.current);
        lastTimeout.current = null;
        lastTimeout.current = setTimeout(() => setValue(newStr), 10);
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
  return value.length > 0 ? <P4>{value}</P4> : <br />;
}

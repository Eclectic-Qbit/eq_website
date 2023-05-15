"use client";

import { useEffect, useState } from "react";
import { P2 } from "../text/Paragraphs";
import settings from "@/frontendSettings";

export default function ConsoleEffect({
  content,
  active,
  additionalChar,
  placeholderChar,
}) {
  const [parsedChar, setParsedChar] = useState(additionalChar);
  const parsedPlaceholderChar = placeholderChar ? placeholderChar : "";
  const [value, setValue] = useState(parsedPlaceholderChar);
  useEffect(() => {
    if (window.innerWidth < settings.mobileView) {
      setParsedChar("");
    }
  }, []);
  useEffect(() => {
    if (active) {
      if (
        value.length <
        content.length + parsedChar.length + parsedPlaceholderChar.length
      ) {
        const parsedValue = parsedChar
          ? value.replace(
              parsedChar,
              content.charAt(
                value.indexOf(additionalChar) - parsedPlaceholderChar.length
              )
            )
          : value;
        const newStr =
          parsedValue +
          content.charAt(value.length - parsedPlaceholderChar.length) +
          parsedChar;
        setTimeout(() => setValue(newStr), 25);
      } else if (parsedChar) {
        const newStr =
          value.charAt(value.length - 1) === parsedChar
            ? value.slice(0, -1) + " "
            : value.slice(0, -1) + parsedChar;
        setTimeout(() => setValue(newStr), 500);
      }
    } else {
      if (value.length > parsedPlaceholderChar.length) {
        const newStr = value.substring(0, value.length - 1);
        setTimeout(() => setValue(newStr), 10);
      }
    }
  }, [
    value,
    active,
    content,
    parsedChar,
    additionalChar,
    parsedPlaceholderChar.length,
  ]);
  return value.length > 0 ? <P2>{value}</P2> : <br />;
}

"use client";

import { useEffect, useState } from "react";

export default function ConsoleEffect({ content, active }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (active) {
      if (value.length < content.length) {
        const newStr = value + content.charAt(value.length);
        setTimeout(() => setValue(newStr), 10);
      }
    } else {
      if (value.length > 0) {
        const newStr = value.substring(0, value.length - 1);
        setTimeout(() => setValue(newStr), 7);
      }
    }
  }, [value, active, content]);
  return value.length > 0 ? value : "";
}

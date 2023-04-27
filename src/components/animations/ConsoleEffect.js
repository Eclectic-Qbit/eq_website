"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function ConsoleEffect({ content }) {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (value.length < content.length)
      setTimeout(() => setValue(value + content.charAt(value.length)), 50);
  }, [value]);
  return value;
}

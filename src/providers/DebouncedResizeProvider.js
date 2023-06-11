"use client";

import DebouncedResizeContext from "@/contexts/DebouncedResizeContext";
import { useCallback, useEffect, useRef, useState } from "react";

export default function DebouncedResizeProvider({ children }) {
  const lastTimeout = useRef(null);
  const [debounceDelay, setDebounceDelay] = useState(100);
  const [winSize, setWinSize] = useState("");
  const handleResize = useCallback(() => {
    clearTimeout(lastTimeout.current);
    lastTimeout.current = setTimeout(() => {
      setWinSize({ innerW: window.innerWidth, innerH: window.innerHeight });
    }, debounceDelay);
  }, [debounceDelay]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return (
    <DebouncedResizeContext.Provider
      value={{ winSize, setWinSize, debounceDelay, setDebounceDelay }}
    >
      {children}
    </DebouncedResizeContext.Provider>
  );
}

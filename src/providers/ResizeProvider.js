"use client";

import ResizeContext from "@/contexts/ResizeContext";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ResizeProvider({ children }) {
  const lastTimeout = useRef(null);
  const [winSize, setWinSize] = useState("");
  const handleResize = useCallback(() => {
    clearTimeout(lastTimeout.current);
    lastTimeout.current = setTimeout(() => {
      setWinSize({ innerW: window.innerWidth, innerH: window.innerHeight });
    }, 10);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  return (
    <ResizeContext.Provider value={{ winSize, setWinSize }}>
      {children}
    </ResizeContext.Provider>
  );
}

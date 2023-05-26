"use client";

import ScrollContext from "@/contexts/ScrollContext";
import { useEffect, useState } from "react";

export default function ScrollProvider({ children }) {
  const [scroll, setScroll] = useState();
  function handleScroll() {
    setScroll(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <ScrollContext.Provider value={{ scroll }}>
      {children}
    </ScrollContext.Provider>
  );
}

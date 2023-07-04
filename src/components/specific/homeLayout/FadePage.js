"use client";

import CurrentPageContext from "@/contexts/CurrentPageContext";
import { useContext, useEffect, useState } from "react";

export default function FadePage({ children }) {
  const { page } = useContext(CurrentPageContext);
  const [style, setStyle] = useState({});
  useEffect(() => {
    setStyle({ opacity: 1 });
    setTimeout(() => {
      setStyle({ opacity: 0 });
      setTimeout(() => {
        setStyle({ display: "none" });
      }, 350);
    }, 0);
  }, [page]);
  return (
    <>
      {children}
      <div
        className="fixed z-30 top-0 left-0 w-full h-full bg-black opacity-1 transition-all duration-300 ease-in"
        style={style}
      />
    </>
  );
}

"use client";

import ScrollContext from "@/contexts/ScrollContext";
import { useContext, useEffect, useRef } from "react";

export default function StickySection({
  className,
  children,
  changeVisibility,
  texts,
}) {
  const ref = useRef(null);
  const wasVisible = useRef(false);
  const { scroll } = useContext(ScrollContext);
  useEffect(() => {
    if (ref.current.getBoundingClientRect().y < window.innerHeight) {
      if (!wasVisible.current) {
        changeVisibility(texts.visible);
        wasVisible.current = true;
      }
    } else if (wasVisible.current) {
      changeVisibility(texts.invisible);
      wasVisible.current = false;
    }
  }, [changeVisibility, scroll, texts.invisible, texts.visible]);
  return (
    <div
      ref={ref}
      className={`${
        className ? className : ""
      } sticky top-0 w-full h-full min-h-screen py-20`}
    >
      {children}
    </div>
  );
}

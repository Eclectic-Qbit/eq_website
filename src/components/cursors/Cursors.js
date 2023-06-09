"use client";

import MouseContext from "@/contexts/MouseContext";
import { useContext, useEffect, useRef, useState } from "react";
import { P2, P4 } from "../text/Paragraphs";
import settings from "@/frontendSettings";

export function HomepageCursor() {
  const ref = useRef(null);
  const [side, setSide] = useState(0);
  const [resized, setResized] = useState(false);
  const { position } = useContext(MouseContext);
  useEffect(() => {
    setSide(ref.current.offsetWidth);
    if (window.innerWidth > settings.mobileView) {
      setResized(true);
    }
  }, []);
  return (
    <div
      className={`fixed ${!resized && "invisible"} sm:visible ${
        position.clientY !== 0 || position.clientX !== 0
          ? "opacity-1"
          : "opacity-0"
      } z-50 transition-none pointer-events-none transition-all duration-150 ease-in`}
      ref={ref}
      style={{
        top: position.clientY - side / 2,
        left: position.clientX - side / 2,
      }}
    >
      <P4>👾</P4>
    </div>
  );
}

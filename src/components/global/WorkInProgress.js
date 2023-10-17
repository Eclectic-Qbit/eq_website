"use client";

import { isDesktop } from "@/commonFrontend";
import LoadingAnimation from "@/components/animations/LoadingAnimation";
import { H3, H4 } from "@/components/text/Headers";
import { P1, P2 } from "@/components/text/Paragraphs";
import { useCallback, useEffect, useState } from "react";

export default function WorkInProgres() {
  const [desktop, setDesktop] = useState(true);
  const handleResize = useCallback(() => {
    const bool = isDesktop(window.innerWidth);
    if (bool !== desktop) {
      setDesktop(bool);
    }
  }, [desktop]);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return (
    <LoadingAnimation
      elements={
        desktop
          ? [
              <H4 key={0}>Work</H4>,
              <H3 key={1}>In</H3>,
              <H4 key={2}>Progress</H4>,
            ]
          : [
              <P2 key={0}>Work</P2>,
              <P1 key={1}>In</P1>,
              <P2 key={2}>Progress</P2>,
            ]
      }
      coeffs={[1, 1.5, 2.25]}
      delay={1500}
      className="z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-center"
      stopFade
    />
  );
}

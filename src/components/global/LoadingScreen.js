"use client";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import LoadingAnimation from "../animations/LoadingAnimation";
import { H3, H4 } from "../text/Headers";
import CurrentPageContext from "@/contexts/CurrentPageContext";
import { isDesktop } from "@/commonFrontend";
import { P1, P2, P3, P4 } from "../text/Paragraphs";

export default function LoadingScreen() {
  // On page change
  const { page } = useContext(CurrentPageContext);
  // Other vars
  const ANIM_DURATION = 900;
  const [show, setShow] = useState(true);
  const [desktop, setDesktop] = useState(true);
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);
  const handleResize = useCallback(() => {
    const bool = isDesktop(window.innerWidth);
    if (bool !== desktop) {
      setDesktop(bool);
    }
  }, [desktop]);
  function onFade() {
    sessionStorage.setItem("loaded", true);
  }
  useEffect(() => {
    const cookie = JSON.parse(sessionStorage.getItem("loaded"));
    const bool = !cookie;
    setShow(bool);
  }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  useEffect(() => {
    if (!alreadyAnimated) {
      setTimeout(() => {
        setAlreadyAnimated(true);
      }, ANIM_DURATION);
    }
  }, [alreadyAnimated]);
  useEffect(() => {
    setAlreadyAnimated(false);
  }, [page]);
  return (
    <div className="relative max-w-screen max-h-screen w-full h-full">
      <div className="text-center w-full h-full">
        {show ? (
          <LoadingAnimation
            elements={
              desktop
                ? [
                    <H4 key={0}>Interdependence</H4>,
                    <H3 key={1}>Is the new</H3>,
                    <H4 key={2}>Independence</H4>,
                  ]
                : [
                    <P2 key={0}>Interdependence</P2>,
                    <P1 key={1}>Is the new</P1>,
                    <P2 key={2}>Independence</P2>,
                  ]
            }
            coeffs={[1, 1.5, 2.25]}
            delay={3000}
            className="z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white"
            onFade={onFade}
            fadeDuration={750}
          />
        ) : (
          !alreadyAnimated && (
            <div
              className={`z-30 fixed top-0 left-0 w-full h-full bg-black animate-fade-out`}
            />
          )
        )}
      </div>
    </div>
  );
}

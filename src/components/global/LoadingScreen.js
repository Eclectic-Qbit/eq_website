"use client";

import { useContext, useEffect, useRef, useState } from "react";
import LoadingAnimation from "../animations/LoadingAnimation";
import { H3, H4 } from "../text/Headers";
import { usePathname, useSearchParams } from "next/navigation";
import CurrentPageContext from "@/contexts/CurrentPageContext";

export default function LoadingScreen() {
  // On page change
  const { page } = useContext(CurrentPageContext);
  // Other vars
  const ANIM_DURATION = 900;
  const [show, setShow] = useState(true);
  const [alreadyAnimated, setAlreadyAnimated] = useState(false);
  const alreadyLoaded = useRef(false);
  function onFade() {
    sessionStorage.setItem("loaded", true);
  }
  useEffect(() => {
    const cookie = JSON.parse(sessionStorage.getItem("loaded"));
    const bool = !alreadyLoaded.current && !cookie;
    setShow(bool);
    alreadyLoaded.current = true;
  }, []);
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
    <div>
      {show ? (
        <LoadingAnimation
          elements={[
            <H4 key={0}>Interdependence</H4>,
            <H3 key={1}>Is the new</H3>,
            <H4 key={2}>Independence</H4>,
          ]}
          coeffs={[1, 1.5, 2.25]}
          delay={1000}
          className="z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white"
          onFade={onFade}
        />
      ) : (
        !alreadyAnimated && (
          <div
            className={`z-30 fixed top-0 left-0 w-full h-full bg-black animate-fade-out`}
          />
        )
      )}
    </div>
  );
}

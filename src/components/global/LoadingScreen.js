"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "../animations/LoadingAnimation";
import { H3, H4 } from "../text/Headers";

export default function LoadingScreen() {
  const [forceFade, setForceFade] = useState(false);
  function onFade() {
    sessionStorage.setItem("loaded", true);
  }
  useEffect(() => {
    const cookie = JSON.parse(sessionStorage.getItem("loaded"));
    setForceFade(cookie);
  }, []);
  return (
    <LoadingAnimation
      elements={[
        <H4>Interdependence</H4>,
        <H3>Is the new</H3>,
        <H4>Independence</H4>,
      ]}
      coeffs={[1, 1.5, 2.25]}
      delay={2000}
      className="z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center transition-all duration-1000 ease-in text-black sm:text-white"
      forceFade={forceFade}
      onFade={onFade}
    />
  );
}

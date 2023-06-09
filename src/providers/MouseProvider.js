"use client";

import MouseContext from "@/contexts/MouseContext";
import { useEffect, useRef, useState } from "react";

export default function MouseProvider({ children }) {
  const [position, setPosition] = useState({ clientX: 0, clientY: 0 });
  const isThrottled = useRef(false);
  const SAMPLING_DELTA = 15;
  function handleMouseMove(e) {
    setPosition({ clientX: e.clientX, clientY: e.clientY });
  }
  function throttle(fn, delay) {
    let lastArgs;
    let timeoutId;
    return function (...args) {
      if (isThrottled.current) {
        lastArgs = arguments;
        return;
      }
      fn(...args);
      isThrottled.current = true;
      timeoutId = setTimeout(() => {
        isThrottled.current = false;
        if (lastArgs) {
          fn.apply(this, lastArgs);
          lastArgs = null;
          clearTimeout(timeoutId);
          timeoutId = null;
        }
      }, delay);
    };
  }
  useEffect(() => {
    document.addEventListener(
      "mousemove",
      throttle(handleMouseMove, SAMPLING_DELTA)
    );
    return () =>
      document.removeEventListener(
        "mousemove",
        throttle(handleMouseMove, SAMPLING_DELTA)
      );
  }, []);
  return (
    <MouseContext.Provider
      value={{ position, setPosition, samplingDelta: SAMPLING_DELTA }}
    >
      {children}
    </MouseContext.Provider>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import { H2, H3, H4, H5, H6 } from "../text/Headers";

export default function LoadingAnimation() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [first, setFirst] = useState("-translate-x-full -translate-y-full");
  const [second, setSecond] = useState("-translate-x-full translate-y-0");
  const [third, setThird] = useState("-translate-x-full translate-y-full");
  const [hide, setHide] = useState({
    temp: false,
    perma: false,
  });
  const handleMouse = useCallback((e) => {
    setMouse({
      x: -(document.body.offsetWidth / 2 - e.clientX) * 0.25,
      y: -(window.screen.height / 2 - e.clientY) * 0.25,
    });
  }, []);
  function handleScroll() {
    setHide({ temp: true, perma: false });
    setTimeout(() => {
      setHide({ temp: true, perma: true });
      sessionStorage.setItem("loaded", true);
    }, [1000]);
  }
  useEffect(() => {
    const loaded = sessionStorage.getItem("loaded");
    if (loaded) {
      handleScroll();
    } else {
      document.addEventListener("mousemove", handleMouse);
      document.addEventListener("scroll", handleScroll);
      setTimeout(() => {
        setFirst("translate-x-0 -translate-y-0");
      }, 0);
      setTimeout(() => {
        setSecond("translate-x-0 -translate-y-0");
      }, 500);
      setTimeout(() => {
        setThird("translate-x-0 -translate-y-0");
      }, 1000);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouse);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouse]);
  return (
    <>
      {!hide.perma && (
        <div
          onClick={handleScroll}
          className={`${
            hide.temp ? "opacity-0" : "opacity-1"
          } z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center transition-all duration-1000 ease-in`}
        >
          <div className="flex flex-col gap-12 sm:gap-0 w-full">
            <div
              style={{
                transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)`,
              }}
            >
              <H4
                className={`relative ${first} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold -rotate-[69deg] sm:rotate-0`}
              >
                Interdependence
              </H4>
            </div>
            <div
              style={{
                transform: `translate3d(${mouse.x * 1.4}px, ${
                  mouse.y * 1.4
                }px, 0)`,
              }}
            >
              <H3
                className={`relative ${second} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold -rotate-[69deg] sm:rotate-0`}
              >
                is the new
              </H3>
            </div>
            <div
              style={{
                transform: `translate3d(${mouse.x * 1.8}px, ${
                  mouse.y * 1.8
                }px, 0)`,
              }}
            >
              <H4
                className={`relative ${third} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold -rotate-[69deg] sm:rotate-0`}
              >
                independence
              </H4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

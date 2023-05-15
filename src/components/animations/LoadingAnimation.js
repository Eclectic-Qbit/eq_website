"use client";

import { useCallback, useEffect, useState } from "react";
import { H1, H2, H3, H4, H5, H6 } from "../text/Headers";
import frontendSettings from "@/frontendSettings";

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
  const handleResize = useCallback(() => {
    if (window.innerWidth <= frontendSettings.mobileView) {
      handleScroll();
    }
  }, []);
  useEffect(() => {
    const loaded = sessionStorage.getItem("loaded");
    if (loaded) {
      handleScroll();
    } else {
      document.addEventListener("mousemove", handleMouse);
      document.addEventListener("scroll", handleScroll);
      document.addEventListener("resize", handleResize);
      handleResize();
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
      document.removeEventListener("resize", handleResize);
    };
  }, [handleMouse, handleResize]);
  return (
    <>
      {!hide.perma && (
        <div
          onClick={handleScroll}
          className={`${
            hide.temp ? "opacity-0" : "opacity-1"
          } z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center transition-all duration-1000 ease-in cursor-pointer text-black sm:text-white`}
        >
          <div className="flex flex-col gap-16 sm:gap-0 w-full">
            <div
              style={{
                transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)`,
              }}
            >
              <H2
                className={`relative ${first} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold`}
              >
                Interdependence
              </H2>
            </div>
            <div
              style={{
                transform: `translate3d(${mouse.x * 1.2}px, ${
                  mouse.y * 1.2
                }px, 0)`,
              }}
            >
              <H3
                className={`relative ${second} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold`}
              >
                is the new
              </H3>
            </div>
            <div
              style={{
                transform: `translate3d(${mouse.x * 1.4}px, ${
                  mouse.y * 1.4
                }px, 0)`,
              }}
            >
              <H2
                className={`relative ${third} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold`}
              >
                independence
              </H2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

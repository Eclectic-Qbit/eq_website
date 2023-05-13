"use client";

import { useCallback, useEffect, useState } from "react";

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
      localStorage.setItem("loaded", true);
    }, [1000]);
  }
  useEffect(() => {
    const loaded = localStorage.getItem("loaded");
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
          <div className="w-full">
            <div
              style={{
                transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)`,
              }}
            >
              <h1
                className={`relative ${first} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold`}
              >
                Interdependence
              </h1>
            </div>
            <div
              style={{
                transform: `translate3d(${mouse.x * 1.4}px, ${
                  mouse.y * 1.4
                }px, 0)`,
              }}
            >
              <h1
                className={`relative ${second} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold`}
              >
                is the new
              </h1>
            </div>
            <div
              style={{
                transform: `translate3d(${mouse.x * 1.8}px, ${
                  mouse.y * 1.8
                }px, 0)`,
              }}
            >
              <h1
                className={`relative ${third} text-8xl text-center w-full uppercase py-2 transition-all duration-300 ease-in hover:font-semibold`}
              >
                independence
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

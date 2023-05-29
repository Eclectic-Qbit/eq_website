"use client";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { H1, H2, H3, H4, H5, H6 } from "../text/Headers";
import frontendSettings from "@/frontendSettings";
import MouseContext from "@/contexts/MouseContext";

export default function LoadingAnimation() {
  const FADE_DURATION = 2000;
  const biggerRef = useRef(null);
  const mouseEntered = useRef(false);
  const [hide, setHide] = useState({
    temp: false,
    perma: false,
  });
  const [pp, setPp] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState([
    { x: -10000, y: -10000 },
    { x: -10000, y: -10000 },
    { x: -10000, y: -10000 },
  ]);
  const { position } = useContext(MouseContext);
  function fade() {
    setHide({ temp: true, perma: false });
    setTimeout(() => {
      setHide({ temp: true, perma: true });
      sessionStorage.setItem("loaded", true);
    }, [FADE_DURATION]);
  }
  const handleResize = useCallback(() => {
    if (window.innerWidth <= frontendSettings.mobileView) {
      fade();
    }
  }, []);
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const px =
      width > biggerRef.current.offsetWidth
        ? width * -1
        : biggerRef.current.offsetWidth * -1;
    const newArr = [
      { x: px, y: (height / 2) * -1 },
      { x: px, y: 0 },
      { x: px, y: height / 2 },
    ];
    setOffset(newArr);
  }, []);
  useEffect(() => {
    if (mouseEntered.current) {
      setPp({
        x: (position.clientX - window.innerWidth / 2) * 0.1,
        y: (position.clientY - window.innerHeight / 2) * 0.1,
      });
    }
  }, [position]);
  useEffect(() => {
    const loaded = sessionStorage.getItem("loaded");
    if (loaded) {
      fade();
    } else {
      document.addEventListener("resize", handleResize);
      handleResize();
      setTimeout(() => {
        const newOff = [...offset];
        newOff[0].x = 0;
        newOff[0].y = 0;
        setOffset(newOff);
      }, (FADE_DURATION * 1) / 3);
      setTimeout(() => {
        const newOff = [...offset];
        newOff[1].x = 0;
        newOff[1].y = 0;
        setOffset(newOff);
      }, (FADE_DURATION * 2) / 3);
      setTimeout(() => {
        const newOff = [...offset];
        newOff[2].x = 0;
        newOff[2].y = 0;
        setOffset(newOff);
      }, FADE_DURATION);
    }
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, [handleResize, offset]);
  return (
    <>
      {!hide.perma && (
        <div
          onMouseEnter={() => (mouseEntered.current = true)}
          onClick={fade}
          className={`${
            hide.temp ? "opacity-0" : "opacity-1"
          } z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center transition-all duration-1000 ease-in text-black sm:text-white`}
        >
          <div className="flex flex-col gap-16 sm:gap-0 w-full">
            <div
              style={{
                transform: `translate3d(${pp.x}px, ${pp.y}px, 0)`,
              }}
            >
              <H3
                style={{
                  transform: `translate3d(${offset[0].x}px, ${offset[0].y}px,0px)`,
                }}
                className={`relative text-8xl text-center w-full uppercase py-2 transition-all duration-1000 ease-in font-extrabold`}
              >
                Interdependence
              </H3>
            </div>
            <div
              ref={biggerRef}
              style={{
                transform: `translate3d(${pp.x * 1.3}px, ${pp.y * 1.5}px, 0)`,
              }}
            >
              <H4
                style={{
                  transform: `translate3d(${offset[1].x}px, ${offset[1].y}px,0px)`,
                }}
                className={`relative text-8xl text-center w-full uppercase py-2 transition-all duration-1000 ease-in font-extrabold`}
              >
                is the new
              </H4>
            </div>
            <div
              style={{
                transform: `translate3d(${pp.x * 1.6}px, ${pp.y * 2}px, 0)`,
              }}
            >
              <H3
                style={{
                  transform: `translate3d(${offset[2].x}px, ${offset[2].y}px,0px)`,
                }}
                className={`relative text-8xl text-center w-full uppercase py-2 transition-all duration-1000 ease-in font-extrabold`}
              >
                independence
              </H3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

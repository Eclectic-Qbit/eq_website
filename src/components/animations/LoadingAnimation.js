"use client";

import {
  cloneElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import MouseContext from "@/contexts/MouseContext";
import settings from "@/frontendSettings";

export default function LoadingAnimation({
  className,
  delay,
  elements,
  coeffs,
  forceFade,
  onFade,
}) {
  const FADE_DURATION = delay ? delay : 1000;
  const ref = useRef(null);
  const mouseEntered = useRef(false);
  const parsedCoeffs = useRef(
    coeffs
      ? coeffs
      : elements.map(() => {
          return 1;
        })
  );
  const currentTimeouts = useRef([]);
  const [pp, setPp] = useState({ x: 0, y: 0 });
  const [view, setView] = useState(false);
  const [hide, setHide] = useState({
    temp: false,
    perma: false,
  });
  const [offset, setOffset] = useState(
    elements.map(() => {
      return { x: -10000, y: 10000 };
    })
  );
  const { position } = useContext(MouseContext);
  const fade = useCallback(() => {
    setHide({ temp: true, perma: false });
    setTimeout(() => {
      setHide({ temp: true, perma: true });
      onFade && onFade();
    }, [FADE_DURATION]);
  }, [FADE_DURATION, onFade]);
  const handleResize = useCallback(() => {
    if (window.innerWidth <= settings.mobileView) {
      fade();
    }
  }, [fade]);
  useEffect(() => {
    setTimeout(() => {
      setView(true);
    }, FADE_DURATION / 2);
  }, [FADE_DURATION]);
  useEffect(() => {
    if (forceFade) {
      fade();
    } else {
      document.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, [handleResize, fade, forceFade]);
  useEffect(() => {
    if (!forceFade) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const px =
        width > ref.current.offsetWidth
          ? width * -1
          : ref.current.offsetWidth * -1;
      const interval = height / elements.length;
      let newArr = [];
      newArr = elements.map((el, i) => {
        return {
          x: px,
          y: Math.floor(interval * i - height / 2 + interval / 2),
        };
      });
      setOffset(newArr);
    }
  }, [elements, forceFade]);
  useEffect(() => {
    if (!forceFade) {
      for (let i = 0; i < currentTimeouts.current.length; i++) {
        clearTimeout(currentTimeouts.current[i]);
      }
      const newArr = [...offset];
      for (let i = 1; i <= newArr.length; i++) {
        const newTimeout = setTimeout(
          () => {
            setOffset((prevOffset) => {
              const updatedOffset = [...prevOffset];
              updatedOffset[i - 1] = { x: 0, y: 0 };
              return updatedOffset;
            });
          },
          view ? (FADE_DURATION * i) / newArr.length : 99999
        );
        currentTimeouts.current.push(newTimeout);
      }
    }
  }, [view, FADE_DURATION]);
  useEffect(() => {
    if (!forceFade) {
      if (mouseEntered.current) {
        setPp({
          x: (position.clientX - window.innerWidth / 2) * 0.1,
          y: (position.clientY - window.innerHeight / 2) * 0.1,
        });
      }
    }
  }, [position]);
  return (
    <>
      {!hide.perma && (
        <div
          onClick={fade}
          className={`${hide.temp ? "opacity-0" : "opacity-1"} ${className}`}
        >
          <div className="flex flex-col gap-16 sm:gap-0 w-full">
            <div ref={ref} onMouseEnter={() => (mouseEntered.current = true)}>
              {elements.map((el, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      transform: `translate3d(${
                        pp.x * parsedCoeffs.current[i]
                      }px, ${pp.y * parsedCoeffs.current[i]}px, 0)`,
                    }}
                  >
                    {cloneElement(elements[i], {
                      style: {
                        transform: `translate3d(${offset[i].x}px, ${offset[i].y}px,0px)`,
                      },
                      className: `relative text-8xl text-center w-full uppercase py-2 transition-all duration-1000 ease-in font-extrabold`,
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

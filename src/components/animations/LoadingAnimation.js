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

export default function LoadingAnimation({
  className,
  delay,
  elements,
  coeffs,
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
  const viewTimeout = useRef(null);
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
  const settedOffsets = useRef(false);
  const { position } = useContext(MouseContext);
  // Fade
  const fade = useCallback(() => {
    setHide({ temp: true, perma: false });
    setTimeout(() => {
      setHide({ temp: true, perma: true });
      onFade && onFade();
    }, [FADE_DURATION]);
  }, [FADE_DURATION, onFade]);
  // Cancel Existing Timeouts
  const cancelTimeouts = useCallback(() => {
    viewTimeout.current && clearTimeout(viewTimeout.current);
    for (let i = 0; i < currentTimeouts.current.length; i++) {
      clearTimeout(currentTimeouts.current[i]);
    }
  }, []);
  // Start to move items istantly
  useEffect(() => {
    if (!hide.perma && !hide.temp) {
      viewTimeout.current = setTimeout(() => {
        setView(true);
      }, 100);
    }
  }, [hide.perma, hide.temp]);
  // Elements position
  useEffect(() => {
    if (!hide.perma && !hide.temp && !settedOffsets.current) {
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
      settedOffsets.current = true;
    }
  }, [elements, hide.perma, hide.temp]);
  // Start moving when view is updated
  useEffect(() => {
    if (!hide.perma && !hide.temp && view) {
      cancelTimeouts();
      const newArr = [...offset];
      for (let i = 1; i <= newArr.length; i++) {
        if (offset[i - 1].x !== 0 || offset[i - 1].y !== 0) {
          const newTimeout = setTimeout(() => {
            const updatedOffset = [...offset];
            updatedOffset[i - 1] = { x: 0, y: 0 };
            setOffset(updatedOffset);
          }, (FADE_DURATION * i) / newArr.length);
          currentTimeouts.current.push(newTimeout);
        }
      }
    }
  }, [view, FADE_DURATION, offset, hide.perma, hide.temp, cancelTimeouts]);
  // Mouse position
  useEffect(() => {
    if (!hide.perma && !hide.temp) {
      if (mouseEntered.current) {
        setPp({
          x: (position.clientX - window.innerWidth / 2) * 0.1,
          y: (position.clientY - window.innerHeight / 2) * 0.1,
        });
      }
    }
  }, [hide.perma, hide.temp, position]);
  return (
    <>
      {!hide.perma && (
        <div
          onClick={fade}
          className={`${
            hide.temp ? "opacity-0" : "opacity-1"
          } ${className} transition-all ease-in`}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
        >
          <div className="flex flex-col gap-0 w-full">
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
                      className: `relative text-8xl text-center w-full uppercase py-2 font-extrabold`,
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

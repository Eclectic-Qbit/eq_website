"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function LastTestingCanvas() {
  const [doneLoading, setDoneLoading] = useState(0);
  const canvasRef = useRef(null);
  const items = useRef([]);
  const lastTime = useRef(0);
  const timeouts = useRef([]);
  const lastResizeTimeout = useRef(null);
  const context = useRef(null);
  const lastWidth = useRef(0);
  const TIMEOUT = 25;
  const CIRCLE = 30;
  const DENSITY = 1 / 1600;
  const colors = useMemo(() => {
    return ["#CCFF00", "#FF6600", "#00BFFF", "#00FF00", "#FF007F", "#9500E9"];
  }, []);
  const drawCircle = useCallback((x, y, r, fill, blur, w, color, shadow) => {
    context.current.beginPath();
    context.current.filter = `blur(${blur}px)`;
    shadow && shadow.blur && (context.current.shadowBlur = shadow.blur);
    shadow && shadow.color && (context.current.shadowColor = shadow.color);
    context.current.lineWidth = w;
    fill === 1
      ? (context.current.fillStyle = color)
      : (context.current.strokeStyle = color);
    context.current.arc(x, y, r, 0, 2 * Math.PI);
    fill === 1 ? context.current.fill() : context.current.stroke();
    context.current.filter = "none";
  }, []);
  const createTimeout = useCallback(
    (i, w, creationDate) => {
      const newTimeout = setTimeout(() => {
        drawCircle(
          items.current[i][0],
          items.current[i][1],
          w + 1,
          1,
          1,
          0,
          "black"
        );
        drawCircle(
          items.current[i][0],
          items.current[i][1],
          w,
          1,
          1,
          0,
          "white"
        );
        timeouts.current = timeouts.current.filter((el) => {
          if (el.params[0] !== i || el.params[1 !== w]) {
            return el;
          }
        });
      }, 5 * TIMEOUT + Date.now() - creationDate);
      return newTimeout;
    },
    [drawCircle]
  );
  const posticipateTimeouts = useCallback(() => {
    const newTimeouts = [];
    timeouts.current.map((el, i) => {
      clearTimeout(el.timeout);
      newTimeouts.push({
        timeout: createTimeout(
          el.params[0],
          el.params[1],
          el.params[2],
          el.params[3]
        ),
        params: [el.params[0], el.params[1], el.params[2], el.params[3]],
      });
    });
    timeouts.current = newTimeouts;
  }, [createTimeout]);
  const handleMouseMove = useCallback(
    (e) => {
      const date = Date.now();
      if (date - lastTime.current > TIMEOUT) {
        posticipateTimeouts();
        const x = e.clientX;
        const y = e.clientY;
        for (let i = 0; i < items.current.length; i++) {
          if (date - items.current[i][3] > 2 * TIMEOUT) {
            if (
              items.current[i][0] + CIRCLE > x &&
              items.current[i][0] - CIRCLE < x
            ) {
              if (
                items.current[i][1] + CIRCLE > y &&
                items.current[i][1] - CIRCLE < y
              ) {
                const w = items.current[i][2];
                drawCircle(
                  items.current[i][0],
                  items.current[i][1],
                  w + 1, // consider the border (1) too!
                  1,
                  1,
                  0,
                  "black"
                );
                const number = Math.floor(Math.random() * (5 - 0 + 1) + 0);
                const color = colors[number];
                drawCircle(
                  items.current[i][0],
                  items.current[i][1],
                  w,
                  1,
                  1,
                  0,
                  color
                );
                timeouts.current.push({
                  timeout: createTimeout(i, w, 0),
                  params: [i, w, Date.now()],
                });
              }
            }
          }
        }
        lastTime.current = Date.now();
      }
    },
    [colors, createTimeout, drawCircle, posticipateTimeouts]
  );
  const generateLayer = useCallback(
    (fromY, toY, fromX, toX, ySpacing, density, w) => {
      for (let i = fromY; i < toY - ySpacing; i += ySpacing) {
        let nStars = density * (toX - fromX);
        let coeff = 1;
        while (nStars < 1) {
          nStars *= 10;
          coeff *= 10;
        }
        for (let j = 0; j < nStars; j++) {
          const randomX = Math.floor(
            Math.random() * ((toX - fromX) * coeff - ySpacing + 1) + fromX
          );
          drawCircle(randomX, i, w, 1, 1, 0, "white");
          items.current.push([randomX, i, w, 0]);
        }
      }
    },
    [drawCircle]
  );
  const handleResize = useCallback(() => {
    const fraction = canvasRef.current.parentNode.clientHeight / 100;
    const currentW = canvasRef.current.parentNode.clientWidth;
    if (lastResizeTimeout.current) {
      clearTimeout(lastResizeTimeout.current);
    }
    if (lastWidth.current < currentW) {
      lastResizeTimeout.current = setTimeout(() => {
        const w = canvasRef.current.width;
        const h = canvasRef.current.height;
        const canvasData = context.current.getImageData(0, 0, w, h);
        canvasRef.current.width = currentW;
        context.current.putImageData(canvasData, 0, 0);
        for (let w = 1; w <= 3; w++) {
          let counterHeight = 7;

          for (let i = 1; i * fraction <= canvasRef.current.height - 7; i++) {
            setTimeout(() => {
              generateLayer(
                counterHeight,
                counterHeight + fraction,
                lastWidth.current,
                currentW,
                7,
                DENSITY * (10 - w * w),
                w
              );
              counterHeight += fraction;
              if (w === 3 && (i + 1) * fraction >= canvasRef.current.height) {
                lastWidth.current = currentW;
              }
            }, 5 * i * w);
          }
        }
      }, 500);
    }
  }, [DENSITY, generateLayer]);
  useEffect(() => {
    canvasRef.current.width = canvasRef.current.parentNode.clientWidth;
    canvasRef.current.height = canvasRef.current.parentNode.clientHeight;
    context.current = canvasRef.current.getContext("2d", {
      willReadFrequently: true,
    });

    const startingDate = Date.now();
    const fraction = canvasRef.current.parentNode.clientHeight / 100;
    lastWidth.current = canvasRef.current.width;
    for (let w = 1; w <= 7; w++) {
      let counterHeight = 7;
      for (let i = 1; i * fraction <= canvasRef.current.height - 7; i++) {
        setTimeout(() => {
          generateLayer(
            counterHeight,
            counterHeight + fraction,
            0,
            canvasRef.current.parentNode.clientWidth,
            7,
            DENSITY * (10 - w * w),
            w
          );
          counterHeight += fraction;
          if (w === 3 && (i + 1) * fraction >= canvasRef.current.height) {
            setDoneLoading(Date.now() - startingDate);
          }
        }, 10 * i * w);
      }
    }
  }, [DENSITY, drawCircle, generateLayer]);
  useEffect(() => {
    if (doneLoading > 0 && doneLoading < 2500) {
      canvasRef.current.addEventListener("mousemove", (e) =>
        handleMouseMove(e)
      );
    }
    const parsedRef = canvasRef.current;
    return () => {
      if (doneLoading > 0 && doneLoading < 2500) {
        parsedRef.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [doneLoading, handleMouseMove]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);
  return (
    <div>
      <div className="realtive w-full h-full">
        <div className="absolute top-0 left-0 w-full max-w-screen h-full overflow-hidden">
          <canvas ref={canvasRef} className="rounded-xl"></canvas>
        </div>
      </div>
    </div>
  );
}

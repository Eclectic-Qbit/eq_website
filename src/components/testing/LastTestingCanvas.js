"use client";

import { downloadFile } from "@/commonFrontend";
import MouseContext from "@/contexts/MouseContext";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

export default function LastTestingCanvas({ mouseListenerRef }) {
  const { position, setPosition, samplingDelta } = useContext(MouseContext);
  const canvasRef = useRef(null); // Canvas ref
  const items = useRef([]); // Stars rendered
  const timeouts = useRef([]); // Stars timeouts
  const lastResizeTimeout = useRef(null); // Need for sampling of the resize
  const context = useRef(null); // Canvas 2d context
  const lastWidth = useRef(0); // Need for checking if the resize event made the screen larger or smaller
  const FRACTION = 15; // Block of pixels where to instance a drawLayer
  const CIRCLE = 30; // Radius of the circle around the mouse
  const YSPACING = 7; // Distance between two stars in vertical
  const DENSITY = 1 / 2500; // Density of stars per row - modified by a costant in the for loops
  const colors = useRef([
    "#CCFF00",
    "#FF6600",
    "#00BFFF",
    "#00FF00",
    "#FF007F",
    "#9500E9",
  ]); // Random stars colors to choose
  // Draw a circle given some specs
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
      }, 5 * samplingDelta + Date.now() - creationDate);
      return newTimeout;
    },
    [drawCircle, samplingDelta]
  );
  // Posticipate the draw-to-white stars timeout
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
  const generateLayer = useCallback(
    (fromY, toY, fromX, toX, ySpacing, density, w) => {
      for (let i = fromY + ySpacing; i < toY - ySpacing; i += ySpacing) {
        // If the number of pixels is lower than zero, draw pixels outside the canvas. This won't change the final density of pixels
        let nStars = density * (toX - fromX);
        let coeff = 1;
        while (nStars < 1) {
          nStars *= 10;
          coeff *= 10;
        }
        nStars = Math.floor(nStars);
        for (let j = 0; j < nStars; j++) {
          const randomX = Math.floor(
            Math.random() * ((toX - fromX) * coeff - ySpacing + 1) + fromX
          );
          if (randomX < canvasRef.current.width) {
            drawCircle(randomX, i, w, 1, 1, 0, "white");
            items.current.push([randomX, i, w, 0]);
          }
        }
      }
    },
    [drawCircle]
  );
  const callGenerateLayer = useCallback(
    (callback) => {
      const currentW = canvasRef.current.parentNode.clientWidth;
      // Loop for height
      for (let w = 1; w <= 3; w++) {
        let counterHeight = YSPACING;
        // Loop for the delta width
        for (let i = 1; i * FRACTION <= canvasRef.current.height; i++) {
          setTimeout(() => {
            generateLayer(
              counterHeight,
              counterHeight + FRACTION,
              lastWidth.current,
              currentW,
              YSPACING,
              DENSITY * (10 - w * w),
              w
            );
            counterHeight += FRACTION;
            if (w === 3 && (i + 1) * FRACTION >= canvasRef.current.height) {
              callback();
              const canvasData = context.current.getImageData(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
              );
              // Saving the data
              const parsedObj = {
                height: canvasData.height,
                width: canvasData.width,
                colorSpace: canvasData.colorSpace,
                data: canvasData.data,
              };
              const json = JSON.stringify(parsedObj);
              const blob = new Blob([json], { type: "application/json" });
              downloadFile(blob);
              downloadFile(
                new Blob([JSON.stringify(items.current)], {
                  type: "application/json",
                })
              );
            }
          }, 1 * i * w);
        }
      }
    },
    [DENSITY, generateLayer]
  );
  const handleResize = useCallback(() => {
    const currentW = canvasRef.current.parentNode.clientWidth;
    // Proceed with the resizing only when it's the last resize event fired
    if (lastResizeTimeout.current) {
      clearTimeout(lastResizeTimeout.current);
    }
    // If the screen was resized more than before
    if (lastWidth.current < currentW) {
      lastResizeTimeout.current = setTimeout(() => {
        const w = canvasRef.current.width;
        const h = canvasRef.current.height;
        // Save and set again the current stars
        const canvasData = context.current.getImageData(0, 0, w, h);
        canvasRef.current.width = currentW;
        context.current.putImageData(canvasData, 0, 0);
        callGenerateLayer(() => {
          lastWidth.current = currentW;
        });
      }, 500);
    }
  }, [callGenerateLayer]);
  useEffect(() => {
    // Set canvas dimensions to default
    canvasRef.current.width = canvasRef.current.parentNode.clientWidth;
    canvasRef.current.height = canvasRef.current.parentNode.clientHeight;
    context.current = canvasRef.current.getContext("2d", {
      willReadFrequently: false,
    }); // Do not set willReadFrequently to true. It will make everything slower
    const startingDate = Date.now();
    callGenerateLayer(() => {
      lastWidth.current = canvasRef.current.width;
    });
  }, [DENSITY, callGenerateLayer, drawCircle, generateLayer]);
  useEffect(() => {
    const date = Date.now();
    posticipateTimeouts();
    const x = position.clientX;
    const y = position.clientY;
    // Check which star is in range
    for (let i = 0; i < items.current.length; i++) {
      // If it wasn't updated in the recent past
      if (date - items.current[i][3] > 2 * samplingDelta) {
        // If it is in range
        if (
          items.current[i][0] + CIRCLE > x &&
          items.current[i][0] - CIRCLE < x
        ) {
          if (
            items.current[i][1] + CIRCLE > y &&
            items.current[i][1] - CIRCLE < y
          ) {
            // Draw back and paint again on it
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
            const color = colors.current[number];
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
              params: [i, w, date],
            });
          }
        }
      }
    }
  }, [createTimeout, drawCircle, position, posticipateTimeouts, samplingDelta]);
  useEffect(() => {
    // Resize handler. Draws the stars only in the new part of the screen
    window.addEventListener("resize", handleResize);
  }, [handleResize]);
  return (
    <div>
      <div className="realtive w-full h-full">
        <div className="absolute top-0 left-0 w-full max-w-screen h-full overflow-hidden">
          <canvas ref={canvasRef} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

"use client";

import CircleCanvas from "@/components/backgrounds/CirlceCanvas";
import GridCanvas from "@/components/backgrounds/GridCanvas";
import SinusoidalCanvas from "@/components/backgrounds/SinusoidalCanvas";
import EclecticQbit from "@/components/specific/index/EclecticQbit";
import HowWeDo from "@/components/specific/index/HowWeDo";
import OptimizedDottedCanvas from "@/components/testing/OptimizedDottedCanvas";
import WhatWeDo from "@/components/specific/index/WhatWeDo";
import PaintEarn from "@/components/specific/index/PaintEarn";
import { useState } from "react";
import settings from "@/frontendSettings";
import MemoryGame from "@/components/gamification/MemoryGame";
export default function Home() {
  const [animateSinCanvas, setAnimateSinCanvas] = useState(false);
  const [animateCircCanvas, setAnimateCircCanvas] = useState(false);
  return (
    <>
      <div className="relative flex flex-col pt-[17.5vh]">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <OptimizedDottedCanvas />
        </div>
        {/* Content */}
        <div className="grid gap-5">
          <div
            onMouseEnter={() => {
              if (window.innerWidth > settings.mobileView) {
                setAnimateCircCanvas(true);
              }
            }}
            onMouseLeave={() => setAnimateCircCanvas(false)}
          >
            <div className="absolute top-[50vh] -left-[150px] w-min h-min">
              <CircleCanvas
                x={150}
                y={150}
                r={150}
                animate={animateCircCanvas}
              />
            </div>
            <EclecticQbit />
          </div>
          <div
            onMouseEnter={() => {
              if (window.innerWidth > settings.mobileView) {
                setAnimateSinCanvas(true);
              }
            }}
            onMouseLeave={() => setAnimateSinCanvas(false)}
            className="relative flex flex-col"
          >
            <div className="absolute sm:z-10 top-[20vh] right-[0vw] w-min h-min overflow-hidden">
              <SinusoidalCanvas
                w={400}
                h={30}
                freq={0.03}
                animate={animateSinCanvas}
              />
            </div>
            <WhatWeDo />
          </div>
          <div className="relative">
            <div className="absolute bottom-0 right-[0vw] w-min h-min overflow-hidden">
              <GridCanvas w={400} h={400} cols={10} rows={10} />
            </div>
            <HowWeDo />
          </div>
          <div>
            <PaintEarn />
          </div>
        </div>
      </div>
    </>
  );
}

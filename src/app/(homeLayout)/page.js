"use client";

import CircleCanvas from "@/components/backgrounds/CirlceCanvas";
import GridCanvas from "@/components/backgrounds/GridCanvas";
import SinusoidalCanvas from "@/components/backgrounds/SinusoidalCanvas";
import EclecticQbit from "@/components/specific/index/EclecticQbit";
import HowWeDo from "@/components/specific/index/HowWeDo";
import OptimizedDottedCanvas from "@/components/testing/OptimizedDottedCanvas";
import WhatWeDo from "@/components/specific/index/WhatWeDo";
import PaintEarn from "@/components/specific/index/PaintEarn";
export default function Home() {
  return (
    <>
      <div className="relative flex flex-col pt-[17.5vh]">
        {/* Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <OptimizedDottedCanvas />
        </div>
        {/* Content */}
        <div className="grid gap-5">
          <div>
            <div className="absolute top-[50vh] -left-[150px] w-min h-min">
              <CircleCanvas x={150} y={150} r={150} />
            </div>
            <EclecticQbit />
          </div>
          <div className="relative flex flex-col">
            <div className="absolute top-[20vh] right-[0vw] w-min h-min overflow-hidden">
              <SinusoidalCanvas w={400} h={30} freq={0.03} />
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

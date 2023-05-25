"use client";

import CircleCanvas from "@/components/backgrounds/CirlceCanvas";
import GridCanvas from "@/components/backgrounds/GridCanvas";
import SinusoidalCanvas from "@/components/backgrounds/SinusoidalCanvas";
import EclecticQbit from "@/components/index/EclecticQbit";
import HowWeDo from "@/components/index/HowWeDo";
import PaintEarnFirst from "@/components/index/PaintEarnFirst";
import PaintEarnSecond from "@/components/index/PaintEarnSecond";
import WhatWeDoFirst from "@/components/index/WhatWeDoFirst";
import WhatWeDoSecond from "@/components/index/WhatWeDoSecond";
import OptimizedDottedCanvas from "@/components/testing/OptimizedDottedCanvas";
export default function Home() {
  return (
    <>
      <div className="relative flex flex-col pt-[17.5vh]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <OptimizedDottedCanvas />
        </div>
        {/* Content */}
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
          <WhatWeDoFirst />
          <WhatWeDoSecond />
        </div>
        <div className="relative">
          <div className="absolute bottom-0 right-[0vw] w-min h-min overflow-hidden">
            <GridCanvas w={400} h={400} cols={10} rows={10} />
          </div>
          <HowWeDo />
        </div>
        <div>
          {/* NOT READY 
          <PaintEarnFirst />
          <PaintEarnSecond />
          */}
        </div>
      </div>
    </>
  );
}

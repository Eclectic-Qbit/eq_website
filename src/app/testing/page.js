"use client";

import { MouseMoveGradient } from "@/components/animations/MouseMoveAnimations";
import FirstCanvas from "@/components/backgrounds/FirstCanvas";
import WhatWeDoFirst from "@/components/index/WhatWeDoFirst";
import WhatWeDoSecond from "@/components/index/WhatWeDoSecond";
import { H4 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";
import { useEffect, useRef } from "react";

export default function Testing() {
  return (
    <div className="realtive w-full h-full">
      <div className="absolute top-0 left-0">
        <FirstCanvas />
      </div>
      <div className="relative flex flex-wrap justify-center gap-6">
        <div>
          <H4 className="text-orange font-extrabold">HELLO</H4>
          <H4 className="text-orange font-bold">HELLO</H4>
          <H4 className="text-orange">HELLO</H4>
          <P1 className="text-orange font-extrabold">hello</P1>
          <P1 className="text-orange font-bolder">hello</P1>
          <P1 className="text-orange">hello</P1>
        </div>
        <div>
          <H4 className="text-purple font-extrabold">HELLO</H4>
          <H4 className="text-purple font-bold">HELLO</H4>
          <H4 className="text-purple">HELLO</H4>
          <P1 className="text-purple font-extrabold">hello</P1>
          <P1 className="text-purple font-bolder">hello</P1>
          <P1 className="text-purple">hello</P1>
        </div>
        <div>
          <H4 className="text-pink font-extrabold">HELLO</H4>
          <H4 className="text-pink font-bold">HELLO</H4>
          <H4 className="text-pink">HELLO</H4>
          <P1 className="text-pink font-extrabold">hello</P1>
          <P1 className="text-pink font-bolder">hello</P1>
          <P1 className="text-pink">hello</P1>
        </div>
        <div>
          <H4 className="text-green font-extrabold">HELLO</H4>
          <H4 className="text-green font-bold">HELLO</H4>
          <H4 className="text-green">HELLO</H4>
          <P1 className="text-green font-extrabold">hello</P1>
          <P1 className="text-green font-bolder">hello</P1>
          <P1 className="text-green">hello</P1>
        </div>
        <div>
          <H4 className="text-blue font-extrabold">HELLO</H4>
          <H4 className="text-blue font-bold">HELLO</H4>
          <H4 className="text-blue">HELLO</H4>
          <P1 className="text-blue font-extrabold">hello</P1>
          <P1 className="text-blue font-bolder">hello</P1>
          <P1 className="text-blue">hello</P1>
        </div>
        <div>
          <H4 className="text-yellow font-extrabold">HELLO</H4>
          <H4 className="text-yellow font-bold">HELLO</H4>
          <H4 className="text-yellow">HELLO</H4>
          <P1 className="text-yellow font-extrabold">hello</P1>
          <P1 className="text-yellow font-bolder">hello</P1>
          <P1 className="text-yellow">hello</P1>
        </div>
        <div>
          <H4 className="text-white font-extrabold">HELLO</H4>
          <H4 className="text-white font-bold">HELLO</H4>
          <H4 className="text-white">HELLO</H4>
          <P1 className="text-white font-extrabold">hello</P1>
          <P1 className="text-white font-bolder">hello</P1>
          <P1 className="text-white">hello</P1>
        </div>
        <MouseMoveGradient className="" from="#FF6600" to="#9500E9">
          <H4 className="font-extrabold">HELLO</H4>
          <H4 className=" font-bold">HELLO</H4>
          <H4 className="">HELLO</H4>
          <P1 className=" font-extrabold">hello</P1>
          <P1 className=" font-bolder">hello</P1>
          <P1 className="">hello</P1>
        </MouseMoveGradient>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { H2, H3, H4, H9 } from "../text/Headers";
import { P1, P2, P3, P4 } from "../text/Paragraphs";
import FirstCanvas from "../backgrounds/FirstCanvas";
import { MouseMoveGradient } from "../animations/MouseMoveAnimations";

export default function WhatWeDoFirst() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full">
        <div className="flex flex-wrap gap-8 mt-[5%] mx-[5%]">
          <div className="flex flex-col justify-center gap-9 max-w-2xl xl:max-w-4xl">
            <MouseMoveGradient
              className="font-extrabold uppercase w-full"
              from="#9500E9"
              to="#FF6600"
            >
              <H4 translationPath="whatWeDo/title/p1" />
              <H3 translationPath="whatWeDo/title/p2" />
            </MouseMoveGradient>
            <div className="flex flex-wrap gap-3 lowercase w-full">
              <div className="grid gap-2">
                <P2
                  style={{ textShadow: "1px 1px 2px white" }}
                  translationPath="whatWeDo/h2"
                  className="text-purple font-bold"
                />
                <P4
                  style={{ textShadow: "2px 2px 2px black" }}
                  translationPath="whatWeDo/p2"
                  className="text-yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

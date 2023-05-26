import { useState } from "react";
import { MouseMoveGradient } from "../animations/MouseMoveAnimations";
import { H3, H4, H6, H8 } from "../text/Headers";
import { P1, P2 } from "../text/Paragraphs";

export default function PaintEarn() {
  const [selected, setSelected] = useState("artist");
  return (
    <div className="relative flex items-center justify-center pb-[10vh]">
      <div className="grid gap-6 mx-[15%]">
        <MouseMoveGradient
          className="font-extrabold uppercase w-full text-center"
          from="#9500E9"
          to="#FF6600"
        >
          <H4 translationPath="paintEarn/title/p1" />
          <H3 translationPath="paintEarn/title/p2" />
        </MouseMoveGradient>
        <P2
          style={{ textShadow: "1px 1px 2px white" }}
          translationPath="paintEarn/h1"
          className="text-purple text-center font-bold uppercase"
        />
        <P2
          style={{ textShadow: "1px 1px 2px white" }}
          translationPath="paintEarn/h2"
          className="text-purple text-center font-bold uppercase"
        />
        <div className="flex justify-center items-center gap-10 uppercase font-extrabold text-center">
          <div
            className={`flex flex-col justify-center items-center ${
              selected === "artist"
                ? "text-yellow"
                : "filter grayscale text-gray-400"
            }`}
          >
            <div
              onClick={() => setSelected("artist")}
              className="relative w-[50vh] h-[50vh] rounded-full bg-white cursor-pointer"
            />
            <H8 translationPath="paintEarn/p1" />
          </div>
          <div
            className={`flex flex-col justify-center items-center ${
              selected === "startupper"
                ? "text-yellow"
                : "filter grayscale text-gray-400"
            }`}
          >
            <div
              onClick={() => setSelected("startupper")}
              className="relative w-[50vh] h-[50vh] rounded-full bg-white cursor-pointer"
            />
            <H8 translationPath="paintEarn/p2" />
          </div>
        </div>
        <P2
          style={{ textShadow: "1px 1px 2px white" }}
          translationPath={`paintEarn/${selected}`}
          className="text-yellow font-bold lowercase"
        />
      </div>
    </div>
  );
}

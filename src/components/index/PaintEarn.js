import { useState } from "react";
import { MouseMoveGradient } from "../animations/MouseMoveAnimations";
import { H3, H4, H6, H8 } from "../text/Headers";
import { P1, P2 } from "../text/Paragraphs";
import ConsoleEffect from "../animations/ConsoleEffect";
import Image from "next/image";

export default function PaintEarn() {
  const [selected, setSelected] = useState(null);
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
        <div className="flex justify-center items-center gap-10 uppercase font-extrabold text-center ">
          <div className="relative w-full max-w-[15rem] sm:max-w-[40rem] flex flex-col gap-10 sm:grid sm:grid-cols-2">
            <div
              onClick={() => setSelected("artist")}
              className={`flex flex-col gap-5 justify-center items-center ${
                selected === "artist" ? "text-yellow" : "grayscale"
              } hover:grayscale-0 hover:text-yellow cursor-pointer`}
            >
              <div className="relative w-full aspect-square transition-all duration-150">
                <Image
                  className="rounded-full"
                  src="/images/proudCat_artist_squared.jpg"
                  alt="Artist"
                  fill
                  onClick={() => setSelected("artist")}
                />
              </div>
              <P1 translationPath="paintEarn/p1" />
            </div>
            <div
              onClick={() => setSelected("startupper")}
              className={`flex flex-col gap-5 justify-center items-center ${
                selected === "startupper" ? "text-yellow" : "grayscale"
              } hover:grayscale-0 hover:text-yellow cursor-pointer transition-all duration-150`}
            >
              <div className="relative w-full aspect-square">
                <Image
                  className="rounded-full"
                  src="/images/proudCat_enterpreneur_squared.jpg"
                  alt="Startupper"
                  fill
                  onClick={() => setSelected("startupper")}
                />
              </div>
              <P1 translationPath="paintEarn/p2" />
            </div>
          </div>
        </div>
        <ConsoleEffect
          style={{ textShadow: "2px 2px 2px black" }}
          className="text-yellow font-bold"
          content={{
            content: `paintEarn/${selected ? selected : "artist"}`,
            type: "ref",
          }}
          active={selected}
        />
      </div>
    </div>
  );
}

import { useState } from "react";
import { MouseMoveGradient } from "../../animations/MouseMoveAnimations";
import { H3, H4 } from "../../text/Headers";
import { P2 } from "../../text/Paragraphs";
import ConsoleEffect from "../../animations/ConsoleEffect";
import { finalMediaLink } from "@/commonFrontend";
import { P1 } from "@/components/text/Paragraphs";
import settings from "@/frontendSettings";
import Image from "next/image";

function PaintEarnImgs({ selected, setSelected }) {
  const [hovering, setHovering] = useState(null);
  return (
    <>
      <div
        onMouseEnter={() => {
          if (window.innerWidth > settings.mobileView) {
            setHovering("artist");
          }
        }}
        onMouseLeave={() => setHovering(null)}
        onClick={() => {
          if (selected !== "artist") {
            setSelected("artist");
          } else {
            setSelected(null);
          }
        }}
        className={`flex flex-col gap-5 justify-center items-center ${
          selected === "artist" && (hovering === null || hovering === "artist")
            ? "text-yellow"
            : "grayscale"
        } sm:hover:grayscale-0 sm:hover:text-yellow`}
      >
        <div className="relative w-full aspect-square transition-all duration-150">
          <Image
            className={`rounded-full cursor-none ${
              selected === "artist" ? " border-4" : "border-0"
            } border-solid border-white transition-all duration-150`}
            src={finalMediaLink("images/danteArtist.png")}
            alt="Artist"
            fill
          />
        </div>
        <P1 translationPath="paintEarn/p1" />
      </div>
      <div
        onMouseEnter={() => {
          if (window.innerWidth > settings.mobileView) {
            setHovering("startupper");
          }
        }}
        onMouseLeave={() => setHovering(null)}
        onClick={() => {
          if (selected !== "startupper") {
            setSelected("startupper");
          } else {
            setSelected(null);
          }
        }}
        className={`flex flex-col gap-5 justify-center items-center ${
          selected === "startupper" &&
          (hovering === null || hovering === "startupper")
            ? "text-yellow"
            : "grayscale"
        } sm:hover:grayscale-0 sm:hover:text-yellow transition-all duration-150`}
      >
        <div className="relative w-full aspect-square">
          <Image
            className={`rounded-full cursor-none ${
              selected === "startupper" ? " border-4" : "border-0"
            } border-solid border-white transition-all duration-150`}
            src={finalMediaLink("images/danteStartupper.png")}
            alt="Startupper"
            fill
          />
        </div>
        <P1 translationPath="paintEarn/p2" />
      </div>
    </>
  );
}

export default function PaintEarn() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="relative flex items-center justify-center pb-[10vh]">
      <div className="grid gap-10 mx-[15%]">
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
          translationPath="paintEarn/h2"
          className="text-purple text-center font-bold uppercase"
        />
        <div className="flex justify-center items-center gap-10 uppercase font-extrabold text-center ">
          <div className="relative w-full max-w-[15rem] sm:max-w-[40rem] flex flex-col gap-10 sm:grid sm:grid-cols-2">
            <PaintEarnImgs selected={selected} setSelected={setSelected} />
          </div>
        </div>
        <ConsoleEffect
          delta={15}
          style={{
            textShadow: "2px 2px 2px black",
            textAlign: "center",
            width: "100%",
            height: "100%",
          }}
          className="relative text-yellow w-full h-full"
          content={{
            content: `paintEarn/${selected ? selected : "artist"}`,
            type: "ref",
          }}
          forceActive={selected !== null}
          spanStyling={{ backgroundColor: "#9500E9", lineHeight: "24px" }}
        />
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { MouseMoveGradient } from "../../animations/MouseMoveAnimations";
import { H3, H4 } from "../../text/Headers";
import { P2 } from "../../text/Paragraphs";
import ConsoleEffect from "../../animations/ConsoleEffect";
import { P1 } from "@/components/text/Paragraphs";
import settings from "@/frontendSettings";
import Image from "next/image";
import Img1 from "../../../../public/images/danteArtist.png";
import Img2 from "../../../../public/images/danteStartupper.png";

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
            document
              .querySelector("#paintEarnTarget")
              .scrollIntoView({ behavior: "smooth" });
            setSelected("artist");
          } else {
            setSelected(null);
          }
        }}
        className={`flex w-max h-full flex-col gap-5 justify-center items-center text-black ${
          selected === "artist" && (hovering === null || hovering === "artist")
            ? ""
            : "grayscale"
        } ${
          selected === "artist" && "sm:border-[0.35rem]"
        } sm:hover:grayscale-0 transition-all duration-150 border-2 border-solid border-white rounded-xl overflow-hidden`}
      >
        <div className="relative w-max h-[18rem] sm:h-[25rem]">
          <div className="relative aspect-square h-[15rem]  sm:h-[21rem]">
            <Image
              className={` cursor-none border-solid border-white transition-all duration-150`}
              src={Img1}
              alt="Artist"
              fill
              sizes="100%"
            />
          </div>
          <div className="w-full h-[3rem] sm:h-[4rem] flex justify-center items-center bg-white border-[0.25rem] border-solid border-black rounded-b-xl">
            <P1 translationPath="paintEarn/p1" />
          </div>
        </div>
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
            document
              .querySelector("#paintEarnTarget")
              .scrollIntoView({ behavior: "smooth" });
            setSelected("startupper");
          } else {
            setSelected(null);
          }
        }}
        className={`flex w-max h-full flex-col gap-5 justify-center items-center text-black ${
          selected === "startupper" &&
          (hovering === null || hovering === "startupper")
            ? ""
            : "grayscale"
        } ${
          selected === "startupper" && "sm:border-[0.35rem]"
        } sm:hover:grayscale-0 transition-all duration-150 border-2 border-solid border-white rounded-xl overflow-hidden`}
      >
        <div className="relative w-max h-[18rem] sm:h-[25rem]">
          <div className="relative aspect-square h-[15rem]  sm:h-[21rem]">
            <Image
              className={` cursor-none border-solid border-white transition-all duration-150`}
              src={Img2}
              alt="Startupper"
              fill
              sizes="100%"
            />
          </div>
          <div className="w-full h-[3rem] sm:h-[4rem] flex justify-center items-center bg-white border-[0.25rem] border-solid border-black rounded-b-xl">
            <P1 translationPath="paintEarn/p2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default function PaintEarn() {
  const [selected, setSelected] = useState(null);
  const lastSelected = useRef("artist");
  useEffect(() => {
    if (selected !== null) {
      lastSelected.current = selected;
    }
  }, [selected]);
  return (
    <div className="relative flex items-center justify-center pb-[10vh]">
      <div className="grid gap-10 mx-[15%]">
        <P2
          style={{ textShadow: "1px 1px 2px white" }}
          translationPath="paintEarn/h2"
          className="text-purple text-center font-bold uppercase"
        />
        <div className="flex justify-center items-center gap-10 uppercase font-extrabold text-center ">
          <div className="relative w-full flex flex-wrap justify-center gap-10 ">
            <PaintEarnImgs selected={selected} setSelected={setSelected} />
          </div>
        </div>
        <div id="paintEarnTarget">
          <ConsoleEffect
            delta={15}
            style={{
              textShadow: "2px 2px 2px black",
              textAlign: "center",
              width: "100%",
              height: "100%",
            }}
            className="relative text-yellow w-full h-full lowercase"
            content={{
              content: `paintEarn/${
                selected ? selected : lastSelected.current
              }`,
              type: "ref",
            }}
            forceActive={selected !== null}
            spanStyling={{ backgroundColor: "#9500E9", lineHeight: "22px" }}
          />
        </div>
      </div>
    </div>
  );
}

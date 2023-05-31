"use client";

import { finalMediaLink } from "@/commonFrontend";
import { P1 } from "@/components/text/Paragraphs";
import settings from "@/frontendSettings";
import Image from "next/image";
import { useState } from "react";

export default function PaintEarnImgs({ selected, setSelected }) {
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
        } hover:grayscale-0 hover:text-yellow`}
      >
        <div className="relative w-full aspect-square transition-all duration-150">
          <Image
            className={`rounded-full cursor-none ${
              selected === "artist" ? " border-4" : "border-0"
            } border-solid border-white transition-all duration-150`}
            src={finalMediaLink("images/proudCat_artist_squared.jpg")}
            alt="Artist"
            fill
          />
        </div>
        <P1 translationPath="paintEarn/p1" />
      </div>
      <div
        onMouseEnter={() => {
          if (window.innerWidth > settings.mobileView) {
            console.log("S");
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
        } hover:grayscale-0 hover:text-yellow transition-all duration-150`}
      >
        <div className="relative w-full aspect-square">
          <Image
            className={`rounded-full cursor-none scale-x-[-1] ${
              selected === "startupper" ? " border-4" : "border-0"
            } border-solid border-white transition-all duration-150`}
            src={finalMediaLink("images/proudCat_enterpreneur_squared.jpg")}
            alt="Startupper"
            fill
          />
        </div>
        <P1 translationPath="paintEarn/p2" />
      </div>
    </>
  );
}

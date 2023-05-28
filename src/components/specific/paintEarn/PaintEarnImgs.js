"use client";

import { finalMediaLink } from "@/commonFrontend";
import { P1 } from "@/components/text/Paragraphs";
import Image from "next/image";
import { useState } from "react";

export default function PaintEarnImgs({ selected, setSelected }) {
  const [hovering, setHovering] = useState(null);
  return (
    <>
      <div
        onMouseEnter={() => setHovering("artist")}
        onMouseLeave={() => setHovering(null)}
        onClick={() => setSelected("artist")}
        className={`flex flex-col gap-5 justify-center items-center ${
          selected === "artist" && (hovering === null || hovering === "artist")
            ? "text-yellow"
            : "grayscale"
        } hover:grayscale-0 hover:text-yellow`}
      >
        <div className="relative w-full aspect-square transition-all duration-150">
          <Image
            className="rounded-full cursor-none"
            src={finalMediaLink("images/proudCat_artist_squared.jpg")}
            alt="Artist"
            fill
            onClick={() => setSelected("artist")}
          />
        </div>
        <P1 translationPath="paintEarn/p1" />
      </div>
      <div
        onMouseEnter={() => setHovering("startupper")}
        onMouseLeave={() => setHovering(null)}
        onClick={() => setSelected("startupper")}
        className={`flex flex-col gap-5 justify-center items-center ${
          selected === "startupper" &&
          (hovering === null || hovering === "startupper")
            ? "text-yellow"
            : "grayscale"
        } hover:grayscale-0 hover:text-yellow transition-all duration-150`}
      >
        <div className="relative w-full aspect-square">
          <Image
            className="rounded-full scale-x-[-1] cursor-none"
            src={finalMediaLink("images/proudCat_enterpreneur_squared.jpg")}
            alt="Startupper"
            fill
            onClick={() => setSelected("startupper")}
          />
        </div>
        <P1 translationPath="paintEarn/p2" />
      </div>
    </>
  );
}

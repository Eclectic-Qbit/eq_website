"use client";

import { finalMediaLink } from "@/commonFrontend";
import { P1, P2, P4 } from "@/components/text/Paragraphs";
import Image from "next/image";
import { useState } from "react";

function Card({ img, title, name, social }) {
  const [rotate, setRotate] = useState(false);
  return (
    <div
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
      className={`relative w-[25rem] h-[30rem] border-2 border-solid border-white rounded-xl transition-all duration-[500ms] ease-in overflow-hidden`}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center",
        transform: `${rotate ? "rotateY(-180deg)" : ""}`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full text-center bg-white flex items-center justify-center"
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="relative w-28 aspect-square">
          <Image src={finalMediaLink(`images/team/${img}`)} alt={name} fill />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full text-center bg-green transition-all duration-150 ease-in`}
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <P2>{title}</P2>
      </div>
    </div>
  );
}
export default function Squad() {
  return (
    <div className="relative top-0 left-0 w-full h-full min-h-screen flex flex-wrap items-center justify-center gap-5">
      <Card
        img="1.png"
        title="web3 pathfinder & vanguard of gaming real realms"
        name="Tabata"
        social=""
      />
      <Card
        img="1.png"
        title="web3 pathfinder & vanguard of gaming real realms"
        name="Tabata"
        social=""
      />
      <Card
        img="1.png"
        title="web3 pathfinder & vanguard of gaming real realms"
        name="Tabata"
        social=""
      />
    </div>
  );
}

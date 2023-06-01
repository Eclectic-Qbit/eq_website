"use client";
import { finalMediaLink } from "@/commonFrontend";
import Image from "next/image";
import { useRef, useState } from "react";
import { H1 } from "../text/Headers";

function Card() {
  const [state, setState] = useState("hidden");
  return (
    <div className="relative w-[16rem] aspect-square">
      <Image src={finalMediaLink("/images/memory.png")} alt="card" fill />
    </div>
  );
}
export default function MemoryGame() {
  const cards = useRef([0, 0, 0, 0, 0]);
  return (
    <div className="relative bg-black">
      <H1>Memory</H1>
      <div
        className={`flex flex-wrap max-w-[48rem] justify-center items-center`}
      >
        {cards.current.map((el, i) => {
          return <Card key={i} />;
        })}
      </div>
    </div>
  );
}

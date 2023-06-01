"use client";
import { finalMediaLink } from "@/commonFrontend";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { H1 } from "../text/Headers";
import { P1 } from "../text/Paragraphs";

function Card({ pos, active, onClick, won, reset }) {
  const [state, setState] = useState(!won ? "hidden" : "visible");
  const changeState = useCallback(() => {
    if (state === "hidden") {
      setState("visible");
    } else {
      setState("hidden");
    }
  }, [state]);
  useEffect(() => {
    if (reset) {
      setState("hidden");
    }
  }, [reset]);
  return (
    <div
      onClick={() => {
        if (active && !won) {
          changeState();
          onClick(pos);
        }
      }}
      className={`relative w-[16rem] aspect-square border-2 border-solid border-black transition-all duration-[1s] ease-in`}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center",
        transform: `${state === "visible" ? "rotateY(-180deg)" : ""}`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full text-center bg-white backface-hidden"
        style={{ backfaceVisibility: "hidden" }}
      >
        <P1>Front</P1>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full text-center bg-red-500"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <Image src={finalMediaLink("images/memory.png")} alt="" fill />
      </div>
    </div>
  );
}
export default function MemoryGame() {
  const cards = useRef([0, 0, 1]);
  const [activated, setActivated] = useState([]);
  const [won, setWon] = useState([]);
  const [reset, setReset] = useState([]);
  const [wait, setWait] = useState(false);
  function handleClick(pos) {
    setWait(true);
    setTimeout(() => {
      if (activated.length === 0) {
        setReset([]);
        const newArr = [...activated];
        newArr.push(pos);
        setActivated(newArr);
      } else if (activated.length === 1) {
        if (cards.current[activated[0]] === cards.current[pos]) {
          const newArr = [...won];
          newArr.push(cards.current[0]);
          setWon(newArr);
        } else {
          const newArr = [activated[0], pos];
          setReset(newArr);
        }
        setActivated([]);
      } else {
        console.error("Game Error!");
      }
      setWait(false);
    }, 1000);
  }
  return (
    <div className="relative bg-black">
      <H1>Memory</H1>
      <div
        className={`flex flex-wrap max-w-[48rem] justify-center items-center`}
      >
        {cards.current.map((el, i) => {
          return (
            <Card
              key={i}
              pos={i}
              won={won.includes(el) ? true : false}
              reset={reset.includes(i) ? true : false}
              active={activated.length < 2 && !wait ? true : false}
              onClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}

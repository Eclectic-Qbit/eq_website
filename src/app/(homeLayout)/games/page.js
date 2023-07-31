"use client";

import { H8 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";
import Image from "next/image";
import memoryGame from "../../../../public/images/games/memoryGame.png";
import fallbackImg from "../../../../public/images/games/fallback.png";
import CustomLink from "@/components/global/CustomLink";
import { cloneElement, useEffect, useState } from "react";

function Game({ name, img, link }) {
  const [component, setComponent] = useState(null);
  useEffect(() => {
    setComponent(
      cloneElement(link ? <CustomLink /> : <div />, {
        noUnderline: true,
        href: link ? `/games${link}` : "/games",
        className:
          "relative group grid gap-4 w-[15rem] sm:w-[15rem] xl:w-[20rem] rounded-xl py-2 px-8 transition-all",
        style: { gridTemplateRows: "1fr 2fr" },
        children: (
          <>
            <P1 className={"flex justify-center items-center text-center"}>
              {name}
            </P1>
            <div className="relative w-full aspect-square group-hover:scale-[1.1] transition-all">
              <Image src={img ? img : fallbackImg} alt={name} fill />
            </div>
          </>
        ),
      })
    );
  }, [img, link, name]);
  return component;
}

export default function Games() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center xl mb-8">
      <H8 className={"text-center"}>Games:</H8>
      <div className="flex flex-wrap justify-center gap-10 ">
        <Game name={"Memory"} img={memoryGame} link={"/memory"} />
        <Game name={"Coming soon..."} img={null} link={null} />
      </div>
    </div>
  );
}

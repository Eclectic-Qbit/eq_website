"use client";

import Link from "next/link";
import { P1, P1SP } from "../text/Paragraphs";
import { InstagramLogo, TwitterLogo } from "../logos/BorderLogo";
import { LinkedinLogo } from "../logos/FullLogo";
import Image from "next/image";
import { cloneElement, useEffect, useState } from "react";
import { isDesktop } from "@/commonFrontend";
import malpegadosWhite from "../../../public/images/collabs/malpegadosWhite.png";
// Cards for squad section
export default function SquadCard({ img, name, langs, social }) {
  const [rotate, setRotate] = useState(false);
  return (
    <div
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
      onClick={() => {
        if (!isDesktop(window.innerWidth)) {
          setRotate(!rotate);
        }
      }}
    >
      <div
        className={`relative w-[12rem] h-[15rem] sm:w-[20rem] sm:h-[24rem] border-2 border-solid border-white rounded-xl transition-all duration-[500ms] ease-in`}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform: `${rotate ? "rotateY(-180deg)" : ""}`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full text-center bg-white rounded-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full aspect-square rounded-xl">
            <Image priority src={img} alt={name} fill />
          </div>
          <div className="text-black font-bold w-full h-[3rem] sm:h-[4rem] flex items-center justify-center border-[0.25rem] border-solid border-black rounded-b-xl">
            <P1 className="uppercase">{name}</P1>
          </div>
        </div>
        <div
          className={`absolute flex items-center justify-center p-4 top-0 left-0 w-full h-full text-center bg-[rgba(255,255,255,0.075)] transition-all duration-150 ease-in rounded-xl overflow-hidden`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <P1SP
            className="uppercase font-bold"
            translationPath={`squad/${name.toLowerCase()}`}
          />
          <div className="absolute bottom-2 left-2 flex">
            {social &&
              social.map((el, i) => {
                if (el.social === "instagram") {
                  return (
                    <Link
                      className="cursor-none"
                      target="_blank"
                      key={i}
                      href={el.link}
                    >
                      <div className="relative w-[1.5rem] sm:w-[2rem] aspect-square">
                        <InstagramLogo
                          fill={"white"}
                          width={"100%"}
                          height={"100%"}
                        />
                      </div>
                    </Link>
                  );
                } else if (el.social === "linkedin") {
                  return (
                    <Link
                      className="cursor-none"
                      target="_blank"
                      key={i}
                      href={el.link}
                    >
                      <div
                        key={i}
                        className="relative w-[1.5rem] sm:w-[2rem] aspect-square"
                      >
                        <LinkedinLogo
                          fill={"white"}
                          width={"100%"}
                          height={"100%"}
                        />
                      </div>
                    </Link>
                  );
                } else if (el.social === "twitter") {
                  return (
                    <Link
                      className="cursor-none"
                      target="_blank"
                      key={i}
                      href={el.link}
                    >
                      <div
                        key={i}
                        className="relative w-[1.5rem] sm:w-[2rem] aspect-square"
                      >
                        <TwitterLogo
                          fill={"white"}
                          width={"100%"}
                          height={"100%"}
                        />
                      </div>
                    </Link>
                  );
                }
              })}
          </div>
          <div className="absolute max flex justify-center items-center bottom-0 right-2 flex">
            {langs &&
              langs.map((el, i) => {
                return (
                  <div key={i} className="relative w-[2rem] h-[2rem]">
                    {el}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
// Cards in the index page (What we do, How we do it)
export function IndexCard({
  front,
  retro,
  form,
  color,
  pass,
  frontBg,
  retroBg,
}) {
  const [rotate, setRotate] = useState(false);
  const passFront = pass && pass.front;
  const passRetro = pass && pass.retro;
  const [parsedFront, setParsedFront] = useState(front);
  const [parsedRetro, setParsedRetro] = useState(retro);
  useEffect(() => {
    if (passRetro) {
      const retroObj = {
        forceActive:
          passRetro && passRetro.includes("forceActiveWhenRotate") && rotate,
      };
      setParsedRetro(cloneElement(retro, retroObj));
    }
  }, [passRetro, retro, rotate]);
  return (
    <div
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
      onClick={() => {
        if (!isDesktop(window.innerWidth)) {
          setRotate(!rotate);
        }
      }}
      className="bg-black"
    >
      <div
        className={`relative z-10 ${
          form === "square"
            ? "w-[15rem] min-h-[12.5rem] sm:w-[20rem] sm:min-h-[12.5rem]"
            : "w-[17rem] min-h-[30rem] sm:w-[25rem] sm:min-h-[30rem] lg:w-[42.5rem] lg:min-h-[18rem]"
        } bg-[rgba(0,0,0,1)] h-max border-2 border-solid border-white rounded-xl p-4 transition-all duration-[500ms] ease-in`}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform: `${rotate ? "rotateY(-180deg)" : ""}`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-2 sm:px-4 rounded-xl "
          style={{ backfaceVisibility: "hidden" }}
        >
          {parsedFront}
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center px-2 sm:px-4 rounded-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: retroBg,
          }}
        >
          {parsedRetro}
        </div>
      </div>
    </div>
  );
}
export function DanteCard({ children }) {
  const [rotate, setRotate] = useState(false);
  return (
    <div
      onClick={() => {
        setRotate(!rotate);
      }}
    >
      <div
        className="relative w-[14rem] xl:w-[24rem] aspect-[3/4] transition-all duration-[500ms] ease-in bg-[rgba(0,0,0,1)] border-2 border-solid border-white rounded-xl"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          transform: `${rotate ? "rotateY(-180deg)" : ""}`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          {children}
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(-180deg)",
          }}
        >
          <div className="relative w-full  aspect-[5/1] m-8 hover:m-2 transition-all duration-150 ease-in">
            <Link
              className="cursor-none"
              href="https://malpegados.jimdosite.com/"
              target="_blank"
            >
              <Image src={malpegadosWhite} alt="Malpegados" fill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

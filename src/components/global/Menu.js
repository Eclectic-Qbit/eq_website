"use client";

import { useEffect, useRef, useState } from "react";
import EclicticLogo from "../logos/EclicticLogo";
import CustomLink from "./CustomLink";
import Magnifier from "../logos/Magnifier";
import { H4, H6, H8, H9 } from "../text/Headers";
import { P1, P2, P3 } from "../text/Paragraphs";

export default function Menu() {
  const lastScroll = useRef(0);
  const [show, setShow] = useState(true);
  //const [searchbarText, setSearchbarText] = useState("");
  function handleScroll() {
    if (scrollY > lastScroll.current) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScroll.current = scrollY;
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed h-[10vh] bg-black z-20 top-0 left-0 flex items-center gap-2 w-full h-max text-3xl py-[1vh] px-[2%] ${
        !show && "-translate-y-full"
      } transition ease-out duration-300 border-b-2 border-solid border-white`}
    >
      <div className="flex items-center">
        <EclicticLogo
          className="w-20 aspect-square transition-all duration-150 ease-in"
          height={"100%"}
          width={"100%"}
          fill="white"
        />
        <div>
          <P2>eclectic</P2>
          <P2>qbit</P2>
        </div>
      </div>
      <div className="flex uppercase items-center justify-end w-full lg:gap-4 sm:gap-3-auto text-center">
        {/* NOT NECESSARY
        <button className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
        </button>
        */}
        <div className="grid gap-0.5 md:flex md:gap-3">
          <CustomLink href="/">
            <P3 translationPath="menu/home" />
          </CustomLink>
          <CustomLink href="/brojects">
            <P3 translationPath="menu/brojects" />
          </CustomLink>
          <CustomLink href="/collabs">
            <P3 translationPath="menu/collabs" />
          </CustomLink>
          <CustomLink href="/team">
            <P3 translationPath="menu/team" />
          </CustomLink>
          <CustomLink href="/contacts">
            <P3 translationPath="menu/contacts" />
          </CustomLink>
        </div>

        {/* NOT NECESSARY:
        <div className="relative flex items-center border-2 border-solid border-white max-w-[20vw]">
          <button className="w-12 relative scale-50">
            <Magnifier fill="white" />
          </button>
          <input
            onClick={() => setSearchbarText("Not yet amigo :)")}
            onBlur={() => setSearchbarText("")}
            defaultValue={searchbarText}
            type="text"
            className="w-full h-full bg-black focus:outline-none text-2xl"
          />
        </div>
        */}
      </div>
    </div>
  );
}

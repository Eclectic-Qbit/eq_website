"use client";

import { useEffect, useRef, useState } from "react";
import EclicticLogo from "../logos/EclicticLogo";
import CustomLink from "./CustomLink";
import Magnifier from "../logos/Magnifier";
import { H4, H6, H8, H9 } from "../text/Headers";

export default function Menu() {
  const lastScroll = useRef(0);
  const [show, setShow] = useState(true);
  const [searchbarText, setSearchbarText] = useState("");
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
      className={`fixed h-[10vh] bg-black z-20 top-0 left-0 flex items-center gap-2 w-full h-max text-3xl px-[2%] ${
        !show && "-translate-y-full"
      } transition ease-out duration-300 border-b-2 border-solid border-white`}
    >
      <div className="flex items-center">
        <EclicticLogo
          className="w-12 lg:w-24 sm:w-16 aspect-square transition-all duration-150 ease-in"
          height={"100%"}
          width={"100%"}
          fill="white"
        />
        <div>
          <H9>eclectic</H9>
          <H9>qbit</H9>
        </div>
      </div>
      <div className="flex items-center justify-end w-full gap-2 lg:gap-4 sm:gap-3-auto text-center">
        {/* NOT NECESSARY
        <button className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
        </button>
        */}
        <CustomLink href="/">
          <H9>HOME</H9>
        </CustomLink>
        <CustomLink href="/brojects">
          <H9>BROJECTS</H9>
        </CustomLink>
        <CustomLink href="/collabs">
          <H9>COLLABS</H9>
        </CustomLink>
        <CustomLink href="/team">
          <H9>TEAM</H9>
        </CustomLink>
        <CustomLink href="/contacts">
          <H9>CONTACTS</H9>
        </CustomLink>
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

"use client";

import Magnifier from "../../../public/svgs/Magnifier";
import { useEffect, useRef, useState } from "react";
import EclicticLogo from "../../../public/svgs/EclicticLogo";
import CustomLink from "./CustomLink";

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
      className={`fixed h-[10vh] bg-black z-20 top-0 left-0 flex items-center gap-4 w-full text-3xl px-8 ${
        !show && "-translate-y-full"
      } transition ease-out duration-300 border-b-2 border-solid border-white`}
    >
      <div className="flex items-center h-full">
        <EclicticLogo
          className="w-16 aspect-square"
          height={"100%"}
          width={"100%"}
          fill="white"
        />
        <div>
          <h1>Eclectic</h1>
          <h1>Qbit</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 ml-auto text-center">
        <button className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
        </button>
        <CustomLink href="/">
          <h1>HOME</h1>
        </CustomLink>
        <CustomLink href="/brojects">
          <h1>BROJECTS</h1>
        </CustomLink>
        <CustomLink href="/collabs">
          <h1>COLLABS</h1>
        </CustomLink>
        <CustomLink href="/team">
          <h1>TEAM</h1>
        </CustomLink>
        <CustomLink href="/contacts">
          <h1>CONTACTS</h1>
        </CustomLink>
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
      </div>
    </div>
  );
}

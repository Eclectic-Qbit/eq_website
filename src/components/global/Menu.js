"use client";

import { useContext, useEffect, useRef, useState } from "react";
import CustomLink from "./CustomLink";
import { P1, P2, P3 } from "../text/Paragraphs";
import Image from "next/image";
import ScrollContext from "@/contexts/ScrollContext";
import { finalMediaLink } from "@/commonFrontend";

export default function Menu() {
  const lastScroll = useRef(0);
  const [show, setShow] = useState(true);
  const { scroll } = useContext(ScrollContext);
  //const [searchbarText, setSearchbarText] = useState("");
  useEffect(() => {
    if (scroll > lastScroll.current) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScroll.current = scroll;
  }, [scroll]);
  return (
    <div
      className={`fixed h-[10vh] bg-black z-20 top-0 left-0 flex items-center gap-2 w-full h-max text-3xl px-[2%] ${
        !show && "-translate-y-full"
      } transition ease-out duration-300 border-b-2 border-solid border-white cursor-none`}
    >
      <div className="relative flex items-center h-[7.5vh] aspect-[35/12]">
        <Image
          src={finalMediaLink("images/fullIcon_white.png")}
          alt="Logo"
          fill
        />
      </div>
      <div className="flex uppercase items-center justify-end w-full lg:gap-4 sm:gap-3-auto text-center">
        {/* NOT NECESSARY
        <button className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
          <div className="w-12 h-1 bg-white rounded-xl" />
        </button>
        */}
        <div className="grid gap-0.5 md:flex md:gap-3 py-[1vh]">
          <CustomLink href="/">
            <P3 translationPath="menu/home" />
          </CustomLink>
          <CustomLink href="/brojects">
            <P3 translationPath="menu/brojects" />
          </CustomLink>
          <CustomLink href="/collabs">
            <P3 translationPath="menu/collabs" />
          </CustomLink>
          <CustomLink href="/squad">
            <P3 translationPath="menu/squad" />
          </CustomLink>
          <CustomLink href="/contacts">
            <P3 translationPath="menu/contacts" />
          </CustomLink>
          <div>
            <div>currentLang</div>
            <div>otherlangs</div>
          </div>
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

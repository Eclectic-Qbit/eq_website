"use client";

import { useContext, useEffect, useRef, useState } from "react";
import CustomLink from "./CustomLink";
import { P1, P2, P3 } from "../text/Paragraphs";
import Image from "next/image";
import ScrollContext from "@/contexts/ScrollContext";
import { finalMediaLink } from "@/commonFrontend";
import LanguageContext from "@/contexts/LanguageContext";
import settings from "@/frontendSettings";
import LoadingAnimation from "../animations/LoadingAnimation";
import { H4 } from "../text/Headers";
import translations from "@/translations";

export default function Menu() {
  const lastScroll = useRef(0);
  const [show, setShow] = useState(true);
  const [openLang, setOpenLang] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const { scroll } = useContext(ScrollContext);
  const { lang, setLang } = useContext(LanguageContext);
  const languages = useRef({ en: "🍔", es: "🌮", it: "🍝", fr: "🥐" });
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
      {errorMsg && (
        <div
          onClick={() => setErrorMsg(null)}
          className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50"
        >
          {errorMsg}
        </div>
      )}
      <div className="relative flex items-center h-[7.5vh] aspect-[35/12]">
        <Image
          src={finalMediaLink("images/fullIcon_white.png")}
          alt="Logo"
          fill
        />
      </div>
      <div className="flex uppercase items-center justify-end w-full lg:gap-4 sm:gap-3-auto text-center">
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
          <div className="relative flex flex-row sm:flex-col flex-wrap">
            <div onClick={() => setOpenLang(!openLang)}>
              <P3>{languages.current[lang]}</P3>
            </div>
            <div
              className={`absolute ${
                openLang ? "opacity-1" : "opacity-0"
              } bottom-0 left-0 flex bg-black sm:flex-col translate-x-[33%] sm:translate-x-0 sm:translate-y-full transition-all duration-[500ms] ease-in overflow-hidden`}
            >
              {Object.keys(languages.current).map((e, i) => {
                if (e !== lang) {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        if (settings.languages.ready.includes(e)) {
                          setLang(e);
                        } else {
                          setErrorMsg(
                            <LoadingAnimation
                              elements={[<H4>{translations.notFound[e]}</H4>]}
                              coeffs={[1]}
                              delay={500}
                            />
                          );
                        }
                      }}
                    >
                      <P3>{languages.current[e]}</P3>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

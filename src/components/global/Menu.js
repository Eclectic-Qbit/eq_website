"use client";

import { useContext, useEffect, useRef, useState } from "react";
import CustomLink from "./CustomLink";
import { P3, P4 } from "../text/Paragraphs";
import Image from "next/image";
import ImgIcon from "../../../public/images/fullIcon_white.png";
import ScrollContext from "@/contexts/ScrollContext";
import LanguageContext from "@/contexts/LanguageContext";
import settings from "@/frontendSettings";
import LoadingAnimation from "../animations/LoadingAnimation";
import { H4 } from "../text/Headers";
import translations from "@/translations";
import Link from "next/link";
import CurrentPageContext from "@/contexts/CurrentPageContext";
import { DiscordLogo } from "../logos/FullLogo";
import AuthContext from "@/contexts/AuthContext";

function LoginHandle() {
  return (
    <Link
      href={
        process.env.NEXT_PUBLIC_IS_TESTING_ENV
          ? "https://discord.com/api/oauth2/authorize?client_id=1122867395720134716&redirect_uri=http%3A%2F%2Flocalhost%3A3500%2Flogin%2Fdiscord%2Fcallback&response_type=code&scope=identify"
          : "https://discord.com/api/oauth2/authorize?client_id=1122867395720134716&redirect_uri=https%3A%2F%2Feclecticqbit.art%3A3500%2Flogin%2Fdiscord%2Fcallback&response_type=code&scope=identify"
      }
      className="flex justify-center gap-2 bg-purple py-2 px-4 rounded-xl cursor-none"
    >
      <P4 className={"uppercase"}>Log-in</P4>
      <div className={"h-[1rem] xl:h-[1.25rem] md:h-[1.125rem]"}>
        <DiscordLogo height={"100%"} width={"100%"} fill={"white"} />
      </div>
    </Link>
  );
}
function UserSection({ userInfo }) {
  return (
    <CustomLink className="cursor-none" href={"/user"} noUnderline>
      <div className="relative h-[2rem] xl:h-[2.5rem] md:h-[2.25rem] aspect-square">
        <Image
          className="rounded-full"
          src={`https://cdn.discordapp.com/avatars/${userInfo.id}/${userInfo.avatar}.png`}
          alt="PFP"
          fill
        ></Image>
      </div>
    </CustomLink>
  );
}

export default function Menu() {
  const [show, setShow] = useState(true);
  const [openLang, setOpenLang] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [dotStyle, setDotStyle] = useState({ top: 0, right: 0 });
  const { scroll } = useContext(ScrollContext);
  const { lang, setLang } = useContext(LanguageContext);
  const { page } = useContext(CurrentPageContext);
  const lastScroll = useRef(0);
  const languages = useRef({ en: "🍔", es: "🌮", it: "🍝", fr: "🥐" });
  const ref = useRef(null);
  const { userInfo } = useContext(AuthContext);
  /*
  useEffect(() => {
    const newStyle = {};
    const dir = Math.floor(Math.random() * 2);
    dir === 0 ? (newStyle.left = 0) : (newStyle.right = 0);
    const height = Math.floor(
      Math.random() * (ref.current.clientHeight - dotRef.current.clientHeight)
    );
    newStyle.top = height;
    setDotStyle(newStyle);
  }, [page]);
  */
  useEffect(() => {
    if (scroll > lastScroll.current) {
      setShow(false);
      setOpenLang(false);
    } else {
      setShow(true);
    }
    lastScroll.current = scroll;
  }, [scroll]);
  return (
    <div
      ref={ref}
      className={`fixed h-[10vh] bg-black z-20 top-0 left-0 flex items-center gap-2 w-full h-max text-3xl ${
        !show && "-translate-y-full"
      } transition ease-out duration-300 border-b-2 border-solid border-white cursor-none`}
    >
      {/* 
      <div
        className="absolute top-0 right-0 flex justify-center h-full w-[2%] h-min"
        style={dotStyle}
      >
        <CustomLink noUnderline href={"/story"}>
          <div ref={dotRef} className="w-2 h-2 bg-white rounded-full" />
        </CustomLink>
      </div>
      */}
      {errorMsg && (
        <div
          onClick={() => {
            if (window.innerWidth > settings.mobileView) {
              setErrorMsg(null);
            }
          }}
          className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50"
        >
          {errorMsg}
        </div>
      )}
      <div className="flex w-full px-[2%]">
        <div className="flex items-center justify-start w-full">
          <CustomLink
            noUnderline
            href={"/story"}
            className="relative cursor-none flex items-center h-[5vh] sm:h-[7.5vh] aspect-[35/12] transition-all duration-150 ease-in"
          >
            <Image src={ImgIcon} alt="Logo" fill sizes="100%" />
          </CustomLink>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="uppercase md:flex md:gap-4 text-center">
            <CustomLink href="/">
              <P3 translationPath="menu/home" />
            </CustomLink>
            <CustomLink href="/paint&earn">
              <P3 translationPath="menu/paintEarn" />
            </CustomLink>
            <CustomLink href="/squad">
              <P3 translationPath="menu/squad" />
            </CustomLink>
            <CustomLink href="/games">
              <P3>🕹️</P3>
            </CustomLink>
          </div>
        </div>
        <div className="flex justify-end md:gap-2 items-center w-full">
          <div className="grid gap-1 md:flex md:gap-4 text-right">
            <div className={`relative flex flex-row sm:flex-col flex-wrap`}>
              <P3
                className={`flex flex-wrap justify-center items-center transition-all duration-150 gap-1`}
              >
                <div
                  className="sm:hover:scale-[1.15] text-center"
                  onClick={() => setOpenLang(!openLang)}
                >
                  {languages.current[lang]}
                </div>
                {openLang &&
                  Object.keys(languages.current).map((e, i) => {
                    if (e !== lang) {
                      return (
                        <div
                          key={i}
                          className="sm:hover:scale-[1.15] transition-all duration-150"
                          onClick={() => {
                            if (settings.languages.ready.includes(e)) {
                              setLang(e);
                              localStorage.setItem("lang", e);
                            } else {
                              if (
                                window.innerWidth > settings.mobileView &&
                                openLang
                              ) {
                                setErrorMsg(
                                  <LoadingAnimation
                                    elements={[
                                      <H4 key={0}>
                                        {translations.notFound[e]}
                                      </H4>,
                                    ]}
                                    coeffs={[1]}
                                    delay={1000}
                                    className={"text-center"}
                                  />
                                );
                              }
                            }
                          }}
                        >
                          <P3>{languages.current[e]}</P3>
                        </div>
                      );
                    }
                  })}
              </P3>
            </div>
          </div>
          {userInfo ? <UserSection userInfo={userInfo} /> : <LoginHandle />}
        </div>
      </div>
    </div>
  );
}

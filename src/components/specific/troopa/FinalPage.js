"use client";

import { H4 } from "@/components/text/Headers";
import { P1, P2, P3, P4 } from "@/components/text/Paragraphs";
import eth_image from "../../../../public/images/ethBarcelona.gif";
import barcelona from "../../../../public/images/barcelona.jpg";
import Image from "next/image";
import Link from "next/link";
import LoadingAnimation from "@/components/animations/LoadingAnimation";
import { getImageFromIndex } from "@/commonFrontend";
import { useRef, useState } from "react";

export default function FinalPage({ userInfo, avatar, username, city }) {
  const [rotate, setRotate] = useState(false);
  return (
    <>
      {/*
      <LoadingAnimation
        elements={[
          <P1 key={0} className={"uppercase"}>
            Hey There!
          </P1>,
          <P2 key={1}>
            Please, keep in mind that this is a temporary page! Styling and
            layout updates will be provided very soon
          </P2>,
        ]}
        delay={1000}
        fadeDuration={750}
        className="z-30 fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-center"
      />*/}
      <div className="flex flex-col sm:flex-row wrap w-full h-full justify-center items-center mt-28 sm:mt-24">
        <div
          onMouseEnter={() => setRotate(true)}
          onMouseLeave={() => setRotate(false)}
        >
          <div
            className="relative transition-all duration-500 ease-in"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center",
              transform: `${rotate ? "rotateY(-180deg)" : ""}`,
            }}
          >
            <div
              className="w-max h-max border-2 border-solid border-white rounded-xl"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <div className="w-full h-max py-4 px-2 flex justify-between">
                <P2 className={"w-max border-b-2 border-solid border-white"}>
                  {username}
                </P2>
                <P2 className={"w-max border-b-2 border-solid border-white"}>
                  {city}
                </P2>
              </div>
              <div className="relative w-[50vw] aspect-square min-w-[250px] max-w-[500px]">
                <Image
                  sizes="100%"
                  src={
                    avatar > -1
                      ? getImageFromIndex(avatar)
                      : `https://cdn.discordapp.com/avatars/${userInfo.discordId}/${avatar}.png`
                  }
                  fill
                  alt="PFP"
                />
              </div>
              <div className="flex gap-2 items-center w-full h-max py-4 px-2">
                <div className="relative w-full h-4 w-full bg-purple overflow-hidden rounded-xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-[2%] h-full bg-yellow" />
                </div>
                <P2>0/100XP</P2>
              </div>
            </div>
            <div
              className="absolute flex flex-col gap-8 w-full h-full top-0 left-0 bg-black border-2 border-solid border-white rounded-xl py-8 px-4"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div>
                <P2
                  className={"uppercase"}
                  translationPath={"privateTroopa/discordSection"}
                />
                <div className="grid gap-2 mt-2">
                  {userInfo.discordRoles.map((el, i) => {
                    return (
                      <div key={`role_${i}`}>
                        <P3 className={"pl-2"}>{el}</P3>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <P2
                  className={"uppercase"}
                  translationPath={"privateTroopa/gamePoints"}
                />
                <div className="grid gap-2 mt-2">
                  {userInfo.points ? (
                    userInfo.opt.points.map((el, i) => {
                      return (
                        <div className="pl-2" key={`game_${i}`}>
                          <div className="flex gap-2">
                            <P3>{`${el.specific} (${el.type})`} =&gt;</P3>
                            <P3 className={"pl-2"}>{el.amount}</P3>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="pl-2">
                      <div className="flex gap-2">
                        <P3
                          className={"lowercase"}
                          translationPath={"privateTroopa/noPoints"}
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <P3
                      className={"lowercase"}
                      translationPath={"privateTroopa/totalPoints"}
                      replace={[{ placeholder: "%VAL%", val: userInfo.points }]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
      <div className="relative min-h-screen w-full px-2 md:px-10 py-24 gap-10 flex flex-col md:grid md:grid-cols-[50%,50%]">
        <div className="flex flex-col justify-between w-full ">
          <div className="relative flex justify-center md:flex-col w-full h-full py-4">
            <div className="flex items-center justify-center gap-4 w-full">
              
            </div>
            {<P2>Current Role!</P2>}
          </div>
          <div className="flex flex-row items-center justify-center gap-10 flex-wrap w-full h-full border-t-2 border-solid border-white py-4">
            <div className="flex justify-center items-center w-[100px] h-[100px] md:w-[160px] md:h-[160px] aspect-square border-2 border-solid border-white">
              <H4>?</H4>
            </div>
            <div className="flex justify-center items-center w-[100px] h-[100px] md:w-[160px] md:h-[160px] border-2 border-solid border-white">
              <H4>?</H4>
            </div>
          </div>
          <div className="relative w-full h-full border-t-2 border-solid border-white text-center flex flex-col gap-2 pt-2">
            <P2>Meet our team</P2>
            <div className="flex gap-5 items-center">
              <div className="relative w-full p-2 h-max flex overflow-hidden">
                <div className="absolute top-0 left-0 w-full aspect-video">
                  <Image
                    sizes="100%"
                    className="opacity-[0.7] rounded-xl"
                    src={barcelona}
                    fill
                    alt="Barcelona"
                  />
                </div>
                <div className="relative z-10 flex justify-center items-center text-center w-full h-full">
                  <div className="relative h-[80px] w-[40px] md:h-[120px] md:w-[60px]">
                    <Image sizes="100%" src={eth_image} alt="ETH" fill />
                  </div>
                  <div className="w-full h-full text-center font-extrabold">
                    <Link
                      className="cursor-none flex flex-col gap-2"
                      target="_blank"
                      href="https://www.ethbarcelona.com/"
                    >
                      <P2 className={"hover:underline"}>ETH Barcelona!</P2>
                      <P4 className={"font-normal"}>
                        Meet our team @ ETH Barcelona!
                      </P4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full">
          { <div className="absolute top-0 left-0">
            <P2>Are you an artist???</P2>
          </div>}
  
          
        </div>*/}
      {/*<div className="relative w-max flex-col w-full h-full">
          <P2>Point Section</P2>
          {<div className="absolute bottom-0 left-0 flex justify-between w-full">
            <P2>Style</P2>
            <P2>Settings</P2>
          </div> }
        </div> */}
    </>
  );
}

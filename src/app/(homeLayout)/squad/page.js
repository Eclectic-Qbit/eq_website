"use client";

import { finalMediaLink } from "@/commonFrontend";
import { InstagramLogo, TwitterLogo } from "@/components/logos/BorderLogo";
import { LinkedinLogo } from "@/components/logos/FullLogo";
import { P1, P1SP, P2, P4 } from "@/components/text/Paragraphs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Card({ img, title, name, langs, social }) {
  const [rotate, setRotate] = useState(false);
  return (
    <div
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
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
            <Image
              priority
              src={finalMediaLink(`images/team/${img}`)}
              alt={name}
              fill
            />
          </div>
          <div className="text-black font-bold w-full h-[3rem] sm:h-[4rem] flex items-center justify-center border-[0.25rem] border-solid border-black rounded-b-xl">
            <P1 className="uppercase">{name}</P1>
          </div>
        </div>
        <div
          className={`absolute flex items-center justify-center p-4 top-0 left-0 w-full h-full text-center bg-[rgba(255,255,255,0.075)] transition-all duration-150 ease-in rounded-xl overflow-hidden`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <P1SP className="uppercase font-bold">{title}</P1SP>
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
export default function Squad() {
  return (
    <div className="relative pt-32 pb-4 sm:pt-28 sm:pb-12 top-0 left-0 w-full h-full min-h-screen flex flex-wrap items-center justify-center gap-5">
      <Card
        img="4.png"
        name="Tabata"
        title="web3 pathfinder & vanguard of gaming real realms"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/tabata-mussone-287426142",
          },
        ]}
        langs={["🇬🇧", "🇮🇹", "🇪🇸", "🇫🇷"]}
      />
      <Card
        img="3.png"
        name="Enrico"
        title="code alchemist of digital domination"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/enrico-pasetto-6a48a5193/",
          },
        ]}
        langs={["🇬🇧", "🇮🇹"]}
      />
      <Card
        img="6.png"
        name="Pipo"
        title="master of art & design dynamo"
        social={[
          {
            social: "instagram",
            link: "https://www.instagram.com/malpegados/",
          },
        ]}
        langs={["🇬🇧", "🇪🇸"]}
      />
      <Card
        img="7.png"
        name="Adytia"
        title="community spark & engagement virtuoso"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/aditya2525",
          },
        ]}
        langs={["🇬🇧", "🇮🇳"]}
      />
      <Card
        img="1.png"
        name="Axel"
        title="gaming maven & community stalwart"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/axel-nieto-418551167",
          },
        ]}
        langs={["🇬🇧", "🇪🇸", "🇫🇷", "🇩🇪"]}
      />
      <Card
        img="5.png"
        name="Abrayad"
        title="discord dominator & guild commander"
        social={[]}
        langs={["🇬🇧"]}
      />
      <Card
        img="8.png"
        name="Pariyeksh"
        title="partnerships prodigy & biz dev ace"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/pariyeksh-chauhan",
          },
        ]}
        langs={["🇮🇳", "🇬🇧"]}
      />
      <Card
        img="9.png"
        name="Milena"
        title="social media whiz & storytelling innovator"
        social={[
          {
            social: "linkedin",
            link: "https://www.linkedin.com/in/milena-antoni%C4%87-634237143",
          },
        ]}
        langs={["🇬🇧"]}
      />
    </div>
  );
}

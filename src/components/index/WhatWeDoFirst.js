import Link from "next/link";
import Image from "next/image";
import LogoLink from "../global/LogoLink";
import { DiscordLogo, RedditLogo, TelegramLogo } from "../logos/FullLogo";
import { InstagramLogo, TwitterLogo } from "../logos/BorderLogo";
import { H3, H4, H9 } from "../text/Headers";
import { P1 } from "../text/Paragraphs";

export default function WhatWeDoFirst() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute z-10 top-4 right-4 flex flex-col gap-3">
        <LogoLink href="https://discord.gg/n3gxVeqq">
          <DiscordLogo fill={"black"} width={"100%"} height={"100%"} />
        </LogoLink>
        <LogoLink href="https://twitter.com/EclecticQbit">
          <TwitterLogo fill={"black"} width={"100%"} height={"100%"} />
        </LogoLink>
        <LogoLink href="https://www.reddit.com/user/Eclecticqbit/">
          <RedditLogo fill={"black"} width={"100%"} height={"100%"} />
        </LogoLink>
        <LogoLink href="https://instagram.com/eclecticqbit?igshid=YmMyMTA2M2Y=">
          <InstagramLogo fill={"black"} width={"100%"} height={"100%"} />
        </LogoLink>
        <LogoLink href="https://t.me/eclecticqbit">
          <TelegramLogo fill={"black"} width={"100%"} height={"100%"} />
        </LogoLink>
      </div>
      <div className="relative w-full">
        <div className="flex flex-wrap gap-8 mt-[5%] mx-32">
          <div className="flex flex-col justify-center gap-9 max-w-2xl xl:max-w-4xl">
            <div className="font-bold text-purple w-full">
              <H4>THIS IS</H4>
              <H3>WHAT WE DO</H3>
            </div>
            <div className="flex flex-wrap gap-3 lowercase w-full">
              <div className="grid gap-2">
                <H9 className="text-orange text-2xl">
                  🌌 Quantum Vibe: interdependence is the new independence 🕶️
                </H9>
                <P1>
                  eclectic qbit, it&apos;s all about bringing the modus operandi
                  of qbits, into web3, with a IT&apos;S A ME twist with nature
                  as our main inspiration, just like fungi, we exchange
                  nutrients and other resources within & beyond web3 space
                </P1>
              </div>
              <div className="grid gap-2">
                <H9 className="text-orange text-2xl">
                  🍄 Community Building: Joining Forces with Eclectic regens 🎮
                </H9>
                <P1>
                  we know that building a successful web3 project takes more
                  than just cutting-edge technology - it also requires a touch
                  of magic our eclectic regens will quantum leap your project to
                  the next level, infusing your community with the fun and
                  excitement that players of all ages have come to know and love
                </P1>
              </div>
            </div>
          </div>
          <div className="relative w-full h-min mx-auto my-auto relative flex items-center justify-center max-w-xs xl:max-w-md aspect-[3/4] grayscale hover:grayscale-0 transition-all ease-in duration-200">
            <Link
              className="relative w-full h-full"
              href="https://malpegados.jimdosite.com/"
              target="_blank"
            >
              <Image
                src={
                  true
                    ? "https://raw.githubusercontent.com/Eclectic-Qbit/eq_website/main/public/images/proudCat - latest.jpg"
                    : "/images/proudCat - latest.jpg"
                }
                fill
                sizes="100%"
                priority
                alt="Cat Logo"
                className="scale-100 hover:scale-110 transition rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

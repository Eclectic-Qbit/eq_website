"use client";

import { downloadFile } from "@/commonFrontend";
import { InstagramLogo, TwitterLogo } from "../logos/BorderLogo";
import { DiscordLogo, RedditLogo, TelegramLogo } from "../logos/FullLogo";
import { P3 } from "../text/Paragraphs";
import CustomLink from "./CustomLink";
import LogoLink from "./LogoLink";

export default function Footer() {
  const MAIL = "ama@eclecticqbit.art";
  const MAIL_SUBJ = "";
  const MAIL_BODY = "";
  return (
    <div className="border-t-2 border-solid border-white py-10">
      <div className="flex flex-wrap w-full h-full gap-[5%] justify-around items-center text-center">
        <div className="flex justify-center items-center gap-2 scale-[0.8]">
          <LogoLink href="https://discord.gg/8J3SXwUn7C">
            <DiscordLogo fill={"black"} width={"100%"} height={"100%"} />
          </LogoLink>
          <LogoLink href="https://twitter.com/EclecticQbit">
            <TwitterLogo fill={"black"} width={"100%"} height={"100%"} />
          </LogoLink>
          <LogoLink href="https://www.reddit.com/user/Eclecticqbit/">
            <RedditLogo fill={"black"} width={"100%"} height={"100%"} />
          </LogoLink>
          <LogoLink href="https://www.instagram.com/Eclecticqbit.art/">
            <InstagramLogo fill={"black"} width={"100%"} height={"100%"} />
          </LogoLink>
          <LogoLink href="https://t.me/eclecticqbit">
            <TelegramLogo fill={"black"} width={"100%"} height={"100%"} />
          </LogoLink>
        </div>
        <div className="flex flex-col justify-end items-center gap-2">
          <div className="w-min lowercase">
            <CustomLink href="/privacy">
              <P3>Privacy</P3>
            </CustomLink>
          </div>
          <div
            className="w-max lowercase"
            onClick={() => downloadFile("/mediaKit.pdf", "url")}
          >
            <CustomLink>
              <P3>Media Kit</P3>
            </CustomLink>
          </div>
        </div>
        <div className="text-center grid gap-2">
          <CustomLink
            href={`mailto:${MAIL}?subject=${encodeURIComponent(
              MAIL_SUBJ
            )}&body=${encodeURIComponent(MAIL_BODY)}`}
            target="_blank"
          >
            <P3>{MAIL}</P3>
          </CustomLink>
          <P3>IT01751460088</P3>
        </div>
      </div>
    </div>
  );
}

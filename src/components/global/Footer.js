import Link from "next/link";
import { InstagramLogo, TwitterLogo } from "../logos/BorderLogo";
import { DiscordLogo, RedditLogo, TelegramLogo } from "../logos/FullLogo";
import { P3 } from "../text/Paragraphs";
import CustomLink from "./CustomLink";
import LogoLink from "./LogoLink";

export default function Footer() {
  return (
    <div className="px-4 pb-4 border-t-2 border-solid border-white">
      <div className="grid grid-cols-3 w-full h-full gap-[5%] items-center text-center">
        <div className="flex flex-col justify-start gap-2 scale-[0.8]">
          <LogoLink href="https://discord.gg/8J3SXwUn7C">
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
        <div className="flex flex-col justify-end items-center gap-2">
          <div className="w-min">
            <CustomLink href="/">
              <P3 translationPath="menu/home" />
            </CustomLink>
          </div>
          {/* <div className="w-min">
            <CustomLink href="/brojects">
              <P3 translationPath="menu/brojects" />
            </CustomLink>
          </div>
          <div className="w-min">
            <CustomLink href="/collabs">
              <P3 translationPath="menu/collabs" />
            </CustomLink>
          </div> */}

          <div className="w-min">
            <CustomLink href="/squad">
              <P3 translationPath="menu/squad" />
            </CustomLink>
          </div>
        </div>
        {/* <div className="w-max -rotate-90 sm:rotate-0 -translate-x-[25%] sm:translate-x-[0%]">
          <CustomLink href="privacy">
            <P3>privacy</P3>
          </CustomLink>
        </div> */}
      </div>
      <div className="text-center">
        <P3>ama@eclecticqbit.art</P3>
      </div>
    </div>
  );
}

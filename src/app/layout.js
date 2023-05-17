import Menu from "@/components/global/Menu";
import "./globals.css";
import LoadingAnimation from "@/components/animations/LoadingAnimation";
import LanguageProvider from "@/components/global/LanguageProvider";
import LogoLink from "@/components/global/LogoLink";
import {
  DiscordLogo,
  RedditLogo,
  TelegramLogo,
} from "@/components/logos/FullLogo";
import { InstagramLogo, TwitterLogo } from "@/components/logos/BorderLogo";

export const metadata = {
  title: "Barrio Buidlers",
  description: "Interdipendence is the new indipendence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen min-w-screen bg-black text-white">
      <body>
        <LanguageProvider>
          <LoadingAnimation />
          <Menu />
          <div>
            <div className="absolute z-10 top-[50%] -translate-y-[50%] right-[2%] flex flex-col gap-3">
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
            <div className="mt-[2.5%]">{children}</div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

import Menu from "@/components/global/Menu";
import LogoLink from "@/components/global/LogoLink";
import {
  DiscordLogo,
  RedditLogo,
  TelegramLogo,
} from "@/components/logos/FullLogo";
import { InstagramLogo, TwitterLogo } from "@/components/logos/BorderLogo";
import { HomepageCursor } from "@/components/cursors/Cursors";
import LoadingScreen from "@/components/global/LoadingScreen";
import Footer from "@/components/global/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="cursor-none">
      <HomepageCursor />
      <LoadingScreen />
      <Menu />
      <div className="w-full">
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
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

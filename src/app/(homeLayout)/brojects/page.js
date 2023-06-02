import { MouseMoveGradient } from "@/components/animations/MouseMoveAnimations";
import { DiscordLogo } from "@/components/logos/FullLogo";
import StickySection from "@/components/specific/brojects/StickySection";
import { H3, H8 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";
import Image from "next/image";
import Link from "next/link";

export default function Brojects() {
  return (
    <div className="relative w-full h-full">
      <MouseMoveGradient
        className="w-auto text-center mx-auto uppercase font-extrabold mt-16"
        from="#9500E9"
        to="#FF6600"
      >
        <H3>Brojects</H3>
      </MouseMoveGradient>
      <div className="mt-10 p-10 flex gap-4">
        <div className="flex flex-col w-1/3 h-full gap-32">
          <StickySection>
            <div className="flex flex-col items-center justify-center gap-10">
              <H8>Stakeame</H8>
              <div className="relative w-64 aspect-[20/9]">
                <Link href="https://stakea.me">
                  <Image src="/images/stakeame.jpeg" alt="stameame" fill />
                </Link>
              </div>
              <div className="relative w-full h-full">Socials here</div>
            </div>
          </StickySection>
          <StickySection>
            <div className="flex items-center justify-center">
              <div className="relative w-64 aspect-[20/9]">
                <Link href="https://stakea.me">
                  <Image src="/images/stakeame.jpeg" alt="stameame" fill />
                </Link>
              </div>
            </div>
          </StickySection>
        </div>
        <div className="sticky m-10 p-10 top-0 w-full h-full border-2 border-solid border-white">
          <P1>Hello sticky world</P1>
        </div>
      </div>
    </div>
  );
}

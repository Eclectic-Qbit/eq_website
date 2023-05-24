import Link from "next/link";
import { MouseMoveGradient } from "../animations/MouseMoveAnimations";
import { H1, H2, H3, H5, H6, H7, H8, H9 } from "../text/Headers";
import { P1, P2, P3, P4 } from "../text/Paragraphs";
import Image from "next/image";

export default function EclecticQbit() {
  return (
    <div className="relative w-full min-h-screen">
      <div className="flex flex-wrap items-center justify-center font-extrabold uppercase w-full gap-y-10">
        <MouseMoveGradient
          className="w-auto text-center mx-auto"
          from="#9500E9"
          to="#FF6600"
        >
          <H2 translationPath="eclecticQbit/title/p1" />
          <H2 translationPath="eclecticQbit/title/p2" />
        </MouseMoveGradient>
        <div className="relative mx-auto flex items-center justify-center w-[16rem] xl:w-[24rem] aspect-[3/4] grayscale hover:grayscale-0 transition-all ease-in duration-200">
          <Link
            className="relative w-full h-full"
            href="https://malpegados.jimdosite.com/"
            target="_blank"
          >
            <Image
              src={
                true
                  ? "https://raw.githubusercontent.com/Eclectic-Qbit/eq_website/main/public/images/proudCat_theThird.jpg"
                  : "/images/proudCat_theThird.jpg"
              }
              fill
              sizes="100%"
              priority
              alt="Cat Logo"
              className="scale-100 hover:scale-105 transition rounded-xl"
            />
          </Link>
        </div>
      </div>
      <div className="realtive w-full h-full flex items-center justify-center gap-2 text-center">
        <div className="w-2/3">
          <P1
            style={{ textShadow: "1px 1px 1px white" }}
            translationPath="eclecticQbit/h1"
            className="text-purple uppercase font-bold mt-[2.5%]"
          />
          <P2
            style={{ textShadow: "2px 2px 2px black" }}
            translationPath="eclecticQbit/p1"
            className="text-yellow font-bold"
          />
        </div>
      </div>
    </div>
  );
}

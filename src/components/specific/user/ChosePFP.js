"use client";

import { P1, P2, P3 } from "@/components/text/Paragraphs";
import { useCallback, useEffect, useRef, useState } from "react";
import ImgTab from "../../../../public/images/team/4.png";
import ImgEnry from "../../../../public/images/team/3.png";
import ImgPipo from "../../../../public/images/team/6.png";
import ImgAdi from "../../../../public/images/team/7.png";
import ImgAxel from "../../../../public/images/team/1.png";
import ImgAbra from "../../../../public/images/team/5.png";
import ImgPari from "../../../../public/images/team/8.png";
import ImgMilena from "../../../../public/images/team/10.png";
import Image from "next/image";

export default function ChosePFP({ userInfo, setPfp }) {
  const [styles, setStyles] = useState([{}, {}, {}, {}]);
  const [active, setActive] = useState(0);
  const [images, setImages] = useState([
    ImgTab,
    ImgEnry,
    ImgPipo,
    ImgAdi,
    ImgAxel,
    ImgAbra,
    ImgPari,
    ImgMilena,
  ]);
  const index = useRef(0);
  async function setPFP(type) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ROUTE}users/${userInfo.id}`,
      {
        method: "PUT",
        body: {
          pfp: {
            id: userInfo.avatar,
            type: "discord",
            date: Date.now(),
          },
        },
      }
    );
    setPfp("discord");
  }
  useEffect(() => {
    setTimeout(
      () => {
        if (index.current < 4) {
          let transform = "translateY(-100vh)";
          let transition = "transform 2s 3s ease-in, opacity 0.5s 0.5s ease-in";
          if (index.current >= 3) {
            transform = "";
            transition = "opacity 0.5s ease-in";
          }
          const newArr = [...styles];
          newArr[index.current] = {
            opacity: 1,
            transform: transform,
            transition: transition,
          };
          setStyles(newArr);
          index.current += 1;
        }
      },
      index.current === 0 ? 500 : index.current === 3 ? 4000 : 3100
    );
  }, [styles]);
  return (
    <div className="relative min-h-screen w-full max-w-screen flex justify-center items-center flex-col text-center overflow-hidden">
      <div>
        <div className="opacity-0" style={styles[0]}>
          <P1>Welcome {userInfo.username}</P1>
        </div>
        <div className="opacity-0" style={styles[1]}>
          <P2>Seems like the first time you&apos;re in here</P2>
        </div>
        <div className="opacity-0" style={styles[2]}>
          <P2>
            Take your time and chose a PFP. Fear not, you&apos;ll be able to
            change it later
          </P2>
        </div>
      </div>
      <div
        className="opacity-0 absolute top-0 w-full h-full mt-8"
        style={{ ...styles[3], left: "calc(50vw - 250px)" }}
      >
        <div
          className={`flex h-full w-max justify-start items-center relative left-0 transition-all duration-[500ms] ease-in `}
          style={{
            transform: `translateX(-${(active / images.length) * 100}%)`,
          }}
        >
          {images.map((el, i) => {
            return (
              <div
                onClick={() => setActive(i)}
                className="w-[250px] sm:w-[500px] aspect-square shrink-0 hover:scale-[1.05] transition-scale duration-[500ms] eaase-in"
                key={`img_${i}`}
                style={{ zIndex: active === i ? 10 : 0 }}
              >
                <div
                  className={`${active !== i ? "grayscale" : ""} ${
                    active < i
                      ? "scale-[0.75]"
                      : active > i
                      ? "scale-[0.75]"
                      : ""
                  } w-full h-full transition-all duration-[150ms] ease-in`}
                >
                  <div
                    className={`relative w-full h-full ${
                      active < i
                        ? "rotate-[5deg]"
                        : active > i
                        ? "-rotate-[5deg]"
                        : ""
                    } transition-all duration-[650ms] ease-in`}
                  >
                    <Image
                      sizes="100%"
                      className={`${
                        active !== i ? "grayscale" : ""
                      } transition-all duration-[650ms] ease-in`}
                      src={el}
                      alt={i}
                      fill
                    />
                    <div
                      onClick={() => setPFP(i)}
                      className={`absolute bottom-0 z-10 bg-black border-2 border-solid border-white w-full p-4 ${
                        i === active ? "opacity-1" : "opacity-0"
                      } transition-all duration-[650ms] ease-in hover:underline`}
                    >
                      <P2>Confirm</P2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => setPFP("no")}
        style={styles[3]}
        className="absolute bottom-4 left-[50%] -translate-x-[50%] hover:underline cursor-none opacity-0"
      >
        <P3>Or keep your discord PFP</P3>
      </button>
    </div>
  );
}

"use client";

import { P1, P2, P3 } from "@/components/text/Paragraphs";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ChosePFP({
  userInfo,
  setPfp,
  images,
  state,
  skipIntro,
}) {
  const [styles, setStyles] = useState([{}, {}, {}, {}]);
  const [active, setActive] = useState(state ? state : 0);
  const index = useRef(skipIntro ? 3 : 0);
  async function setPFP(type) {
    /*
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
    */
    setPfp(type);
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
      index.current === 0
        ? 500
        : index.current === 3
        ? skipIntro
          ? 500
          : 4000
        : 3100
    );
  }, [skipIntro, styles]);
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
        className="opacity-0 absolute top-0 w-full h-full mt-8 left-[calc(50vw-calc(max(min(50vh,40vw),225px)/2))] sm:left-[calc(50vw-min(max(50vh,40vw),500px)/2)]"
        style={{ ...styles[3] }}
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
                className="w-[max(min(50vh,40vw),225px)] sm:w-[min(max(50vh,40vw),500px)] aspect-square shrink-0 hover:scale-[1.05] transition-scale duration-[500ms] eaase-in"
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
                      onClick={() => i === active && setPFP(i)}
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
        onClick={() => setPFP(-1)}
        style={styles[3]}
        className="absolute w-full bottom-4 left-[50%] -translate-x-[50%] hover:underline cursor-none opacity-0"
      >
        <P3>Or keep your discord PFP</P3>
      </button>
    </div>
  );
}

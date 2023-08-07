"use client";

import {
  discordLink,
  downloadFile,
  hexColorFromTailwind,
} from "@/commonFrontend";
import { MouseMoveGradient } from "@/components/animations/MouseMoveAnimations";
import { IndexCard } from "@/components/global/Cards";
import CustomLink from "@/components/global/CustomLink";
import PaintEarn from "@/components/specific/index/PaintEarn";
import { H4 } from "@/components/text/Headers";
import { P1, P2 } from "@/components/text/Paragraphs";
import { getUserData } from "@/helpers/userHelper";
import { getCookie } from "cookies-next";
import { cloneElement, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Link from "next/link";

export default function PaintAndEarn() {
  const [logged, setLogged] = useState(false);
  const [accomplishedRules, setAccomplishedRules] = useState(null);
  const rules = [
    { id: "firstCard", link: "https://discord.gg/eHN35GCB8w", blockedBy: null },
    {
      id: "secondCard",
      link: "https://docs.google.com/forms/d/1uAKl_MpdF0imY6UEbq-CgwcAocoLC8pX0Q2d4QgOiYc",
      blockedBy: null,
    },
    { id: "thirdCard", link: "", blockedBy: [1] },
    { id: "forthCard", link: "", blockedBy: [1, 2] },
    { id: "fifthCard", link: "", blockedBy: null }, // Not implemented (yet!)
    { id: "sixthCard", link: "", blockedBy: [5] }, // Not implemented (yet!)
  ];
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      const { id } = jwt.decode(token);
      getUserData(`${process.env.NEXT_PUBLIC_API_ROUTE}users/${id}?opt=true`, {
        Authorization: token,
      }).then((data) => {
        if (data) {
          const rules = data.paintEarnRules;
          setLogged(true);
          if (rules) {
            setAccomplishedRules(rules);
          }
        }
      });
    }
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="pt-20 mx-[10%] text-center flex flex-col justify-center items-center">
        <div className="my-[5%] realtive w-full h-full flex flex-col items-center justify-center gap-2 text-center">
          <MouseMoveGradient
            className="font-extrabold uppercase w-full text-center mb-5"
            from="#9500E9"
            to="#FF6600"
          >
            <H4 translationPath="paintEarn/title/p1" />
            <H4 translationPath="paintEarn/title/p2" />
          </MouseMoveGradient>
          <P2
            className={"text-yellow"}
            translationPath="paintEarn/description"
            style={{ textShadow: "2px 2px 2px black" }}
            spanStyling={{ backgroundColor: "#9500E9", lineHeight: "3.75vh" }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-20">
        <MouseMoveGradient
          className="font-extrabold uppercase w-full text-center"
          from="#9500E9"
          to="#FF6600"
        >
          <H4 className="uppercase" translationPath="paintEarn/howItWorks" />
        </MouseMoveGradient>
        <div className="mx-[5%]">
          <div className="flex flex-wrap text-center mt-20 mb-5 gap-5 items-center justify-center">
            {rules.map((el, i) => {
              const state = accomplishedRules && accomplishedRules[i].state;
              // Allowed only if there are no blocking rules or the blocking rules are completed
              const allowed =
                !state &&
                (!rules[i].blockedBy ||
                  (rules[i].blockedBy &&
                    accomplishedRules &&
                    rules[i].blockedBy.every(
                      (el) => accomplishedRules[el].state === "done"
                    )));
              const parent = allowed ? (
                <Link className="cursor-none" href={el.link} />
              ) : (
                <div />
              );
              const color =
                state === "done"
                  ? "green"
                  : state === "waiting"
                  ? "yellow"
                  : state === "rejected"
                  ? "orange"
                  : "white";
              const card = cloneElement(parent, {
                key: `card_${i}`,
                children: (
                  <IndexCard
                    form={"square"}
                    borderColor={hexColorFromTailwind(color)}
                    front={
                      <div
                        style={{ textShadow: "1px 1px 1px white" }}
                        className={`h-full font-bold uppercase flex flex-col justify-evenly ${
                          state ? "" : "grayscale text-[#C0C0C0]"
                        }`}
                      >
                        <P1
                          translationPath={`paintEarn/${el.id}/front/title`}
                        />
                        <P2
                          translationPath={`paintEarn/${el.id}/front/description`}
                        />
                        {state && (
                          <div>
                            <P2 style={{ color: hexColorFromTailwind(color) }}>
                              {state}
                            </P2>
                          </div>
                        )}
                      </div>
                    }
                    retro={
                      <div className="h-full w-full flex justify-center items-center">
                        <P1
                          translationPath={`paintEarn/${el.id}/back`}
                          className={`${
                            state
                              ? ""
                              : "grayscale hover:scale-[1.5] hover:grayscale-0"
                          }`}
                        />
                      </div>
                    }
                  />
                ),
              });
              return card;
            })}
          </div>
          <div
            className="flex justify-center lowercase text-center font-bold"
            onClick={() => downloadFile("/paintAndEarn.pdf", "url")}
          >
            <CustomLink className={"w-max"}>
              <P2 className="lowercase" translationPath="paintEarn/digDeep" />
            </CustomLink>
          </div>
          {logged ? (
            ""
          ) : (
            <div className="mt-16">
              <CustomLink
                defaultUnderline
                className="cursor-none"
                href={discordLink}
              >
                <P1
                  translationPath={
                    logged ? "paintEarn/loggedPhrase" : "paintEarn/loginPhrase"
                  }
                  className="font-bold text-center lowercase"
                />
              </CustomLink>
            </div>
          )}
        </div>
      </div>
      <div>
        <PaintEarn />
      </div>
    </div>
  );
}

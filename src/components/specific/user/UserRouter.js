"use client";

import { H3 } from "@/components/text/Headers";
import ChosePFP from "./ChosePFP";
import { useEffect, useState } from "react";
import AskInfo from "./AskInfo";
import FinalPage from "./FinalPage";
import ImgTab from "../../../../public/images/team/4.png";
import ImgEnry from "../../../../public/images/team/3.png";
import ImgPipo from "../../../../public/images/team/6.png";
import ImgAdi from "../../../../public/images/team/7.png";
import ImgAxel from "../../../../public/images/team/1.png";
import ImgAbra from "../../../../public/images/team/5.png";
import ImgPari from "../../../../public/images/team/8.png";
import ImgMilena from "../../../../public/images/team/10.png";

export default function UserRouter({ userInfo }) {
  const [page, setPage] = useState(0);
  const [pfp, setPfp] = useState(-2);
  const [username, setUsername] = useState(null);
  const [city, setCity] = useState(null);
  function sendUsername(val, errorCallback, successCallback, ignore) {
    if (!ignore) {
      if (val.length >= 3 && val.length <= 16) {
        if (/^[a-zA-Z0-9!._$]+$/.test(val)) {
          setUsername(val);
          successCallback();
          // Fetch
          setPage(2);
          return;
        }
      }
      errorCallback();
    } else {
      setUsername("no");
      setPage(2);
      successCallback();
    }
  }
  function sendCity(val, errorCallback, successCallback, ignore) {
    if (!ignore) {
      // Fetch
      successCallback();
    }
    setCity(val);
    successCallback();
    setPage(3);
  }
  function sendPfp(val, errorCallback, successCallback, ignore) {
    setPfp(val);
    setPage(1);
  }
  return (
    <>
      {page > 0 ? (
        page > 1 ? (
          page === 3 ? (
            <FinalPage />
          ) : (
            <AskInfo
              key={"ask_city"}
              title={"What city are you in?"}
              placeholder={"Ospedaletto"}
              send={(val, callback, ignore) => sendCity(val, callback, ignore)}
              descrPhrase={
                "Feel free to share your (approximate) location! This will help us to understand more about our community. We might do an event in your city too! In case you're too shy, you can leave the field blank"
              }
              defaultValue=""
              state={city !== "no" ? city : ""}
              forcePage={(val) => setPage(val)}
              page={2}
            />
          )
        ) : (
          <AskInfo
            key={"username"}
            title={"Would you like to have a custom username?"}
            placeholder={userInfo.username}
            send={(val, callback, ignore) =>
              sendUsername(val, callback, ignore)
            }
            descrPhrase={
              "Your username must be between 3 and 16 chars long and must contain numbers, letters or symbols like $,.,_,!"
            }
            bottomPhrase={`Or keep using your discord username (${userInfo.username})`}
            defaultValue=""
            state={username !== "no" ? username : ""}
            forcePage={(val) => setPage(val)}
            page={1}
          />
        )
      ) : (
        <ChosePFP
          userInfo={userInfo}
          setPfp={sendPfp}
          images={[
            ImgTab,
            ImgEnry,
            ImgPipo,
            ImgAdi,
            ImgAxel,
            ImgAbra,
            ImgPari,
            ImgMilena,
          ]}
          state={pfp >= -1 ? pfp : 0}
          skipIntro={pfp >= -1}
        />
      )}
    </>
  );
}

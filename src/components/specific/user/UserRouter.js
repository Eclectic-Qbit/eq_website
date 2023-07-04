"use client";

import { H3 } from "@/components/text/Headers";
import ChosePFP from "./ChosePFP";
import { useState } from "react";
import AskInfo from "./AskInfo";
import FinalPage from "./FinalPage";

export default function UserRouter({ userInfo }) {
  const [pfp, setPfp] = useState(null);
  const [username, setUsername] = useState(null);
  const [city, setCity] = useState(null);
  function sendUsername(val, errorCallback, successCallback, ignore) {
    if (!ignore) {
      if (val.length >= 3 && val.length <= 16) {
        if (/^[a-zA-Z0-9!._$]+$/.test(val)) {
          setUsername(val);
          successCallback();
          // Fetch
          return;
        }
      }
      errorCallback();
    } else {
      setUsername("no");
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
  }
  return (
    <>
      {userInfo.pfp || pfp ? (
        userInfo.customUsername || username ? (
          userInfo.city || city ? (
            <FinalPage />
          ) : (
            <AskInfo
              title={"What city are you in?"}
              placeholder={"Ospedaletto"}
              send={(val, callback, ignore) => sendCity(val, callback, ignore)}
              descrPhrase={
                "Feel free to share your (approximate) location! This will help us to understand more about our community. We might do an event in your city too! In case you're too shy, you can leave the field blank"
              }
              defaultValue=""
            />
          )
        ) : (
          <AskInfo
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
          />
        )
      ) : (
        <ChosePFP userInfo={userInfo} setPfp={setPfp} />
      )}
    </>
  );
}

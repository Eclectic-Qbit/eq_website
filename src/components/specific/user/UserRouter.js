"use client";

import { H3 } from "@/components/text/Headers";
import ChosePFP from "./ChosePFP";
import { useEffect, useState } from "react";
import AskInfo from "./AskInfo";
import FinalPage from "./FinalPage";
import { getTeamImages } from "@/commonFrontend";
import { useRouter } from "next/navigation";

export default function UserRouter({ userInfo }) {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [pfp, setPfp] = useState(-2);
  const [username, setUsername] = useState(null);
  const [city, setCity] = useState(null);
  useEffect(() => {
    if (!userInfo) {
      router.push("/");
      return;
    }
    // Update local state
    const getPfp = userInfo.opt.pfp;
    const getUser = userInfo.opt.customUsername;
    const getCity = userInfo.opt.city;
    if (getPfp && getPfp.value >= -1) {
      setPfp(getPfp.value);
    }
    if (getUser && getUser.value.length >= 3) {
      setUsername(getUser.value);
    }
    if (getCity && getCity.value.length > 0) {
      setCity(getCity.value);
    }
    // Check if some data is missing
    if (!getPfp || !getPfp.value) {
      setPage(0);
    } else if (!getUser || !getUser.value) {
      setPage(1);
    } else if (!getCity || !getCity.value) {
      setPage(2);
    } else {
      setPage(3);
    }
  }, [router, userInfo]);
  async function sendPfp(val, errorCallback, successCallback, ignore) {
    // Fetch
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ROUTE}users/${userInfo.discordId}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pfp: ignore ? -1 : val }),
      }
    );
    if (res.status === 200) {
      successCallback && successCallback();
      setPfp(val);
      setPage(1);
    } else {
      errorCallback && errorCallback();
    }
  }
  async function sendUsername(val, errorCallback, successCallback, ignore) {
    if (ignore || (val.length >= 3 && val.length <= 16)) {
      if (ignore || /^[a-zA-Z0-9!._$]+$/.test(val)) {
        // Fetch
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ROUTE}users/${userInfo.discordId}`,
          {
            method: "PUT",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ customUsername: ignore ? "null" : val }),
          }
        );
        if (res.status === 200) {
          successCallback && successCallback();
          setUsername(val);
          setPage(2);
        } else {
          errorCallback && errorCallback();
        }
      }
    }
  }
  async function sendCity(val, errorCallback, successCallback, ignore) {
    // Fetch
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ROUTE}users/${userInfo.discordId}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: ignore || !val || val.length === 0 ? "null" : val,
        }),
      }
    );
    if (res.status === 200) {
      successCallback && successCallback();
      setCity(val);
      setPage(3);
    } else {
      errorCallback && errorCallback();
    }
  }
  return (
    <>
      {page > 0 ? (
        page > 1 ? (
          page === 3 ? (
            <FinalPage
              userInfo={userInfo}
              avatar={pfp}
              username={username}
              city={city}
            />
          ) : (
            <AskInfo
              key={"ask_city"}
              title={"What city are you in?"}
              placeholder={"Ospedaletto"}
              send={(val, successCallback, errorCallback, ignore) =>
                sendCity(val, successCallback, errorCallback, ignore)
              }
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
            send={(val, successCallback, errorCallback, ignore) =>
              sendUsername(val, successCallback, errorCallback, ignore)
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
          images={getTeamImages()}
          state={pfp >= -1 ? pfp : 0}
          skipIntro={pfp >= -1}
        />
      )}
    </>
  );
}

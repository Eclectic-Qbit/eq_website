"use client";

import { H3 } from "@/components/text/Headers";
import ChosePFP from "./ChosePFP";
import { useState } from "react";
import AskInfo from "./AskInfo";

export default function UserRouter({ userInfo }) {
  const [pfp, setPfp] = useState(null);
  const [username, setUsername] = useState(null);
  const [city, setCity] = useState(null);
  console.log(userInfo);
  return (
    <>
      {userInfo.pfp || pfp ? (
        userInfo.customUsername || username ? (
          userInfo.city || city ? (
            <>
              <h1>Yey finally in the final page</h1>{" "}
              <h1>Yey finally in the final page</h1>{" "}
              <h1>Yey finally in the final page</h1>{" "}
              <h1>Yey finally in the final page</h1>{" "}
              <h1>Yey finally in the final page</h1>{" "}
              <h1>Yey finally in the final page</h1>{" "}
              <h1>Yey finally in the final page</h1>
            </>
          ) : (
            <AskInfo
              title={"City"}
              placeholder={"Ospedaletto"}
              send={(val) => setCity(val)}
              userInfo={userInfo}
            />
          )
        ) : (
          <AskInfo
            title={"Would you like to have a custom username?"}
            placeholder={userInfo.username}
            send={(val) => setUsername(val)}
            userInfo={userInfo}
          />
        )
      ) : (
        <ChosePFP userInfo={userInfo} setPfp={setPfp} />
      )}
    </>
  );
}

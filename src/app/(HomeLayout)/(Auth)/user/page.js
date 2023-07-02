"use client";

import { H3 } from "@/components/text/Headers";
import { P1 } from "@/components/text/Paragraphs";
import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

export default function UserPage() {
  const { userInfo } = useContext(AuthContext);
  return userInfo ? (
    <div className="min-h-screen flex justify-center items-center flex-col gap-4">
      <H3>Hey {userInfo.username}</H3>
      <P1>This section is still work in progress!</P1>
    </div>
  ) : (
    <div></div>
  );
}

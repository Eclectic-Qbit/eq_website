"use client";

import AuthContext from "@/contexts/AuthContext";
import CurrentPageContext from "@/contexts/CurrentPageContext";
import { useContext, useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
const jwt = require("jsonwebtoken");

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const { page } = useContext(CurrentPageContext);
  // If the token exists, set it - Only one time
  useEffect(() => {
    const readToken = getCookie("token");
    setToken(readToken);
  }, []);
  // Every time the page changes, check the validity of the token
  // If valid, set it and update the userInfo
  useEffect(() => {
    if (token) {
      const parsedToken = jwt.decode(token);
      if (parsedToken) {
        if (Date.now() < parsedToken.exp * 1000) {
          console.log("Valid token found");
          setUserInfo(parsedToken);
          return;
        } else {
          const domain =
            process.env.IS_TESTING_ENV === "true"
              ? ".localhost"
              : ".eclecticqbit.art";
          const maxAge = 1 * 1000 * 60 * 60;
          const secure = process.env.IS_TESTING_ENV === "true" ? false : true;
          deleteCookie("token", {
            maxAge: maxAge,
            secure: secure,
            domain: domain,
            sameSite: "strict",
          });
          console.warn("Removed expired token from cookies and state");
        }
      }
    }
    console.log("Token not found");
    setUserInfo(null);
  }, [page, token]);
  return (
    <AuthContext.Provider value={{ userInfo, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

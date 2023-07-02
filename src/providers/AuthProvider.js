"use client";

import AuthContext from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
const jwt = require("jsonwebtoken");

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    if (token) {
      try {
        const info = jwt.decode(token);
        JSON.stringify(info) !== JSON.stringify(userInfo) && setUserInfo(info);
      } catch (e) {
        console.error(e);
        setUserInfo(null);
      }
    } else {
      userInfo !== null && setUserInfo(null);
      token !== null && setToken(null);
    }
  }, [token, userInfo]);
  const [cookies, removeCookie] = useCookies();
  useEffect(() => {
    const token = cookies.token;
    const parsedToken = jwt.decode(token);
    if (token) {
      if (Date.now() >= parsedToken.exp * 1000) {
        removeCookie("token");
        setToken(null);
      } else {
        setToken(token);
      }
    }
  }, [cookies, removeCookie, setToken]);
  return (
    <AuthContext.Provider value={{ userInfo, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

"use client";

import AuthContext from "@/contexts/AuthContext";
import CurrentPageContext from "@/contexts/CurrentPageContext";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
const jwt = require("jsonwebtoken");

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const { page } = useContext(CurrentPageContext);
  const [cookies] = useCookies();
  // If the token exists, set it - Only one time
  useEffect(() => {
    const readToken = cookies.token;
    setToken(readToken);
  }, [cookies]);
  // Every time the page changes, check the validity of the token
  // If valid, set it and update the userInfo
  useEffect(() => {
    if (token) {
      const parsedToken = jwt.decode(token);
      console.log(parsedToken);
      if (parsedToken) {
        if (Date.now() >= parsedToken.exp * 1000) {
          setToken(null);
          setUserInfo(null);
          console.warn("Removed invalid token from cookies and state");
        } else {
          setToken(parsedToken);
          JSON.stringify(parsedToken) !== JSON.stringify(userInfo) &&
            setUserInfo(parsedToken);
        }
      }
    } else {
      setUserInfo(null);
    }
  }, [page, token, userInfo]);
  return (
    <AuthContext.Provider value={{ userInfo, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

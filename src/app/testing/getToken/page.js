"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
const jwt = require("jsonwebtoken");

export default function GetToken() {
  const [cookies] = useCookies();

  useEffect(() => {
    const decoded = jwt.decode(cookies.token);
  }, [cookies.token]);
  return <div></div>;
}

"use client";

import CurrentPageContext from "@/contexts/CurrentPageContext";
import { useState } from "react";

export default function CurrentPageProvider({ children }) {
  const [page, setPage] = useState("");

  return (
    <CurrentPageContext.Provider value={{ page, setPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
}

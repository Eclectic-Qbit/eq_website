"use client";

import settings from "@/frontendSettings";
import { cloneElement, useEffect, useState } from "react";

export default function ShowOnHover({ children }) {
  const [active, setActive] = useState(false);
  const [child, setChild] = useState(
    cloneElement(children[1], {
      active: false,
    })
  );
  useEffect(() => {
    setChild(
      cloneElement(children[1], {
        active: active,
      })
    );
    if (window.innerWidth < settings.mobileView) {
      setActive(true);
    }
  }, [active, children]);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() =>
        setActive(window.innerWidth < settings.mobileView ? true : false)
      }
      className="cursor-pointer w-full flex flex-col"
    >
      {children[0]}
      {child}
    </div>
  );
}

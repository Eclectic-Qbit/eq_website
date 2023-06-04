"use client";

import ScrollContext from "@/contexts/ScrollContext";
import settings from "@/frontendSettings";
import { cloneElement, useContext, useEffect, useRef, useState } from "react";

export default function ShowOnHover({ className, children }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [child, setChild] = useState(
    cloneElement(children[1], {
      active: active,
    })
  );
  const { scroll } = useContext(ScrollContext);
  useEffect(() => {
    if (window.innerWidth < settings.mobileView) {
      if (
        ref.current.getBoundingClientRect().y <
        window.innerHeight - window.innerHeight * 0.1
      ) {
        setActive(true);
      }
    }
  }, [scroll]);
  useEffect(() => {
    setChild(cloneElement(children[1], { active: active }));
  }, [active, children]);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() =>
        setActive(window.innerWidth < settings.mobileView ? true : false)
      }
      className={`${className ? className : ""} w-full flex flex-col`}
    >
      {children[0]}
      {child}
    </div>
  );
}

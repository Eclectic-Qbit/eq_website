"use client";

import { cloneElement, useEffect, useState } from "react";
import { P1, P2 } from "../text/Paragraphs";

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
  }, [active, children]);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="cursor-pointer w-full flex flex-col"
    >
      {children[0]}
      <P2>{child}</P2>
    </div>
  );
}

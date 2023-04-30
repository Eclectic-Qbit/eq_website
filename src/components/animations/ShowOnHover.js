"use client";

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
  }, [active]);
  return (
    <h2
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="cursor-pointer w-full"
    >
      {children[0]}
      {child}
    </h2>
  );
}

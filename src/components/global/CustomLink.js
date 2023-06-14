"use client";
import CurrentPageContext from "@/contexts/CurrentPageContext";
import Link from "next/link";
import { useContext } from "react";

export default function CustomLink({
  className,
  children,
  href,
  blank,
  noUnderline,
}) {
  const { page, setPage } = useContext(CurrentPageContext);
  return (
    <>
      {href ? (
        <div className="relative group" onClick={() => setPage(href)}>
          <Link
            className={`${className ? className : ""} cursor-none`}
            href={href}
            target={blank ? "_blank" : "_self"}
          >
            {children}
          </Link>
          {!noUnderline && (
            <div className="absolute bottom-0 left-0 w-0 h-[0.125rem] bg-black sm:bg-white group-hover:w-full transition-all duration-150 ease-in" />
          )}
        </div>
      ) : (
        <div className="relative group">
          {children}
          <div className="absolute bottom-0 left-0 w-0 h-[0.125rem] bg-black sm:bg-white group-hover:w-full transition-all duration-150 ease-in" />
        </div>
      )}
    </>
  );
}

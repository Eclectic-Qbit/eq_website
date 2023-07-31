"use client";
import CurrentPageContext from "@/contexts/CurrentPageContext";
import Link from "next/link";
import { useContext } from "react";

export default function CustomLink({
  className,
  style,
  children,
  href,
  blank,
  noUnderline,
  defaultUnderline,
}) {
  const { page, setPage } = useContext(CurrentPageContext);
  return (
    <>
      {href ? (
        <div className={`relative group`} onClick={() => setPage(href)}>
          <Link
            className={`${className ? className : ""} cursor-none ${
              defaultUnderline ? "hover:underline" : ""
            }`}
            style={style}
            href={href}
            target={blank ? "_blank" : "_self"}
          >
            {children}
          </Link>
          {!noUnderline && !defaultUnderline && (
            <div className="absolute bottom-0 left-0 w-0 h-[0.125rem] bg-black sm:bg-white group-hover:w-full transition-all duration-150 ease-in" />
          )}
        </div>
      ) : (
        <div className="relative group">
          <div className={`${defaultUnderline && "hover:underline"}`}>
            {children}
          </div>
          {!noUnderline && !defaultUnderline && (
            <div className="absolute bottom-0 left-0 w-0 h-[0.125rem] bg-black sm:bg-white group-hover:w-full transition-all duration-150 ease-in" />
          )}
        </div>
      )}
    </>
  );
}

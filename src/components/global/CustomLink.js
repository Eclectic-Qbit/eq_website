import Link from "next/link";

export default function CustomLink({ className, children, href, blank }) {
  return (
    <div className="relative group">
      <Link
        className={`${className ? className : ""} cursor-none`}
        href={href}
        target={blank ? "_blank" : "_self"}
      >
        {children}
      </Link>
      <div className="absolute bottom-0 left-0 w-0 h-[0.125rem] bg-black sm:bg-white group-hover:w-full transition-all duration-150 ease-in" />
    </div>
  );
}

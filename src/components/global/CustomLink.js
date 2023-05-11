import Link from "next/link";

export default function CustomLink({ children, href, blank }) {
  return (
    <div className="relative group">
      <Link href={href} target={blank ? "_blank" : "_self"}>
        {children}
      </Link>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-150 ease-in" />
    </div>
  );
}

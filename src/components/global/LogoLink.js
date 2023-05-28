import Link from "next/link";

export default function LogoLink({ children, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="bg-white rounded-full w-8 p-2 scale-100 hover:scale-125 transition cursor-none"
    >
      {children}
    </Link>
  );
}

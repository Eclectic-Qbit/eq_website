import Link from "next/link";

export default function LogoLink({ children }) {
  return (
    <Link
      href="https://instagram.com/eclecticqbit?igshid=YmMyMTA2M2Y="
      target="_blank"
      className="bg-white rounded-full w-8 p-2 scale-100 hover:scale-125 transition"
    >
      {children}
    </Link>
  );
}

import { P3 } from "../text/Paragraphs";
import CustomLink from "./CustomLink";

export default function Footer() {
  return (
    <div className="flex w-full h-full items-center justify-center py-8 px-4 border-t-2 border-solid border-white">
      <CustomLink href="/contacts">
        <P3 translationPath="menu/contacts" />
      </CustomLink>
    </div>
  );
}

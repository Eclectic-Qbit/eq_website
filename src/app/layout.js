import Menu from "@/components/global/Menu";
import "./globals.css";
import LoadingAnimation from "@/components/animations/LoadingAnimation";
import LanguageProvider from "@/components/global/LanguageProvider";

export const metadata = {
  title: "Barrio Buidlers",
  description: "Interdipendence is the new indipendence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen min-w-screen bg-black text-white">
      <body>
        <LanguageProvider>
          <LoadingAnimation />
          <Menu />
          <div className="mt-[10vh]">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}

import MouseProvider from "@/components/global/MouseProvider";
import "./globals.css";
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
          <MouseProvider>{children}</MouseProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

import CurrentPageProvider from "@/providers/CurrentPageProvider";
import "./globals.css";
import LanguageProvider from "@/providers/LanguageProvider";
import MouseProvider from "@/providers/MouseProvider";
import ScrollProvider from "@/providers/ScrollProvider";
import DebouncedResizeProvider from "@/providers/DebouncedResizeProvider";

export const metadata = {
  title: "eclectic qbit",
  description: "Interdipendence is the new indipendence",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen min-w-screen bg-black text-white">
      <body>
        <LanguageProvider>
          <MouseProvider>
            <ScrollProvider>
              <CurrentPageProvider>
                <DebouncedResizeProvider>{children}</DebouncedResizeProvider>
              </CurrentPageProvider>
            </ScrollProvider>
          </MouseProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

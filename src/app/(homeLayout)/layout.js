import Menu from "@/components/global/Menu";

import { HomepageCursor } from "@/components/cursors/Cursors";
import LoadingScreen from "@/components/global/LoadingScreen";
import Footer from "@/components/global/Footer";
import CookiesPrompt from "@/components/global/CookiesPrompt";
import FadePage from "@/components/specific/homeLayout/FadePage";

export default function RootLayout({ children }) {
  return (
    <div className="w-full h-full cursor-none overflow-hidden">
      <FadePage>
        <HomepageCursor />
        <LoadingScreen />
        <Menu />
        <div>
          <div>{children}</div>
        </div>
        <CookiesPrompt />
        <Footer />
      </FadePage>
    </div>
  );
}

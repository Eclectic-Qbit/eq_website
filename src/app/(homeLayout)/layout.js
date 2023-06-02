import Menu from "@/components/global/Menu";

import { HomepageCursor } from "@/components/cursors/Cursors";
import LoadingScreen from "@/components/global/LoadingScreen";
import Footer from "@/components/global/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="cursor-none">
      <HomepageCursor />
      <LoadingScreen />
      <Menu />
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

import Menu from "@/components/global/Menu";
import "./globals.css";

export const metadata = {
  title: "Barrio Buidlers",
  description: "Interdipendence is the new indipendence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="min-h-screen min-w-screen bg-black text-white">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}

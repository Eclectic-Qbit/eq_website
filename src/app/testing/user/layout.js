import Menu from "@/components/global/Menu";

export default function RootLayout({ children }) {
  return (
    <div className="w-full h-full cursor-none overflow-hidden">
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <main className="min-h-screen min-w-screen">
      <Menu />
      {children}
    </main>
  );
}

import "../styles/globals.css";
import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata = {
  title: "Eu posso programar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900">
        <Topbar />
        <Sidebar />
        <div
          id="main"
          className="ml-[300px] h-screen px-12 pt-16 text-white max-xl:ml-[280px] xl:mr-60 max-lg:ml-0 max-lg:px-16 max-sm:px-4"
        >
          {children}
        </div>
      </body>
    </html>
  );
}

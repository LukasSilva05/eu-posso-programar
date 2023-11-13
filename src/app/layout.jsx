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
          className="ml-[320px] h-screen px-12 pt-16 text-white scrollbar scrollbar-thumb-zinc-800 scrollbar-thumb-rounded-full scrollbar-w-[3px] max-xl:ml-[300px] max-lg:ml-0 max-lg:px-16 max-sm:px-4 xl:mr-60 2xl:mr-96 fullHD:mr-[450px]"
        >
          {children}
        </div>
      </body>
    </html>
  );
}

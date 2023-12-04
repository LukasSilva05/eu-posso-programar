import "../styles/globals.css";
import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";

export const metadata = {
  title: "Eu posso programar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900 scrollbar scrollbar-thumb-zinc-400/30 scrollbar-thumb-rounded-full scrollbar-w-[3px]">
        <Topbar />
        <Sidebar />
        <main className="ml-[320px] h-screen px-12 pt-16 text-white max-xl:ml-[300px] max-lg:ml-0 max-lg:px-16 max-sm:px-3 xl:mr-60 2xl:mr-96 fullHD:mr-[450px]">
          {children}
        </main>
      </body>
    </html>
  );
}

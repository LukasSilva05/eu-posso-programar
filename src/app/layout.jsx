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
        <div className="text-white">{children}</div>
      </body>
    </html>
  );
}

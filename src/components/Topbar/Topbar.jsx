import Image from "next/image";
import Link from "next/link";
import menuIcon from "../../assets/images/menu-white.png";
import githubIcon from "../../assets/images/github.png";
import MenuButton from "./components/MenuButton";

export default function Topbar() {
  return (
    <div className="fixed top-0 z-10 flex w-full  justify-between gap-2 border-b border-zinc-800 px-5 py-4 text-lg font-bold text-white drop-shadow-lg backdrop-blur max-sm:px-4">
      <div className="flex items-center gap-2">
        <MenuButton icon={menuIcon} />
        <Link href="/" className="select-none text-2xl max-sm:text-lg">
          Eu posso programar
        </Link>
      </div>
      <Link
        className="flex items-center"
        target="_blank"
        href={"https://github.com/LukasSilva05/eu-posso-programar"}
      >
        <Image className="w-6 max-sm:w-5" src={githubIcon} alt="githubIcon" />
      </Link>
    </div>
  );
}

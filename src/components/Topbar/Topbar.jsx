"use client";

import Image from "next/image";
import menuIcon from "../../assets/images/menu-white.png";
import { toggleMenu } from "@/functions";
export default function Topbar() {
  return (
    <div className="fixed top-0 z-10 flex w-full items-center gap-2 border-b border-zinc-800 px-5 py-4 text-lg font-bold text-white backdrop-blur-md">
      <button
        onClick={() => toggleMenu()}
        className="hidden rounded-sm bg-zinc-900 p-1 hover:bg-zinc-800 max-lg:block"
      >
        <Image src={menuIcon} alt="toggleButton" height={18} width={18} />
      </button>
      <h2 className="select-none text-2xl">Eu posso programar</h2>
    </div>
  );
}

"use client";
import Image from "next/image";
import toggleMenu from "@/components/functions/toggleMenu";

export default function MenuButton({ icon }) {
  return (
    <button onClick={() => toggleMenu()} className="hidden p-1 max-lg:block">
      <Image src={icon} alt="menuIcon" width={18} />
    </button>
  );
}

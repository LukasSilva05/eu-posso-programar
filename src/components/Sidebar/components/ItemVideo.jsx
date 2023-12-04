'use client'

import Link from "next/link";
import toggleMenu from "@/components/functions/toggleMenu";
import { usePathname } from "next/navigation";

export default function ItemVideo({ title, route }) {
  const pathname = usePathname();

  return (
    <li className="my-[10px] font-normal">
      <Link
        onClick={() => toggleMenu()}
        className={`-ml-px block overflow-hidden text-ellipsis whitespace-nowrap border-l border-zinc-800 pl-3 text-sm transition duration-200 ${
          pathname == route
            ? "border-l-white text-white"
            : "text-zinc-500 hover:border-white hover:text-white"
        }`}
        href={route}
      >
        {title}
      </Link>
    </li>
  );
}

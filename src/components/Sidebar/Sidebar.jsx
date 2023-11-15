"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import videos from "../../json/videos.json";
import toggleMenu from "../functions/toggleMenu";
import handleString from "@/functions/handleString";

export default function Sidebar() {
  const props = Object.keys(videos);
  const pathname = usePathname();

  return (
    <nav
      id="sidebar"
      className="fixed inset-0 top-[65px] z-20 block w-[320px] overflow-auto whitespace-nowrap border-r border-zinc-800 transition-[width] duration-300 scrollbar scrollbar-thumb-zinc-400/30 scrollbar-thumb-rounded-full scrollbar-w-[3px] max-xl:w-[300px] max-lg:w-0 max-lg:bg-zinc-900 max-sm:top-[60px]"
    >
      <ul className="my-5 ml-4 mr-3">
        {props.map((topic) => {
          return (
            <li key={topic}>
              <h2 className="text-sm font-bold text-white">{topic}</h2>
              <ul className="mx-3 my-5 border-l border-zinc-800">
                {videos[topic].map((video) => {
                  return (
                    <li key={video.title} className="my-[10px]">
                      <Link
                        onClick={() => toggleMenu()}
                        className={
                          pathname ==
                          `/${handleString(topic)}/${handleString(video.title)}`
                            ? "-ml-px block overflow-hidden text-ellipsis whitespace-nowrap border-l pl-3 text-sm text-white transition duration-200 "
                            : "-ml-px box-border block overflow-hidden text-ellipsis whitespace-nowrap border-l border-transparent pl-3 text-sm text-zinc-500 transition duration-200 hover:border-white hover:text-white"
                        }
                        href={`/${handleString(topic)}/${handleString(
                          video.title,
                        )}`}
                      >
                        {video.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

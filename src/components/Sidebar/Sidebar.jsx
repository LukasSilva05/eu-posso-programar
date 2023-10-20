"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import videos from "../../json/videos.json";
import toggleMenu from "../Topbar/functions/toggleMenu";

export default function Sidebar() {
  const props = Object.keys(videos);
  const pathname = usePathname();

  return (
    <nav
      id="sidebar"
      className="fixed inset-0 top-[65px] z-20 block w-[300px] overflow-auto whitespace-nowrap border-r border-zinc-800 bg-zinc-900 transition-[width] duration-300 max-xl:w-[280px] max-lg:w-0"
    >
      <ul className="my-5 ml-4 mr-3">
        {props.map((topic) => {
          return (
            <li key={topic}>
              <h2 className="text-sm font-bold text-white">{topic}</h2>
              <ul className="mx-3 my-5 border-l border-zinc-800">
                {videos[topic].map((video) => {
                  return (
                    <li key={video} className="my-2">
                      <Link
                        onClick={() => toggleMenu()}
                        className={
                          pathname == `/${video.id}`
                            ? "-ml-px block overflow-hidden text-ellipsis whitespace-nowrap border-l pl-3 text-sm text-white transition duration-200 "
                            : "-ml-px box-border block overflow-hidden text-ellipsis whitespace-nowrap border-l border-transparent pl-3 text-sm text-zinc-500 transition duration-200 hover:border-white hover:text-white"
                        }
                        href={`/${video.id}`}
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

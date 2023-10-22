"use client";

import Link from "next/link";
import Image from "next/image";
import getVideos from "./functions/getVideos";
import nextIcon from "../../assets/images/next.png";
import nextZincIcon from "../../assets/images/nextZinc.png";
import previousIcon from "../../assets/images/previous.png";
import previousZincIcon from "../../assets/images/previousZinc.png";

export default function page({ params }) {
  const [previousVideo, currentVideo, nextVideo] = getVideos(params.id);

  return (
    <div>
      <h1 className="mb-2 pt-9 text-2xl font-bold max-sm:text-base ">
        {currentVideo.title}
      </h1>
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 h-full w-full drop-shadow-lg"
          src={currentVideo.src}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex w-full items-center justify-between rounded-b-sm bg-zinc-800 p-4 ">
        <Link
          className={
            previousVideo
              ? "flex h-10 items-center justify-center gap-2 rounded bg-[#2e2e32] px-4 text-white transition hover:brightness-110"
              : "flex h-10 cursor-not-allowed items-center justify-center gap-2 rounded bg-[#2e2e32b1] px-4 text-zinc-500 transition"
          }
          href={previousVideo ? `/${previousVideo.id}` : ""}
        >
          <Image
            className="h-4 w-4"
            src={previousVideo ? previousIcon : previousZincIcon}
            alt="previousIcon"
          />
          Anterior
        </Link>
        <Link
          className={
            nextVideo
              ? "flex h-10 items-center justify-center gap-2 rounded bg-[#2e2e32] px-4 text-white transition hover:brightness-110"
              : "flex h-10 cursor-not-allowed items-center justify-center gap-2 rounded bg-[#2e2e32b1] px-4 text-zinc-500 transition"
          }
          href={nextVideo ? `/${nextVideo.id}` : ""}
        >
          Próximo
          <Image
            className="h-4 w-4"
            src={nextVideo ? nextIcon : nextZincIcon}
            alt="nextIcon"
          />
        </Link>
      </div>
    </div>
  );
}

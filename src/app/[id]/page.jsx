"use client";

import Link from "next/link";
import getVideos from "./functions/getVideos";

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
      <div className="flex w-full items-center justify-between rounded-b-sm  bg-zinc-800 p-5">
        <Link
          className={
            previousVideo ? "text-white" : "cursor-not-allowed text-zinc-500"
          }
          href={previousVideo ? `/${previousVideo.id}` : ""}
        >
          Anterior
        </Link>
        <Link
          className={
            nextVideo ? "text-white" : "cursor-not-allowed text-zinc-500"
          }
          href={nextVideo ? `/${nextVideo.id}` : ""}
        >
          Próximo
        </Link>
      </div>
    </div>
  );
}

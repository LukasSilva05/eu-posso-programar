import Link from "next/link";
import Image from "next/image";
import getVideos from "./functions/getVideos";
import handleString from "@/functions/handleString";
import nextIcon from "../../../assets/images/next.png";
import nextZincIcon from "../../../assets/images/nextZinc.png";
import previousIcon from "../../../assets/images/previous.png";
import previousZincIcon from "../../../assets/images/previousZinc.png";

export async function generateMetadata({ params }) {
  const [previousVideo, currentVideo, nextVideo] = getVideos(params.title);

  return {
    title: `${currentVideo.props.title} | Eu posso programar`
  }
}

export default function page({ params }) {
  const [previousVideo, currentVideo, nextVideo] = getVideos(params.title);

  return (
    <div>
      <h1 className="mb-2 pt-9 text-2xl font-bold max-sm:text-lg">
        {currentVideo.props.title}
      </h1>
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 h-full w-full drop-shadow-lg"
          src={currentVideo.props.src}
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex w-full items-center justify-between drop-shadow-lg rounded-b-sm bg-zinc-800 p-4 max-sm:p-3">
        <Link
          className={
            previousVideo
              ? "flex h-10 items-center justify-center gap-2 rounded bg-[#2e2e32] px-4 text-white transition hover:brightness-110 max-sm:h-8"
              : "flex h-10 cursor-not-allowed items-center justify-center gap-2 rounded bg-[#2e2e32b1] px-4 text-zinc-500 transition max-sm:h-8"
          }
          href={
            previousVideo
              ? `/${handleString(previousVideo.topic)}/${handleString(
                  previousVideo.props.title,
                )}`
              : ""
          }
        >
          <Image
            className="h-3 w-3"
            src={previousVideo ? previousIcon : previousZincIcon}
            alt="previousIcon"
          />
          <span className="text-sm">Anterior</span>
        </Link>
        <Link
          className={
            nextVideo
              ? "flex h-10 items-center justify-center gap-2 rounded bg-[#2e2e32] px-4 text-white transition hover:brightness-110 max-sm:h-8"
              : "flex h-10 cursor-not-allowed items-center justify-center gap-2 rounded bg-[#2e2e32b1] px-4 text-zinc-500 transition max-sm:h-8"
          }
          href={
            nextVideo
              ? `/${handleString(nextVideo.topic)}/${handleString(
                  nextVideo.props.title,
                )}`
              : ""
          }
        >
          <span className="text-sm">Próximo</span>
          <Image
            className="h-3 w-3"
            src={nextVideo ? nextIcon : nextZincIcon}
            alt="nextIcon"
          />
        </Link>
      </div>
      <h1 className="font-bold mt-8 mb-4 text-lg max-sm:text-[16px]">Complementos</h1>
      <div className="border-zinc-800 border-b"></div>
    </div>
  );
}

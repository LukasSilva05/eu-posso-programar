import Link from "next/link";
import Image from "next/image";
import getVideos from "./functions/getVideos";
import externLink from "../../../assets/images/link-externo.png";
import NextSvgComponent from "@/components/Svgs/NextSvgComponent";
import PrevSvgComponent from "@/components/Svgs/PrevSvgComponent";
import Button from "@/components/NextAndPrevButton/Button";

export async function generateMetadata({ params }) {
  const [previousVideo, currentVideo, nextVideo] = await getVideos(params.title);

  return {
    title: `${currentVideo.props.title} | Eu posso programar`,
  };
}

export default async function page({ params }) {
  const [previousVideo, currentVideo, nextVideo] = await getVideos(params.title);

  const addons = currentVideo.props.complements;

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
      <div className="flex w-full items-center justify-between rounded-b-sm bg-zinc-800 p-4 drop-shadow-lg max-sm:p-3">
        <Button
          video={previousVideo}
          SvgComponent={PrevSvgComponent}
          textButton={"Anterior"}
        />
        <Button
          video={nextVideo}
          SvgComponent={NextSvgComponent}
          textButton={"Próximo"}
        />
      </div>
      <h1 className="mb-4 mt-8 text-lg font-bold max-sm:text-[14px]">
        Complementos
      </h1>
      <div className="border-b border-zinc-800"></div>
      <ul className="py-5">
        {Object.keys(addons).map((addonTitle, index) => {
          return (
            <li
              key={index}
              className="my-[10px] flex items-center gap-1 max-sm:text-[14px]"
            >
              <Link
                className="decoration-1 hover:underline"
                target="_blank"
                href={addons[addonTitle]}
              >
                {addonTitle}
              </Link>
              <Image className="h-3 w-3" src={externLink} alt="externLink" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

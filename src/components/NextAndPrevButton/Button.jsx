import Link from "next/link";
import handleString from "@/functions/handleString";
export default function Button({ video, SvgComponent, textButton }) {
  return (
    <Link
      className={`flex h-10 items-center justify-center gap-2 rounded px-4 transition max-sm:h-8 ${
        video
          ? "bg-[#2e2e32] text-white hover:brightness-110"
          : "cursor-not-allowed bg-[#2e2e32b1] text-zinc-500"
      }`}
      href={
        video
          ? `/${handleString(video.topic)}/${handleString(video.props.title)}`
          : ""
      }
    >
      <SvgComponent props={`h-4 ${video ? "fill-white" : "fill-zinc-500"}`} />
      <span className="text-sm">{textButton}</span>
    </Link>
  );
}

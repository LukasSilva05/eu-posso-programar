"use client";

import getVideoById from "./functions/getVideoById";

export default function page({ params }) {
  const { src, title } = getVideoById(params.id);

  return (
    <div>
      <h1 className="mb-3 pt-12 text-2xl font-bold max-sm:text-base">{title}</h1>
      <div className="relative pt-[56.25%]">
        <iframe
          className="absolute top-0 h-full w-full xl:h-4/5 xl:w-4/5"
          src={src}
          frameBorder="1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

import videos from "../../json/videos.json";
import handleString from "@/components/functions/handleString";
import ItemVideo from "./components/ItemVideo";

export default async function Sidebar() {
  /* const response = await fetch("https://api-videos-z2hp.onrender.com");
  const videosOfApi = await response.json();

  const topics = Object.keys(videosOfApi); */

  const topics = Object.keys(videos);
  return (
    <nav
      id="sidebar"
      className="fixed inset-0 top-[65px] z-20 block w-[320px] overflow-auto whitespace-nowrap border-r border-zinc-800 transition-[width] duration-300 scrollbar scrollbar-thumb-zinc-400/30 scrollbar-thumb-rounded-full scrollbar-w-[3px] max-xl:w-[300px] max-lg:w-0 max-lg:bg-zinc-900 max-sm:top-[61px]"
    >
      <ul className="my-5 ml-4 mr-3">
        {topics.map((topic, index) => {
          return (
            <li key={index} className="text-sm font-bold text-white">
              {topic}
              <ul className="mx-3 my-5 border-l border-zinc-800">
                {videos[topic].map((video, index) => {
                  const route = `/${handleString(topic)}/${handleString(
                    video.title,
                  )}`;
                  return (
                    <ItemVideo key={index} title={video.title} route={route} />
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

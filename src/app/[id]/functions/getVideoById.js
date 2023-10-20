import videos from "../../../json/videos.json";

export default function getVideoById(id) {
  let videoFound;

  Object.keys(videos).forEach((topic) => {
    if (videos[topic].find((video) => video.id === id))
      videoFound = videos[topic].find((video) => video.id === id);
  });

  return videoFound;
}

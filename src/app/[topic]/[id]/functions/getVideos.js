import videos from "../../../../json/videos.json";

export default function getVideos(id) {
  const arrayVideos = [];

  Object.keys(videos).forEach((topic) =>
    videos[topic].forEach((video) => arrayVideos.push({ topic, props: video })),
  );

  const currentId = arrayVideos.findIndex((video) => video.props.id === id);

  return [
    arrayVideos[currentId - 1],
    arrayVideos[currentId],
    arrayVideos[currentId + 1],
  ];
}

import videos from "../../../../json/videos.json";
import handleString from "@/functions/handleString";

export default function getVideos(title) {
  const arrayVideos = []

  Object.keys(videos).forEach(topic => videos[topic].forEach(video => arrayVideos.push({ topic, props: video })))

  const currentId = arrayVideos.findIndex(video => handleString(video.props.title) === title)

  return [
    arrayVideos[currentId - 1],
    arrayVideos[currentId],
    arrayVideos[currentId + 1],
  ];
}

/* export default async function getVideosOfApi(title) {
  const response = await fetch('https://api-videos-z2hp.onrender.com')
  const data = await response.json()

  const arrayVideos = []

  Object.keys(data).forEach(topic => videos[topic].forEach(video => arrayVideos.push({ topic, props: video })))

  const currentId = arrayVideos.findIndex(video => handleString(video.props.title) === title)

  return [
    arrayVideos[currentId - 1],
    arrayVideos[currentId],
    arrayVideos[currentId + 1],
  ];
} */

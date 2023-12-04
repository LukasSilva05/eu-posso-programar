export default function handleString(string) {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f,]/g, "")
    .replace(/ /g, "-")
    .toLowerCase();
}

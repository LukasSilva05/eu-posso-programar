export default function toggleMenu() {
  const sidebar = document.querySelector("#sidebar");
  const body = document.querySelector("body");
  const size =
    body.clientWidth < 640
      ? "max-sm:w-[91%]"
      : body.clientWidth < 768
      ? "max-md:w-[50%]"
      : "max-lg:w-0";
  sidebar.classList.toggle(size);
}

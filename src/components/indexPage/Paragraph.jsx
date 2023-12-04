export default function Paragraph({ text, title }) {
  return (
    <p className="text my-10 text-lg leading-relaxed tracking-wide text-zinc-300/90 max-sm:text-base">
      {title ? (
        <>
          <span className="text-xl text-white">{title}</span>
          <span className="px-1">→</span>
        </>
      ) : false}
      {text}
    </p>
  );
}

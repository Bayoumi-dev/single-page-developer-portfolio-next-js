export default function Loader() {
  const bulletStyle =
    "w-[0.4375rem] h-[0.4375rem] bg-green rounded-full opacity-20 scale-[0.2] animate-loader";

  return (
    <div className="flex items-center gap-1">
      <span className={`${bulletStyle}`} />
      <span className={`${bulletStyle} [animation-delay:0.3s]`} />
      <span className={`${bulletStyle} [animation-delay:0.6s]`} />
    </div>
  );
}

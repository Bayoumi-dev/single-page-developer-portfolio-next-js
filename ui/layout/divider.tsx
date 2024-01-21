export default function Divider({ className }: { className?: String }) {
  return (
    <div
      className={`absolute top-0 left-1/2 -translate-x-1/2 w-11/12 h-[1px] bg-white lg:w-full ${className}`}
    ></div>
  );
}

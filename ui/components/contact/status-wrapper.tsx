export default function StatusWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 md:mb-0">
      <div className="flex items-center gap-2 pt-1 h-fit">{children}</div>
    </div>
  );
}

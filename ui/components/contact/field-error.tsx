import { ExclamationIcSvg } from "@/ui/utils/svg";

export default function FieldError({ message }: { message: string }) {
  return (
    <div>
      <div className="absolute top-0 right-0">
        <ExclamationIcSvg />
      </div>
      <div className="absolute top-full right-0 mt-[0.3125rem] text-error text-[0.75rem] leading-snug tracking-tight">
        {message}
      </div>
    </div>
  );
}

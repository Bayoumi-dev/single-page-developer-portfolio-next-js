import { useFormStatus } from "react-dom";
import StatusWrapper from "./status-wrapper";
import Loader from "./loader";
import { CheckIcSvg, ExclamationFillIcSvg } from "../../utils/svg";

export default function FormStatus({
  status,
  message,
}: {
  status: string;
  message: string;
}) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <StatusWrapper>
        <span>Sending</span>
        <Loader />
      </StatusWrapper>
    );
  }

  if (status === "sent") {
    return (
      <StatusWrapper>
        <CheckIcSvg />
        <span>{message}</span>
      </StatusWrapper>
    );
  }

  if (status === "error" && message !== "Please check the form for errors") {
    return (
      <StatusWrapper>
        <ExclamationFillIcSvg />
        <span className="text-error">{message}</span>
      </StatusWrapper>
    );
  }
}

import { Button } from "../buttons";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      name="submit"
      type="submit"
      aria-disabled={pending}
      className="self-end ms-auto pt-0"
    >
      Send message
    </Button>
  );
}

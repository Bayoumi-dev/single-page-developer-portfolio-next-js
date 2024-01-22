import { ButtonLink } from "@/ui/components/buttons";

export default function NotFound() {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-1000 bg-dark flex flex-col items-center justify-center">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <ButtonLink
        to="/"
        nextLink
        className="flex items-center gap-2 mt-1 uppercase hover:underline"
      >
        Return Home
      </ButtonLink>
    </div>
  );
}

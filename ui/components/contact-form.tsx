import { Button } from "./buttons";
import { Input, Textarea } from "./fields";

export default function ContactForm() {
  return (
    <form name="ms-from" className="flex flex-col gap-y-8 md:w-[27.8125rem]">
      <Input name="name" type="text" placeholder="name" aria-label="name" />
      <Input name="email" type="text" placeholder="email" aria-label="email" />
      <Textarea
        name="message"
        id="message"
        placeholder="message"
        aria-label="message"
        defaultValue={""}
      />
      <div className="flex flex-col md:flex-row justify-between">
        <div id="send" className="mb-4 md:mb-0"></div>
        <Button
          name="submit"
          type="submit"
          className="self-end ms-auto pt-0"
        >
          Send message
        </Button>
      </div>
    </form>
  );
}

"use client";

import { Button } from "./buttons";
import { Input, Textarea } from "./fields";
import { useFormState, useFormStatus } from "react-dom";
import { sendEmail, ContactFormState } from "@/lib/actions";

interface ContactMeFormProps {}

const initialState = {
  message: "",
  error: false,
  success: false,
  fieldValues: {
    name: "",
    email: "",
    message: "",
  },
};

export default function ContactForm({}: ContactMeFormProps) {
  const [formState, formAction] = useFormState(sendEmail, initialState);

  function SubmitButton() {
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

  return (
    <form
      id="contact-form"
      action={formAction}
      className="flex flex-col gap-y-8 md:w-[27.8125rem]"
    >
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="name"
        aria-label="name"
      />
      <Input
        id="email"
        name="email"
        type="text"
        placeholder="email"
        aria-label="email"
      />
      <Textarea
        id="message"
        name="message"
        placeholder="message"
        aria-label="message"
        defaultValue={""}
      />
      <div className="flex flex-col md:flex-row justify-between">
        <div id="send" className="mb-4 md:mb-0"></div>
        <SubmitButton />
      </div>
    </form>
  );
}

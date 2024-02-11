"use client";

import { useEffect, useRef, useState } from "react";
import { Input, Textarea } from "./fields";
import { useFormState } from "react-dom";
import { sendEmail, ContactFormState } from "@/lib/actions";
import FormStatus from "./form-status";
import SubmitButton from "./submit-button";

interface ContactMeFormProps {}

const initialState = {
  message: "",
  error: false,
  success: false,
  fieldErrors: {
    name: null,
    email: null,
    message: null,
  },
  fieldValues: {
    name: "",
    email: "",
    message: "",
  },
};

export default function ContactForm({}: ContactMeFormProps) {
  const [formState, formAction] = useFormState(sendEmail, initialState);

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (formState?.success) {
      formRef.current?.reset();
      formRef.current?.classList.add("hold");
    }
  }, [formState]);

  return (
    <form
      id="contact-form"
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-y-8 md:w-[27.8125rem]"
    >
      <Input
        id="name"
        name="name"
        type="text"
        placeholder="name"
        aria-label="name"
        errorMsg={formState.fieldErrors.name}
      />
      <Input
        id="email"
        name="email"
        type="text"
        placeholder="email"
        aria-label="email"
        errorMsg={formState.fieldErrors.email}
      />
      <Textarea
        id="message"
        name="message"
        placeholder="message"
        aria-label="message"
        defaultValue={""}
        errorMsg={formState.fieldErrors.message}
      />
      <div className="flex flex-col md:flex-row justify-between">
        <FormStatus
          status={`${
            formState.success ? "sent" : formState.error ? "error" : "idle"
          }`}
          message={formState.message}
        />
        <SubmitButton />
      </div>
    </form>
  );
}

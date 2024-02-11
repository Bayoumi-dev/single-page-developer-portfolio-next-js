"use server";

import { createTransport } from "nodemailer";
import { htmlMessage } from "@/lib/utils";
import { z } from "zod";

export interface ContactFormState {
  message: string;
  error: boolean;
  success: boolean;
  fieldErrors: {
    name: null | string;
    email: null | string;
    message: null | string;
  };
  fieldValues: {
    name: string;
    email: string;
    message: string;
  };
}

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Must be at least 2 characters")
    .min(1, "Please fill out this field"),
  email: z
    .string()
    .email("Sorry, Invalid email format")
    .min(1, "Please fill out this field"),
  message: z.string().min(1, "Please fill out this field"),
});

export async function sendEmail(
  prevState: ContactFormState,
  formData: FormData
) {
  const {
    EMAIL_HOST,
    EMAIL_SENDER,
    EMAIL_PASSWORD,
    EMAIL_RECIPIENT,
    EMAIL_RECIPIENT_II,
  } = process.env;
  if (!EMAIL_HOST || !EMAIL_SENDER || !EMAIL_PASSWORD) {
    return {
      message: "Ops something went wrong on our side, please try again later",
      error: true,
      success: false,
      fieldErrors: { name: null, email: null, message: null },
      fieldValues: prevState?.fieldValues,
    };
  }
  
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    const fieldErrors: any = {};
    validatedFields.error.issues.forEach((issue: any) => {
      fieldErrors[issue.path[0]] = issue.message;
    });
    return {
      message: "Please check the form for errors",
      error: true,
      success: false,
      fieldErrors,
      fieldValues: prevState?.fieldValues,
    };
  }
  const { name, email, message } = validatedFields.data;

  const transporter = createTransport({
    host: EMAIL_HOST,
    port: 587,
    auth: {
      user: EMAIL_SENDER,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions: any = {
    from: `Contact | ${name} <${EMAIL_SENDER}>`,
    to: [EMAIL_RECIPIENT, EMAIL_RECIPIENT_II],
    replyTo: email,
    subject: `New Message From ${name} | Single page developer  portfolio`,
    html: htmlMessage({ name, email, message }),
  };

  async function asyncSendMail() {
    return new Promise<ContactFormState>((resolve, _) => {
      transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          resolve({
            message: "Something went wrong",
            error: true,
            success: false,
            fieldErrors: { name: null, email: null, message: null },
            fieldValues: prevState.fieldValues,
          });
        } else {
          resolve({
            message: "Successfully sent, Thank you!",
            error: false,
            success: true,
            fieldErrors: { name: null, email: null, message: null },
            fieldValues: {
              name: "",
              email: "",
              message: "",
            },
          });
        }
      });
    });
  }

  return await asyncSendMail();
}

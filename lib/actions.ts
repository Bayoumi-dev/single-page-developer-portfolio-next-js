"use server";

import { createTransport } from "nodemailer";

export interface ContactFormState {
  message: string;
  error: boolean;
  success: boolean;
  fieldValues: {
    name: string;
    email: string;
    message: string;
  };
}
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
  console.log(EMAIL_SENDER);
  if (!EMAIL_HOST || !EMAIL_SENDER || !EMAIL_PASSWORD) {
    return {
      message: "Ops something went wrong on our side, please try again later",
      error: true,
      success: false,
      fieldValues: prevState?.fieldValues,
    };
  }

  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
  const { name, email, message } = rawFormData;
  const htmlMessage = `
  <html>
  <body>
    <p style="font-size: 1.125rem">${message}</p>
    <small>Name: ${name}</small><br>
    <small>Email: ${email}</small>
  </body>
  </html>
`;

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
    html: htmlMessage,
  };

  async function asyncSendMail() {
    return new Promise<ContactFormState>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          resolve({
            message: "Something went wrong",
            error: true,
            success: false,
            fieldValues: prevState.fieldValues,
          });
        } else {
          resolve({
            message: "Successfully sent, Thank you!",
            error: false,
            success: true,
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

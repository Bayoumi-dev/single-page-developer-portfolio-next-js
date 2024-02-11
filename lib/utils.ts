  // HTML body of the email to be sent
  export function htmlMessage(data: { name: string; email: string; message: string }) {
    const { name, email, message } = data;
    return `
    <html>
      <body>
        <p style="font-size: 1.125rem">${message}</p>
        <small>Name: ${name}</small><br>
        <small>Email: ${email}</small>
      </body>
    </html>
  `;
  }
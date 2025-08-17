import nodemailer from "nodemailer";

export async function sendContactEmail(opts: {
  name: string;
  email: string;
  message: string;
}) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    throw new Error("Missing email env vars");
  }
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const info = await transporter.sendMail({
    from: `"IMLP Studio" <${SMTP_USER}>`,
    to: CONTACT_TO,
    subject: "New portfolio inquiry",
    replyTo: opts.email,
    text: `${opts.name} <${opts.email}>\n\n${opts.message}`,
    html: `<p><strong>${opts.name}</strong> &lt;${opts.email}&gt;</p><p>${opts.message.replace(/\n/g, "<br>")}</p>`,
  });
  return info.messageId;
}

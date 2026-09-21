import nodemailer from "nodemailer";
import {
  buildContactEmailHtml,
  buildContactEmailText,
} from "./buildContactEmailHtml";

import { buildMailSubject } from "./submissionMeta";

function getSmtpConfig() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || user;

  if (!user || !pass || !to) {
    throw new Error("SMTP environment variables are not configured.");
  }

  return { user, pass, to, from };
}

export async function sendContactEmail(record) {
  const { user, pass, to, from } = getSmtpConfig();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Portfolio Website Inquiry" <${from}>`,
    to,
    replyTo: `"${record.name}" <${record.email}>`,
    subject: buildMailSubject(record.name),
    text: buildContactEmailText(record),
    html: buildContactEmailHtml(record),
  });
}

import fs from "fs";
import path from "path";
import { escapeHtml } from "./escapeHtml";

const emailTemplate = fs.readFileSync(
  path.join(process.cwd(), "public", "contactEmailTemplate.html"),
  "utf8"
);

function formatSubmittedAt(iso) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function buildContactEmailHtml(record) {
  const values = {
    id: record.id,
    submittedAt: formatSubmittedAt(record.createdAt),
    name: record.name,
    email: record.email,
    subject: record.subject,
    ipAddress: record.ipAddress,
    pageUrl: record.pageUrl,
    referralLink: record.referralLink,
    userAgent: record.userAgent,
    device: record.device,
    messageHtml: escapeHtml(record.message).replace(/\n/g, "<br />"),
  };

  return emailTemplate.replace(/\{\{(\w+)\}\}/g, (placeholder, key) => {
    if (key === "messageHtml") return values[key];
    return escapeHtml(values[key] || "N/A");
  });
}

export function buildContactEmailText(record) {
  const inquiry = [
    "--- Inquiry details ---",
    `Name: ${record.name}`,
    `Email: ${record.email}`,
    `Form Subject: ${record.subject}`,
    "",
    "Message:",
    record.message,
  ].join("\n");

  const meta = [
    "",
    "--- Submission & visitor info ---",
    `Submission ID: ${record.id}`,
    `Submitted At: ${record.createdAt}`,
    `User IP Address: ${record.ipAddress || "N/A"}`,
    `Current Webpage URL: ${record.pageUrl || "N/A"}`,
    `Referral Link: ${record.referralLink || "N/A"}`,
    `User Agent / Browser: ${record.userAgent || "N/A"}`,
    `Device: ${record.device || "N/A"}`,
  ].join("\n");

  return [
    `[New Inquiry] - New Portfolio Website Inquiry from - ${record.name}`,
    "",
    inquiry,
    meta,
  ].join("\n");
}

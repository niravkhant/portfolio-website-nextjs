import { escapeHtml } from "./escapeHtml";

function formatSubmittedAt(iso) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function na(value) {
  return escapeHtml(value || "N/A");
}

const labelCellStyle =
  "padding:12px 14px;border-bottom:1px solid #e8dcc8;background:#faf6ee;font-weight:600;color:#5c4a2a;width:168px;vertical-align:top;line-height:1.5;";
const valueCellStyle =
  "padding:12px 14px;border-bottom:1px solid #e8dcc8;color:#1a150f;line-height:1.55;word-break:break-word;vertical-align:top;";
const messageValueCellStyle =
  "padding:12px 14px;border-bottom:none;color:#1a150f;line-height:1.55;word-break:break-word;vertical-align:top;";

function buildTableRows(rows, { messageHtml }) {
  const lastIndex = rows.length - 1;
  return rows
    .map(([label, value], index) => {
      const isMessage = label === "Message";
      const isLast = index === lastIndex;
      const isLongText =
        label === "User Agent / Browser" ||
        label === "Current Webpage URL" ||
        label === "Referral Link";
      const cell = isMessage
        ? messageHtml
        : isLongText
          ? na(value)
          : escapeHtml(value);
      const labelBorder = isLast ? "border-bottom:none;" : "";
      const labelStyle = `${labelCellStyle}${labelBorder}`;
      const valueStyle = isMessage
        ? messageValueCellStyle
        : isLast
          ? valueCellStyle.replace("border-bottom:1px solid #e8dcc8;", "border-bottom:none;")
          : valueCellStyle;
      return `
        <tr>
          <td style="${labelStyle}">${escapeHtml(label)}</td>
          <td style="${valueStyle}">${cell}</td>
        </tr>`;
    })
    .join("");
}

function wrapDataTable(title, tableRowsHtml, { isFirst = false } = {}) {
  const sectionPad = isFirst ? "padding:0;" : "padding:32px 0 0 0;";
  return `
      <tr>
        <td style="${sectionPad}">
          <h2 style="margin:0 0 14px;font-size:15px;font-weight:700;color:#5c4a2a;letter-spacing:0.02em;line-height:1.4;">${escapeHtml(title)}</h2>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:separate;border-spacing:0;background:#ffffff;border:1px solid #dcc9a3;border-radius:16px;overflow:hidden;box-shadow:0 8px 28px rgba(18,16,11,0.08);">
            ${tableRowsHtml}
          </table>
        </td>
      </tr>`;
}

export function buildContactEmailHtml(record) {
  const {
    id,
    createdAt,
    name,
    email,
    subject,
    message,
    ipAddress,
    pageUrl,
    referralLink,
    userAgent,
    device,
  } = record;
  const submittedAt = formatSubmittedAt(createdAt);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const inquiryRows = [
    ["Name", name],
    ["Email", email],
    ["Form Subject", subject],
    ["Message", message],
  ];

  const metaRows = [
    ["Submission ID", id],
    ["Submitted At", submittedAt],
    ["User IP Address", ipAddress],
    ["Current Webpage URL", pageUrl],
    ["Referral Link", referralLink],
    ["User Agent / Browser", userAgent],
    ["Device", device],
  ];

  const inquiryTable = buildTableRows(inquiryRows, { messageHtml: safeMessage });
  const metaTable = buildTableRows(metaRows, { messageHtml: safeMessage });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Portfolio Inquiry</title>
  </head>
  <body style="margin:0;padding:32px 20px;background:#f3ede0;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;">
      <tr>
        <td style="padding:0 0 28px;">
          <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8d6428;font-weight:700;line-height:1.5;">Nirav Khant | Portfolio Website</div>
          <h1 style="margin:10px 0 0;font-size:24px;line-height:1.3;color:#12100b;">New Contact Inquiry</h1>
          <p style="margin:12px 0 0;color:#5c4a2a;font-size:14px;line-height:1.55;">A visitor submitted the contact form on your portfolio website.</p>
        </td>
      </tr>
      ${wrapDataTable("Inquiry details", inquiryTable, { isFirst: true })}
      ${wrapDataTable("Submission & visitor info", metaTable)}
      <tr>
        <td style="padding:24px 4px 0;font-size:12px;color:#7d705b;line-height:1.5;">
          Reply directly to <a href="mailto:${escapeHtml(email)}" style="color:#8d6428;">${escapeHtml(email)}</a>
        </td>
      </tr>
    </table>
  </body>
</html>`;
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

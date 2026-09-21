import { saveContactSubmission } from "@/lib/contact/saveContactSubmission";
import { sendContactEmail } from "@/lib/contact/sendContactEmail";
import { buildSubmissionMeta } from "@/lib/contact/submissionMeta";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const meta = buildSubmissionMeta(request, body?.meta);

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return Response.json({ error: "Invalid email." }, { status: 400 });
    }

    if (message.length < 10) {
      return Response.json({ error: "Message too short." }, { status: 400 });
    }

    const record = await saveContactSubmission({
      name,
      email,
      subject,
      message,
      ...meta,
    });

    try {
      await sendContactEmail(record);
    } catch (mailError) {
      console.error("Contact email failed:", mailError);
      return Response.json(
        {
          error:
            "Your message was saved but email delivery failed. Please try again or contact directly.",
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true, id: record.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ error: "Server error." }, { status: 500 });
  }
}

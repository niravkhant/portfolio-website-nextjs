const NA = "N/A";

function getDeviceFromUserAgent(userAgent) {
  const ua = String(userAgent || "").toLowerCase();
  if (!ua) return NA;
  if (/ipad|tablet/.test(ua)) return "Tablet";
  if (/mobile|android|iphone|ipod|windows phone/.test(ua)) return "Mobile";
  return "Desktop";
}

export function toMetaValue(value) {
  const text = String(value ?? "").trim();
  return text || NA;
}

export function getRequestIp(request, clientIp) {
  const fromClient = toMetaValue(clientIp);
  if (fromClient !== NA) return fromClient;

  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp?.trim()) return realIp.trim();

  return NA;
}

export function buildSubmissionMeta(request, meta = {}) {
  const headerUserAgent = request.headers.get("user-agent") || "";
  const userAgent = toMetaValue(meta.userAgent || headerUserAgent);
  let device = toMetaValue(meta.device);
  if (device === NA && userAgent !== NA) {
    device = getDeviceFromUserAgent(userAgent);
  }

  return {
    ipAddress: getRequestIp(request, meta.ipAddress),
    pageUrl: toMetaValue(meta.pageUrl),
    referralLink: toMetaValue(meta.referralLink),
    userAgent,
    device,
  };
}

export function buildMailSubject(name) {
  return `[New Inquiry] - New Portfolio Website Inquiry from - ${name}`;
}

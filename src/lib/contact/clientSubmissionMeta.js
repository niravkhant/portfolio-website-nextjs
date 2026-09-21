function getDeviceLabel(userAgent) {
  const ua = String(userAgent || "").toLowerCase();
  if (!ua) return "N/A";
  if (/ipad|tablet/.test(ua)) return "Tablet";
  if (/mobile|android|iphone|ipod|windows phone/.test(ua)) return "Mobile";
  return "Desktop";
}

export async function collectSubmissionMeta() {
  const pageUrl =
    typeof window !== "undefined" ? window.location.href : "N/A";
  const referralLink =
    typeof document !== "undefined" && document.referrer
      ? document.referrer
      : "N/A";
  const userAgent =
    typeof navigator !== "undefined" ? navigator.userAgent : "N/A";
  const device = getDeviceLabel(userAgent);

  let ipAddress = "N/A";
  try {
    const response = await fetch("https://api64.ipify.org?format=json", {
      cache: "no-store",
    });
    if (response.ok) {
      const data = await response.json();
      ipAddress = data?.ip ? String(data.ip) : "N/A";
    }
  } catch {
    ipAddress = "N/A";
  }

  return {
    ipAddress,
    pageUrl,
    referralLink,
    userAgent,
    device,
  };
}

export function getDeviceLabelFromUserAgent(userAgent) {
  return getDeviceLabel(userAgent);
}

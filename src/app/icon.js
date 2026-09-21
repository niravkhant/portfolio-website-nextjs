import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#040302",
          borderRadius: 8,
          color: "#c7a45d",
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}

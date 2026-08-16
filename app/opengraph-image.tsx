import { ImageResponse } from "next/og";
import { profile, site } from "@/content/me";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#1e2127",
          backgroundImage:
            "radial-gradient(900px 500px at 85% -10%, rgba(139,169,221,0.22), transparent), radial-gradient(700px 500px at -10% 120%, rgba(139,169,221,0.14), transparent)",
          color: "#f6f8fc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                width: "60px",
                height: "60px",
                borderRadius: "16px",
                backgroundColor: "#23272f",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "30px",
                fontWeight: 700,
                color: "#f6f8fc",
              }}
            >
              KT
            </div>
            <div
              style={{
                fontSize: "22px",
                letterSpacing: "0.12em",
                color: "#a3aab8",
                textTransform: "uppercase",
              }}
            >
              Portfolio
            </div>
          </div>
          <div style={{ fontSize: "24px", color: "#8ba9dd" }}>
            kartiktyagi.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: "78px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 500,
              color: "#cdd3df",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            fontSize: "24px",
            color: "#8ba9dd",
            letterSpacing: "0.02em",
          }}
        >
          Solution Architecture · Cloud · Modernization · AI-native Engineering
        </div>
      </div>
    ),
    { ...size },
  );
}

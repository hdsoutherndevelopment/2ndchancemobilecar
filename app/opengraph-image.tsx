import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${site.name} — mobile valeting in ${site.baseTown}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#F7F4ED",
          color: "#3F474E",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "#14452F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F7F4ED",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            2C
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#12161A", fontSize: 26, fontWeight: 700 }}>
              2nd Chance
            </span>
            <span style={{ color: "#B65F33", fontSize: 15, letterSpacing: 4 }}>
              MOBILE VALET
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#12161A",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Every vehicle deserves
          </span>
          <span
            style={{
              color: "#14452F",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            a second chance
          </span>
          <span style={{ marginTop: 26, fontSize: 27, color: "#7D8B9B" }}>
            Mobile car &amp; van valeting · {site.baseTown} &amp; {site.county}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 20,
            color: "#767E86",
          }}
        >
          <span>We come to you</span>
          <span style={{ color: "#B65F33" }}>·</span>
          <span>Own water &amp; power</span>
          <span style={{ color: "#B65F33" }}>·</span>
          <span>Fully insured</span>
        </div>
      </div>
    ),
    size,
  );
}

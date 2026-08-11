import { ImageResponse } from "next/og";

export const alt =
  "RoadForge Garage — Upgrade your truck. Own every mile.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "center",
          padding: "78px 86px",
          color: "#f5f2ea",
          background:
            "linear-gradient(115deg, #050708 0%, #12171b 58%, #2b160f 100%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            right: -120,
            bottom: -250,
            borderRadius: "50%",
            background: "rgba(241, 90, 24, 0.24)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 30,
            color: "#f15a18",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 5,
          }}
        >
          <div style={{ width: 54, height: 4, background: "#f15a18" }} />
          TRUCK GEAR GUIDES
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 98,
            lineHeight: 0.86,
            fontWeight: 900,
            letterSpacing: -4,
          }}
        >
          ROADFORGE
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginTop: 22,
            color: "#f15a18",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: 15,
          }}
        >
          <div style={{ width: 160, height: 5, background: "#f15a18" }} />
          GARAGE
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 50,
            color: "#c7cbce",
            fontSize: 29,
            letterSpacing: 0.5,
          }}
        >
          Upgrade your truck. Own every mile.
        </div>
        <div
          style={{
            position: "absolute",
            right: 78,
            bottom: 62,
            display: "flex",
            color: "#8e9499",
            fontSize: 20,
          }}
        >
          roadforgegarage.com
        </div>
      </div>
    ),
    size,
  );
}

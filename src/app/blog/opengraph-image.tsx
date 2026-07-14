import { ImageResponse } from "next/og";

export const alt = "Savoir Link - Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#003ec7",
        backgroundImage:
          "linear-gradient(135deg, #003ec7 0%, #0b57d0 60%, #006c49 100%)",
        fontFamily: "sans-serif",
        padding: "80px",
      }}
    >
      <div
        style={{
          fontSize: 40,
          fontWeight: 700,
          color: "#dbe7ff",
          letterSpacing: "-0.01em",
        }}
      >
        Savoir Link
      </div>
      <div
        style={{
          fontSize: 96,
          fontWeight: 800,
          color: "#ffffff",
          marginTop: 24,
          letterSpacing: "-0.02em",
        }}
      >
        Blog
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#dbe7ff",
          marginTop: 24,
          maxWidth: 900,
        }}
      >
        Tutoriais, guias e dicas para aproveitar melhor a plataforma.
      </div>
    </div>,
    { ...size },
  );
}

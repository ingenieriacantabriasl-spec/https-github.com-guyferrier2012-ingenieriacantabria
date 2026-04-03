import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Ingeniería Cantabria — Jesús Rosas, ingeniero técnico en Cantabria"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0f2744 0%, #1a3a5c 60%, #1e4976 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decoración geométrica */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.12)",
            transform: "translate(140px, -140px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: "120px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.08)",
            transform: "translateY(60px)",
          }}
        />

        {/* Línea de acento */}
        <div
          style={{
            width: "80px",
            height: "5px",
            background: "#3b82f6",
            borderRadius: "3px",
            marginBottom: "32px",
          }}
        />

        {/* Título principal */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            color: "#ffffff",
            lineHeight: "1.1",
            marginBottom: "20px",
            letterSpacing: "-1px",
          }}
        >
          Ingeniería Cantabria
        </div>

        {/* Especialidades */}
        <div
          style={{
            fontSize: "28px",
            color: "#93c5fd",
            marginBottom: "48px",
            letterSpacing: "0.5px",
          }}
        >
          Industrial · Edificación · Agronómica
        </div>

        {/* Datos del ingeniero */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#3b82f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              color: "#ffffff",
              fontWeight: "700",
            }}
          >
            JR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "22px", color: "#e2e8f0", fontWeight: "600" }}>
              Jesús Rosas — Ingeniero Técnico Colegiado
            </div>
            <div style={{ fontSize: "18px", color: "#94a3b8" }}>
              Torrelavega, Cantabria
            </div>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "18px",
            color: "#64748b",
            letterSpacing: "0.5px",
          }}
        >
          ingenieriacantabria.com
        </div>
      </div>
    ),
    { ...size }
  )
}

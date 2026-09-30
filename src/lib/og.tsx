import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const ogSize = { width: 1200, height: 630 };

const colors = {
  bg: "#0b0d10",
  line: "#242a33",
  fg: "#e8eaed",
  muted: "#a4abb6",
  subtle: "#6d7581",
  accent: "#5eead4",
};

type OgProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  chips: string[];
};

/** Shared 1200×630 social preview card used by the home page and case studies. */
export function renderOgImage({ eyebrow, title, subtitle, chips }: OgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: colors.bg,
          backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          color: colors.fg,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              border: `2px solid ${colors.line}`,
              background: colors.bg,
              color: colors.accent,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            AJ
          </div>
          <div style={{ display: "flex", fontSize: 24, color: colors.accent }}>{eyebrow}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", background: colors.bg, padding: "8px 0" }}>
          <div style={{ display: "flex", fontSize: title.length > 32 ? 60 : 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 28, lineHeight: 1.4, color: colors.muted, maxWidth: 980 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {chips.slice(0, 4).map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: `1px solid ${colors.line}`,
                  background: colors.bg,
                  color: colors.accent,
                  fontSize: 20,
                }}
              >
                {c}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 20, color: colors.subtle }}>{profile.name}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}

/**
 * Shared visual for Next.js OG / Twitter / app icons (next/og ImageResponse subset).
 */

const navy = "#0f1720";
const steel = "#3d5a73";
const yellow = "#e8b80c";

type Variant = "share" | "icon" | "apple";

export function OgArtboard({
  variant,
  titlePrefix,
}: {
  variant: Variant;
  titlePrefix?: string;
}) {
  if (variant === "icon") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: navy,
          color: yellow,
          fontSize: 18,
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.05em",
        }}
      >
        RM
      </div>
    );
  }

  if (variant === "apple") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(165deg, ${navy} 0%, #1a2838 55%, ${steel} 100%)`,
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: yellow,
            letterSpacing: "-0.06em",
            marginBottom: 8,
          }}
        >
          RM
        </div>
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            opacity: 0.9,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          RodeMann
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: `linear-gradient(145deg, ${navy} 0%, #152030 45%, ${steel} 100%)`,
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 10,
          backgroundColor: yellow,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "56px 64px 72px",
          justifyContent: "center",
        }}
      >
        {titlePrefix ? (
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: yellow,
              marginBottom: 16,
            }}
          >
            {titlePrefix}
          </div>
        ) : null}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#fff",
            letterSpacing: "-0.04em",
            maxWidth: 900,
          }}
        >
          RodeMann Infrastructure B.V.
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "rgba(255,255,255,0.88)",
            marginTop: 20,
            maxWidth: 880,
            lineHeight: 1.35,
          }}
        >
          Engineering the Future, Today.
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "rgba(255,255,255,0.72)",
            marginTop: 28,
            maxWidth: 920,
            lineHeight: 1.45,
          }}
        >
          Road construction · Earthworks · Material supply · Drainage · Heavy equipment logistics
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 48,
          right: 64,
          fontSize: 20,
          fontWeight: 600,
          color: "rgba(255,255,255,0.5)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Riyadh · KSA · regional programmes
      </div>
    </div>
  );
}

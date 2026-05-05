import Header from "../components/Header";

export default function BeddrPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #31136a 0%, #6e3dbd 45%, #cc7bdb 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 10s ease infinite",

        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <Header />
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    <img
      src="/beddrlogo.png"
      alt="BeddrLogo"
      style={{
        width: 40,
        height: 40,
        objectFit: "contain",
      }}
    />
      <h1
        style={{
          color: "#ffffff",
          fontSize: "clamp(72px, 14vw, 180px)",
          fontWeight: 800,
          letterSpacing: "-0.06em",
          margin: 0,
          textShadow:
            "0 0 12px rgba(255,255,255,0.55), 0 0 36px rgba(192,132,252,0.65), 0 0 80px rgba(109,40,217,0.55)",
          animation: "fadeIn 1.2s ease forwards",
        }}
      >
        Beddr
      </h1>
    </main>
  );
}
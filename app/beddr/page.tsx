import Header from "../components/Header";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function BeddrPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage:
          "linear-gradient(135deg, #13166a 0%, #4e3dbd 45%, #cc7bdb 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 10s ease infinite",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <Header />

      <div
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src="/beddrLogo.png"
          alt="BeddrLogo"
          style={{
            width: 160,
            height: 160,
            objectFit: "contain",
            marginBottom: 16,
            animation: "fadeIn 1.2s ease forwards",
            borderRadius: 30,
            boxShadow: "0 4px 12px rgba(37, 32, 78, 0.58)",
            
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
        <div style={styles.buttonRow}>
          <a
            href="https://apps.apple.com/us/app/beddr/id6762494224"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            Download on App Store
          </a>

          <Link href="/beddr/privacy" style={styles.button}>
            Privacy Policy
          </Link>

          <Link href="/beddr/terms" style={styles.button}>
            Terms of Service
          </Link>

          <Link href="/beddr/support" style={styles.button}>
            Support
          </Link>
        </div>
      </div>

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
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "14px",
    marginTop: "32px",
    animation: "fadeIn 1.4s ease forwards",
  },

  button: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontWeight: 700,
    padding: "14px 20px",
    borderRadius: "999px",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    border: "1px solid rgba(255, 255, 255, 0.28)",
    backdropFilter: "blur(14px)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.18)",
  },
};
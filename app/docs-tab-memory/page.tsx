import Header from "../components/Header";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function DocsTabMemoryPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage:
          "linear-gradient(135deg, #0b2a5b 0%, #1a73e8 50%, #6fd3c7 100%)",
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
          padding: "40px 16px",
        }}
      >
        <img
          src="/tabMemoryLogo.png"
          alt="Docs Tab Collapsed Memory logo"
          style={{
            width: 160,
            height: 160,
            objectFit: "contain",
            marginBottom: 16,
            animation: "fadeIn 1.2s ease forwards",
            borderRadius: 30,
            boxShadow: "0 4px 12px rgba(11, 42, 91, 0.58)",
          }}
        />

        <h1
          style={{
            color: "#ffffff",
            fontSize: "clamp(38px, 8vw, 104px)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            margin: 0,
            maxWidth: "14ch",
            lineHeight: 1.05,
            textShadow:
              "0 0 12px rgba(255,255,255,0.55), 0 0 36px rgba(111,211,199,0.65), 0 0 80px rgba(26,115,232,0.55)",
            animation: "fadeIn 1.2s ease forwards",
          }}
        >
          Docs Tab Collapsed Memory
        </h1>

        <p style={styles.subtitle}>
          A Chrome extension that remembers which Google Docs tabs you collapsed
          and keeps them that way every time you open or refresh the document.
        </p>

        <div style={styles.buttonRow}>
          <span style={styles.pill}>Coming soon to the Chrome Web Store</span>

          <Link href="/docs-tab-memory/privacy" style={styles.button}>
            Privacy Policy
          </Link>

          <a href="mailto:beddr.team@gmail.com" style={styles.button}>
            Support
          </a>
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
  subtitle: {
    color: "rgba(255, 255, 255, 0.86)",
    fontSize: "clamp(15px, 2vw, 20px)",
    lineHeight: 1.5,
    maxWidth: "52ch",
    margin: "20px auto 0",
    animation: "fadeIn 1.3s ease forwards",
  },

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

  pill: {
    color: "rgba(255, 255, 255, 0.92)",
    fontSize: "16px",
    fontWeight: 700,
    padding: "14px 20px",
    borderRadius: "999px",
    backgroundColor: "rgba(0, 0, 0, 0.18)",
    border: "1px dashed rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(14px)",
  },
};

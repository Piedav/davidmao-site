import Link from "next/link";
import type { CSSProperties } from "react";


export default function Header() {
  return (
    <header style={styles.header}>
        <img
        src="/maologo.png"
        alt="dmao"
        style={{
        width: 40,
        height: 40,
        objectFit: "contain",
        }}
    />

      <nav style={styles.tabs}>
        <Link href="/" style={styles.tab}>
          Home
        </Link>
        <Link href="/beddr" style={styles.tab}>
          Beddr
        </Link>

        <Link href="/apush" style={styles.tab}>
          APUSH Study Tools
        </Link>
      </nav>
    </header>
  );
}

const styles: Record<string, CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    height: 64,
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
  },

  logo: {
    textDecoration: "none",
    fontSize: 22,
    fontWeight: 800,
    color: "#7c3aed",
  },

  tabs: {
    display: "flex",
    gap: 24,
    alignItems: "center",
  },

  tab: {
    textDecoration: "none",
    color: "#374151",
    fontSize: 15,
    fontWeight: 600,
  },

}
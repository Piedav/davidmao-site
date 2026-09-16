"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";

export default function Header() {
  const pathname = usePathname();

  const getTabStyle = (href: string): CSSProperties => {
    const isActive =
      href === "/"
        ? pathname === "/"
        : pathname.startsWith(href);

    return {
      ...styles.tab,
      ...(isActive ? styles.activeTab : {}),
    };
  };

  return (
    <header style={styles.header}>
      <Link href="/" style={styles.logo}>
        <img src="/maologo.png" alt="dmao" style={styles.logoImage} />
      </Link>

      <nav style={styles.tabs}>
        <Link href="/" style={getTabStyle("/")}>
          Home
        </Link>

        <Link href="/beddr" style={getTabStyle("/beddr")}>
          Beddr
        </Link>

        <Link href="/apush" style={getTabStyle("/apush")}>
          APUSH Study Tools
        </Link>

        <Link
          href="/docs-tab-memory"
          style={getTabStyle("/docs-tab-memory")}
        >
          Docs Tab Collapsed Memory
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
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },

  logoImage: {
    width: 40,
    height: 40,
    objectFit: "contain",
  },

  tabs: {
    display: "flex",
    gap: 24,
    alignItems: "center",
  },

  tab: {
    textDecoration: "none",
    color: "#6b7280",
    fontSize: 15,
    fontWeight: 600,
  },

  activeTab: {
    color: "#111827",
    fontWeight: 800,
  },
};
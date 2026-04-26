"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function Home() {
  //const [hue, setHue] = useState(20);
  const [time, setTime] = useState(0);

  const radius = 50;

  const x = Math.sin(time) * radius + 50;
  const y = Math.cos(time) * radius + 50;
  const x2 = Math.sin(time + Math.PI) * radius + 50;
  const y2 = Math.cos(time + Math.PI) * radius + 50;
  const hue = 30 + Math.sin(time) * 30;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.015);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setHue((prevHue) => (prevHue + 0.2) % 360);
  //   }, 15);

  //   return () => clearInterval(interval);
  // }, []);

  const dynamicBackground: CSSProperties = {
    background: `
      radial-gradient(circle 50vw at ${x}% ${y}%, hsl(${hue-25}, 80%, 70%), transparent),
      radial-gradient(circle 100vw at 50% 50%, hsl(${hue}, 80%, 70%), transparent),
      radial-gradient(circle 50vw at ${x2}% ${y2}%, hsl(${hue + 25}, 80%, 70%), transparent),
      #ffffff
    `,
  };

  return (
    <main style={{ ...styles.main, ...dynamicBackground }}>
      <div style={styles.card}>
        <h1 style={styles.title}>David Mao</h1>
        <p style={styles.subtitle}>Stay tuned — more coming soon :)</p>
      </div>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

  card: {
    textAlign: "center",
    backdropFilter: "blur(24px)",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "5rem",
    borderRadius: "5rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },

  title: {
    fontSize: "8rem",
    fontWeight: 700,
    letterSpacing: "-0.025em",
  },

  subtitle: {
    marginTop: "1.5rem",
    color: "rgba(255, 255, 255, 0.74)",
    fontSize: "3rem"
  },
};
"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const photos = [
  "/china/photo1.webp",
  "/china/photo2.webp",
  "/china/photo3.webp",
  "/china/photo4.webp",
  "/china/photo5.webp",
  "/china/photo6.webp",
  "/china/photo7.webp",
  "/china/photo8.webp",
  "/china/photo9.webp",
  "/china/photo10.webp",
  "/china/photo11.webp",
  "/china/photo12.webp",
  "/china/photo13.webp",
  "/china/photo14.webp",
  "/china/photo15.webp",
];

export default function Home() {
  //const [hue, setHue] = useState(20);
  const [time, setTime] = useState(0);
  const [index, setIndex] = useState(0);

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
  const nextPhoto = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };
  const prevPhoto = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

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
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>David Mao</h1>
          <p style={styles.subtitle}>This site is still under construction.<br />For now, enjoy some photos of China! (⌒ー⌒)</p>
        </div>
        
        <div style={styles.carousel}>
          <button style={styles.button} onClick={prevPhoto}>
            ←
          </button>
          <div style={styles.photoFrame}>
            <img
              src={photos[index]}
              alt={`China photo ${index + 1}`}
              style={styles.photo}
            />
          </div>
          <button style={styles.button} onClick={nextPhoto}>
            →
          </button>
        </div>
        <p style={styles.counter}>
          {index + 1} / {photos.length}
        </p>
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
    padding: "clamp(0.5rem, 1vw, 0.5rem)",
    overflow: "hidden",
  },

  container: {
    textAlign: "center",
    width: "min(96vw, 1300px)",
    padding: "clamp(0.75rem, 2vw, 2rem)",
    borderRadius: "clamp(1.5rem, 4vw, 3rem)",

    transformOrigin: "center center",
  },

  card: {
    textAlign: "center",
    backdropFilter: "blur(24px)",
    backgroundColor: "rgba(0, 0, 0, 0.32)",
    padding: "clamp(0.75rem, 1.5vw, 1.5rem)",
    borderRadius: "clamp(1rem, 3vw, 2.5rem)",
    border: "1px solid rgba(30, 27, 27, 0.1)",

    width: "clamp(260px, 50vw, 700px)",
    margin: "0 auto",
  },

  title: {
    fontSize: "clamp(1.8rem, 3.5vw, 4rem)",
    fontWeight: 700,
    letterSpacing: "-0.025em",
    margin: 0,
  },

  subtitle: {
    color: "rgba(255, 255, 255, 0.74)",
    fontSize: "clamp(0.9rem, 2vw, 1.5rem)",
    lineHeight: 1.3,
    maxWidth: "90%",
    margin: "0 auto",
  },

  carousel: {
    display: "grid",
    gridTemplateColumns: "clamp(2.5rem, 5vw, 2rem) minmax(0, 40vw) clamp(2.5rem, 5vw, 2rem)",
    alignItems: "center",
    justifyContent: "center",
    gap: "clamp(0.5rem, 2vw, 1.5rem)",
    marginTop: "clamp(0.5rem, 1.5vw, 1rem)",
  },

  photoFrame: {
    width: "100%",
    height: "min(45vw, 55vh)",
    maxHeight: "750px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  photo: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "clamp(1rem, 3vw, 2rem)",
    border: "clamp(2px, 0.4vw, 4px) solid white",
    boxShadow: "0 clamp(1rem, 4vw, 30px) clamp(2rem, 8vw, 80px) rgba(0, 0, 0, 0.35)",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },

  button: {
    width: "clamp(2.5rem, 5vw, 4rem)",
    height: "clamp(2.5rem, 5vw, 4rem)",
    borderRadius: "999px",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    color: "white",
    fontSize: "clamp(1.25rem, 2vw, 2rem)",
    cursor: "pointer",
  },

  counter: {
    marginTop: "clamp(0.75rem, 2vw, 1.5rem)",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
  },
};
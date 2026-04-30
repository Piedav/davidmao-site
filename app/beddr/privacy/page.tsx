export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0f0f1a 0%, #111124 100%)",
        padding: "40px 16px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: 820,
          width: "100%",
          backgroundColor: "#18182b",
          borderRadius: 16,
          padding: "32px 28px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          color: "#EAEAF0",
          lineHeight: 1.7,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: 28 }}>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 6,
              color: "#ffffff",
            }}
          >
            Beddr Privacy Policy
          </h1>

          <p style={{ color: "#A0A0B8", fontSize: 14 }}>
            Last updated: April 29, 2026
          </p>
        </div>

        {/* INTRO */}
        <p style={{ marginBottom: 24 }}>
          Beddr is operated by Helen Mao. This Privacy Policy explains how we
          collect, use, and protect your information when you use the Beddr
          mobile application.
        </p>

        {/* SECTION */}
        <Section title="Information We Collect">
          <BulletList
            items={[
              "Name (from Google or Apple sign-in)",
              "Email address",
              "User activity data (locked time, competition stats)",
            ]}
          />
        </Section>

        <Section title="How We Use Your Information">
          <BulletList
            items={[
              "Create and manage your account",
              "Track competition progress and leaderboards",
              "Display your stats within the app",
            ]}
          />
        </Section>

        <Section title="Data Storage">
          <p>
            Your data is stored securely using Firebase services. We take
            reasonable measures to protect your information.
          </p>
        </Section>

        <Section title="Data Sharing">
          <p>
            We do not sell or share your personal data with third parties, except
            as required to operate the app (e.g., Firebase authentication).
          </p>
        </Section>

        <Section title="Account Deletion">
          <p>
            You can delete your account at any time from the Profile screen in
            the app. This will permanently remove your account and associated
            data.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions, contact:
            <br />
            <span style={{ color: "#cc7bdb", fontWeight: 600 }}>
              beddrteam@gmail.com
            </span>
          </p>
        </Section>
      </div>
    </main>
  );
}

/* ---------- Reusable Components ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginTop: 28 }}>
      <h2
        style={{
          fontSize: 20,
          fontWeight: 600,
          marginBottom: 10,
          color: "#ffffff",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          height: 1,
          background: "rgba(255,255,255,0.08)",
          marginBottom: 12,
        }}
      />

      <div style={{ color: "#CFCFE6" }}>{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 18 }}>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: 8 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
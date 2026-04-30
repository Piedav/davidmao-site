export default function SupportPage() {
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
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 6, color: "#ffffff" }}>
            Beddr Support
          </h1>

          <p style={{ color: "#A0A0B8", fontSize: 14 }}>
            Last updated: April 29, 2026
          </p>
        </div>

        <p style={{ marginBottom: 24 }}>
          Need help with Beddr? Use this page to find support information,
          common troubleshooting steps, and contact details.
        </p>

        <Section title="Contact Support">
          <p>
            For help with Beddr, contact us at:
            <br />
            <span style={{ color: "#cc7bdb", fontWeight: 600 }}>
              beddr.team@gmail.com
            </span>
          </p>
        </Section>

        <Section title="Common Issues">
          <BulletList
            items={[
              "Trouble signing in with Google or Apple.",
              "A competition code is not working.",
              "Your locked time or competition points are not updating.",
              "You want to delete your account or remove your data.",
              "Notifications are not appearing as expected.",
            ]}
          />
        </Section>

        <Section title="Account Help">
          <p>
            Beddr uses Google Sign-In and Apple Sign-In for account access. If
            you are having trouble signing in, make sure you are using the same
            sign-in method you originally used to create your account.
          </p>
        </Section>

        <Section title="Competition Help">
          <p>
            If a competition code is not working, check that the code was entered
            correctly and that the competition has not already ended. Competition
            points are based on recorded locked-in time during the competition
            date range.
          </p>
        </Section>

        <Section title="Notifications">
          <p>
            Beddr may use notifications to alert you when a lock-in session ends.
            If notifications are not appearing, check that notifications are
            enabled for Beddr in your device settings.
          </p>
        </Section>

        <Section title="Account Deletion">
          <p>
            You can delete your account inside the Beddr app from the Profile
            screen. Deleting your account removes your Beddr profile, stored
            progress data, and authentication account. This action cannot be
            undone.
          </p>
        </Section>

        <Section title="Response Time">
          <p>
            We will do our best to respond to support emails as soon as possible.
          </p>
        </Section>
      </div>
    </main>
  );
}

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
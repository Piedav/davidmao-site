export default function TermsPage() {
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
          <h1
            style={{
              fontSize: 32,
              fontWeight: 700,
              marginBottom: 6,
              color: "#ffffff",
            }}
          >
            Beddr Terms of Service
          </h1>

          <p style={{ color: "#A0A0B8", fontSize: 14 }}>
            Last updated: April 29, 2026
          </p>
        </div>

        <p style={{ marginBottom: 24 }}>
          These Terms of Service (&quot;Terms&quot;) govern your use of the
          Beddr mobile application (&quot;App&quot;), operated by Helen Mao. By
          using Beddr, you agree to these Terms.
        </p>

        <Section title="Use of the App">
          <p>
            Beddr allows users to track focused time and participate in
            competitions. You agree to use the app only for its intended purposes
            and not to misuse or attempt to manipulate competition results.
          </p>
        </Section>

        <Section title="User Accounts">
          <p>
            You sign in using Google or Apple authentication. You are responsible
            for maintaining the security of your account.
          </p>
        </Section>

        <Section title="Data and Metrics">
          <p>
            Beddr may collect and analyze usage data, including time spent in
            locked sessions and competition performance.
          </p>
          <p style={{ marginTop: 12 }}>
            We may use aggregated and anonymized data to generate overall
            statistics, such as total hours of focused time across all users.
            These statistics do not identify individual users.
          </p>
        </Section>

        <Section title="Account Deletion">
          <p>
            You may delete your account at any time from within the app. Deleting
            your account will permanently remove your personal data associated
            with the app.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            Beddr is provided &quot;as is&quot; without warranties of any kind.
            We are not responsible for any damages resulting from use of the app.
          </p>
        </Section>

        <Section title="Changes to These Terms">
          <p>
            We may update these Terms from time to time. Continued use of the app
            constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions, contact:
            <br />
            <span style={{ color: "#cc7bdb", fontWeight: 600 }}>
              beddr.team@gmail.com
            </span>
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
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
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 6, color: "#ffffff" }}>
            Beddr Privacy Policy
          </h1>

          <p style={{ color: "#A0A0B8", fontSize: 14 }}>
            Last updated: April 29, 2026
          </p>
        </div>

        <p style={{ marginBottom: 24 }}>
          Beddr is a mobile app operated by Helen Mao. This Privacy Policy
          explains what information Beddr collects, how it is used, and how
          users can control their data.
        </p>

        <Section title="Information We Collect">
          <p>Beddr may collect the following information:</p>
          <BulletList
            items={[
              "Account information, such as your name, email address, and user ID when you sign in with Google or Apple.",
              "Profile information, such as your display name.",
              "App activity information, including lock-in session timestamps, locked minutes, weekly locked minutes, lifetime locked minutes, competition participation, points, rankings, and competition history.",
              "Competition information, including competition names, rewards, join codes, start dates, end dates, participants, and leaderboard data.",
              "Notification permission status if you choose to allow notifications.",
            ]}
          />
          <p>
            Beddr does not collect your precise location, contacts, photos,
            microphone recordings, camera data, health data, or payment card
            information.
          </p>
        </Section>

        <Section title="How We Use Information">
          <BulletList
            items={[
              "Create and manage your Beddr account.",
              "Track your focused or locked-in time.",
              "Display your progress, stats, competitions, points, and leaderboards.",
              "Allow users to create, join, and participate in competitions.",
              "Send local notifications related to lock-in sessions.",
              "Maintain app security and prevent misuse of competition features.",
              "Improve the reliability and functionality of the app.",
            ]}
          />
        </Section>

        <Section title="Sign-In Providers">
          <p>
            Beddr uses Google Sign-In and Apple Sign-In to authenticate users.
            These services may provide Beddr with your name, email address, and
            unique account identifier. Your use of Google or Apple sign-in is
            also subject to the privacy policies of those providers.
          </p>
        </Section>

        <Section title="Data Storage">
          <p>
            Beddr uses Firebase services, including Firebase Authentication and
            Cloud Firestore, to store account, profile, progress, and competition
            data.
          </p>
          <p>
            Some account information may also be stored locally on your device so
            that Beddr can keep you signed in and remember your onboarding
            status.
          </p>
        </Section>

        <Section title="Notifications">
          <p>
            Beddr may ask for permission to send notifications. Notifications
            are used to alert you when a lock-in session ends or when
            app-related reminders are needed. You can disable notifications at
            any time in your device settings.
          </p>
        </Section>

        <Section title="Sharing of Information">
          <p>Beddr does not sell your personal information.</p>
          <p>
            Some information, such as your display name, points, ranking, and
            competition participation, may be visible to other users in the same
            competition.
          </p>
          <p>
            We may share information only when necessary to operate the app,
            comply with legal obligations, protect the safety of users, or
            prevent fraud or misuse.
          </p>
        </Section>

        <Section title="Data Retention">
          <p>
            We keep your information for as long as your account is active or as
            needed to provide Beddr’s features. If you delete your account, Beddr
            will delete your profile data and remove your user entry from
            competitions, unless retention is required by law or necessary for
            legitimate security purposes.
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

        <Section title="Children’s Privacy">
          <p>
            Beddr is not intended for children under 13. We do not knowingly
            collect personal information from children under 13.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We use reasonable technical measures to protect user information.
            However, no method of electronic storage or transmission is
            completely secure.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will update the “Last updated” date above.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions about this Privacy Policy or want help with
            your data, contact us at:
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
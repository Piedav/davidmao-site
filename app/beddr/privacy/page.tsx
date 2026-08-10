import Link from "next/link";

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
      <Link
        href="/beddr"
        aria-label="Back to Beddr"
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          width: 130,
          height: 44,
          borderRadius: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 800,
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          border: "1px solid rgba(255, 255, 255, 0.22)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(12px)",
          zIndex: 50,
        }}
      >
        ← Home
      </Link>
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
            Last updated: August 10, 2026
          </p>
        </div>

        <p style={{ marginBottom: 24 }}>
          Beddr is a mobile app published on the Apple App Store by Helen Mao
          and operated by David Mao. This Privacy Policy explains what
          information Beddr collects, how it is used, and how users can
          control their data.
        </p>

        <Section title="Information We Collect">
          <p>Beddr may collect the following information:</p>
          <BulletList
            items={[
              "Account information, such as your name, email address, and user ID when you sign in with Google or Apple.",
              "Profile information, such as your display name and your companion's selected color.",
              "App activity information, including lock-in session timestamps, locked minutes, weekly locked minutes, lifetime locked minutes, competition participation, points, rankings, and competition history.",
              "Competition information, including competition names, rewards, join codes, start dates, end dates, participants, and leaderboard data.",
              "Friends and social information, if you choose to use these features: your friend code, your friend requests and friendships, whether your display name is discoverable to other users through search, your approximate online/last-active status (if you enable that setting), your membership in a shared lock-in session with friends, and — if you enable the optional \"share sparkle level\" setting — a single value representing your current day's focus progress, visible to people you are actively locked in with.",
            ]}
          />
          <p>
            If you choose to block specific apps, categories, or websites
            during a lock-in session, Beddr uses Apple's Family Controls and
            Screen Time frameworks to apply that restriction. Apple's system
            is designed so that the specific identity of the apps and
            websites you select is never disclosed to us — we store only an
            opaque, Apple-generated token representing your selection, which
            we use to reapply your chosen restrictions on future sessions.
          </p>
          <p>
            Beddr does not collect your precise location, contacts, photos,
            microphone recordings, camera data, health data, payment card
            information, or the specific identity of any apps, categories, or
            websites you choose to block.
          </p>
        </Section>

        <Section title="How We Use Information">
          <BulletList
            items={[
              "Create and manage your Beddr account.",
              "Track your focused or locked-in time.",
              "Display your progress, stats, competitions, points, and leaderboards.",
              "Allow users to create, join, and participate in competitions.",
              "Allow users to add friends, control their own visibility, and lock in together in shared sessions, if they choose to use these features.",
              "Maintain app security and prevent misuse of competition and social features.",
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
            Cloud Firestore, to store account, profile, progress, competition,
            and friends/social data.
          </p>
          <p>
            Some account information may also be stored locally on your device so
            that Beddr can keep you signed in and remember your onboarding
            status.
          </p>
        </Section>

        <Section title="Notifications">
          <p>
            Beddr does not currently send push or local device notifications.
            In-app alerts — for example, an invitation from a friend to lock
            in together — appear only while the app is open, and only to
            signed-in users on their own device.
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
            If you use Beddr's friends features, your display name may be
            visible to other users through search if you enable that setting.
            Confirmed friends may see your online status (if enabled), and
            people you are actively locked in with can see your companion's
            color and, if you enable "share sparkle level," your current
            day's focus progress.
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
            needed to provide Beddr's features. If you delete your account, Beddr
            will delete your profile data and remove your user entry from
            competitions and friend connections, unless retention is required by
            law or necessary for legitimate security purposes.
          </p>
        </Section>

        <Section title="Account Deletion">
          <p>
            You can delete your account inside the Beddr app from the Profile
            screen. Deleting your account removes your Beddr profile, stored
            progress data, friend code, friend requests, friendships, and
            authentication account. This action cannot be undone.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            Beddr is not intended for children under 13. We do not knowingly
            collect personal information from children under 13.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We use reasonable technical measures, including Firestore security
            rules that restrict who can read or write each piece of data, to
            protect user information. However, no method of electronic storage
            or transmission is completely secure.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will update the "Last updated" date above.
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

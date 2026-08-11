import Link from "next/link";

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
            Last updated: August 11, 2026
          </p>
        </div>

        <p style={{ marginBottom: 24 }}>
          These Terms of Service (&quot;Terms&quot;) govern your use of the
          Beddr mobile application (&quot;App&quot;, &quot;Beddr&quot;,
          &quot;we&quot;, &quot;us&quot;), published on the Apple App Store
          by Helen Mao and operated by David Mao. By creating an account or
          using the App, you agree to these Terms and to our Privacy Policy,
          which is incorporated into these Terms by reference. If you do not
          agree, do not use the App.
        </p>

        <Section title="Eligibility">
          <p>
            You must be at least 13 years old to use Beddr. By using the
            App, you represent that you meet this requirement and that you
            have the legal capacity to enter into these Terms. If you are
            under the age of majority in your jurisdiction, you represent
            that a parent or legal guardian has reviewed and agreed to these
            Terms on your behalf.
          </p>
        </Section>

        <Section title="Use of the App">
          <p>
            Beddr lets you track focused (&quot;locked-in&quot;) time,
            optionally restrict access to apps, categories, or websites you
            select during a focus session, participate in competitions, and
            optionally connect and lock in together with friends. You agree
            to use the App only for its intended purposes.
          </p>
        </Section>

        <Section title="User Accounts">
          <p>
            You sign in using Google or Apple authentication. You are
            responsible for maintaining the security of your account and
            for all activity that occurs under it. Notify us promptly at the
            contact below if you believe your account has been compromised.
          </p>
        </Section>

        <Section title="Acceptable Use">
          <p>You agree not to:</p>
          <BulletList
            items={[
              "Misuse, exploit, or attempt to manipulate competition results, rankings, or points.",
              "Use the friends, search, or lock-in invite features to harass, impersonate, or contact anyone without their consent.",
              "Attempt to circumvent another user's privacy settings, or access data you are not authorized to see.",
              "Attempt to gain unauthorized access to the App, other users' accounts, or our systems.",
              "Use the App in any way that violates applicable law.",
            ]}
          />
        </Section>

        <Section title="Screen Time &amp; App-Blocking Features">
          <p>
            Beddr uses Apple&rsquo;s Family Controls and Screen Time
            frameworks to restrict access to apps, categories, or websites
            that you specifically choose to block during a focus session.
            You are solely responsible for deciding what to block and for
            understanding the consequences of doing so, including temporary
            loss of access to communication, navigation, payment, or other
            apps for the duration of your session.
          </p>
          <p style={{ marginTop: 12 }}>
            You can adjust or remove Beddr&rsquo;s Screen Time permissions at
            any time through your device&rsquo;s Settings app. Beddr is not
            responsible for any consequence of a restriction you chose to
            apply, including missed communications, missed time-sensitive
            information, or inability to access an app or website during an
            emergency. If you may need uninterrupted access to a particular
            app or service, do not select it for blocking.
          </p>
        </Section>

        <Section title="Data and Metrics">
          <p>
            Beddr may collect and analyze usage data, including time spent
            in locked sessions and competition performance, as described in
            our Privacy Policy. If you use Beddr&rsquo;s optional friends and
            group lock-in features, certain information (such as your
            display name, online status, companion appearance, and daily
            focus progress) may be visible to other users as described in
            the Privacy Policy and controlled by your own privacy settings.
          </p>
          <p style={{ marginTop: 12 }}>
            We may use aggregated and anonymized data to generate overall
            statistics, such as total hours of focused time across all
            users. These statistics do not identify individual users.
          </p>
        </Section>

        <Section title="Account Deletion">
          <p>
            You may delete your account at any time from within the App.
            Deleting your account permanently removes your profile,
            progress data, friend code, friend requests, and friendships, as
            described in our Privacy Policy. This action cannot be undone.
          </p>
        </Section>

        <Section title="Termination">
          <p>
            We may suspend or terminate your access to the App at any time,
            with or without notice, if we believe you have violated these
            Terms or engaged in conduct that harms Beddr, other users, or
            third parties. You may stop using the App at any time.
          </p>
        </Section>

        <Section title="Disclaimer of Warranties">
          <p>
            Beddr is provided &quot;as is&quot; and &quot;as available,&quot;
            without warranties of any kind, whether express, implied, or
            statutory, including implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement. We do
            not warrant that the App will be uninterrupted, error-free,
            secure, or that it will help you achieve any particular outcome,
            including improved focus or productivity.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Beddr and its operators
            will not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of data, use,
            goodwill, or other intangible losses, resulting from your use of
            or inability to use the App, even if advised of the possibility
            of such damages. To the fullest extent permitted by law, our
            total liability for any claim arising from these Terms or the
            App will not exceed the amount, if any, you paid us in the 12
            months before the claim arose. Some jurisdictions do not allow
            the exclusion or limitation of certain damages, so some of the
            above limitations may not apply to you.
          </p>
        </Section>

        <Section title="Indemnification">
          <p>
            You agree to indemnify and hold harmless Beddr and its operators
            from any claims, damages, losses, or expenses (including
            reasonable legal fees) arising from your use of the App, your
            violation of these Terms, or your violation of any rights of
            another person or entity.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            These Terms are governed by the laws of the Commonwealth of
            Pennsylvania, USA, without regard to its conflict of law
            principles.
          </p>
        </Section>

        <Section title="Changes to These Terms">
          <p>
            We may update these Terms from time to time. If we make
            material changes, we will update the &quot;Last updated&quot;
            date above. Continued use of the App after a change takes
            effect constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="Severability">
          <p>
            If any provision of these Terms is found unenforceable, the
            remaining provisions will remain in full force and effect.
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
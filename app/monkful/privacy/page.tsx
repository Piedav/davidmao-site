import Link from "next/link";

export default function MonkfulPrivacyPage() {
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
        href="/monkful"
        aria-label="Back to Monkful"
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
            Monkful Privacy Policy
          </h1>

          <p style={{ color: "#A0A0B8", fontSize: 14 }}>
            Last updated: November 23, 2026
          </p>
        </div>

        <p style={{ marginBottom: 24 }}>
          Monkful is a Google Chrome extension developed by David Mao. It shows
          a meditating monk on the web pages you visit, and his mood reflects
          how much time you spend on sites you have marked as distracting. This
          Privacy Policy explains what the extension reads, what it stores,
          where it is stored, and what it never does.
        </p>

        <Section title="Information We Collect">
          <p>
            The extension does not collect any user data. Nothing it reads or
            saves is ever transmitted off your device. It makes no network
            requests, and there are no servers, accounts, analytics,
            advertising, or tracking of any kind associated with it.
          </p>
        </Section>

        <Section title="What the Extension Reads">
          <BulletList
            items={[
              "The web address of the tab you are currently looking at. The extension compares the site's domain (for example youtube.com) with your list of distracting sites to decide whether you are focused or distracted. The address is checked on the spot and is never saved or sent anywhere.",
              "Whether you are active. Chrome's idle feature tells the extension only whether you are active, have been away from the keyboard for 5 minutes, or have locked your screen, so that focus time pauses while you are away. It never learns what you are doing.",
            ]}
          />
        </Section>

        <Section title="What the Extension Stores on Your Device">
          <p>
            To do its job, the extension saves the following locally in your
            browser, using Chrome&apos;s <code>chrome.storage.local</code>{" "}
            storage:
          </p>
          <BulletList
            items={[
              "Your display setting: whether the monk is always on screen, only appears on distracting sites, or is turned off.",
              "Your list of distracting sites.",
              "The monk's focus level, and when it last changed.",
              "When your current visit to a distracting site began, and your total distracted time for today. These are times and durations only, not the sites you visited.",
              "Where you have placed the monk on the screen.",
            ]}
          />
          <p>
            This information stays in the Chrome profile where it was created.
            It is not synced to us or to anyone else.
          </p>
        </Section>

        <Section title="Permissions the Extension Uses">
          <BulletList
            items={[
              "Access to http and https websites — used to show the monk on the pages you visit, and to check the current site's address against your list of distracting sites.",
              "Storage — used to save your settings and the monk's state locally on your device, as described above.",
              "Idle — used to pause focus time while you are away from the computer or your screen is locked.",
              "Alarms — used to update the monk's focus level once a minute.",
              "Scripting — used to add the monk to tabs that were already open when the extension is installed or updated, so you do not need to reload them.",
            ]}
          />
        </Section>

        <Section title="Your Page Content">
          <p>
            The extension does not read, modify, store, or transmit the content
            of the pages you visit. It only places the monk on top of the page
            in its own separate layer, which you can drag, click, or turn off at
            any time.
          </p>
        </Section>

        <Section title="Sharing of Information">
          <p>
            Because no data ever leaves your device, there is nothing to share.
            We do not sell, transfer, or disclose user data to third parties. We
            do not use any data for creditworthiness or lending purposes, and we
            do not use it for any purpose unrelated to the extension&apos;s
            single function.
          </p>
        </Section>

        <Section title="Data Retention and Deletion">
          <p>
            Your settings and the monk&apos;s state remain in your browser
            until you delete them. Removing the extension from Chrome deletes
            everything it has stored. You can also clear this data at any time
            through Chrome&apos;s own browsing data settings.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            The extension is a general-purpose productivity tool and does not
            collect personal information from anyone, including children.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will update the &quot;Last updated&quot; date
            above. If the extension ever begins handling data differently, this
            policy and the extension&apos;s Chrome Web Store disclosures will be
            updated before that change takes effect.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have questions about this Privacy Policy or the extension,
            contact us at:
            <br />
            <span style={{ color: "#f2d27a", fontWeight: 600 }}>
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

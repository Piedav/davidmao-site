import Link from "next/link";

export default function DocsTabMemoryPrivacyPage() {
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
        href="/docs-tab-memory"
        aria-label="Back to Docs Tab Collapsed Memory"
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
            Docs Tab Collapsed Memory Privacy Policy
          </h1>

          <p style={{ color: "#A0A0B8", fontSize: 14 }}>
            Last updated: September 16, 2026
          </p>
        </div>

        <p style={{ marginBottom: 24 }}>
          Docs Tab Collapsed Memory is a Google Chrome extension developed by
          David Mao. It remembers which tabs you have collapsed in a Google Docs
          document and restores that layout the next time the document opens.
          This Privacy Policy explains what the extension stores, where it is
          stored, and what it never does.
        </p>

        <Section title="Information We Collect">
          <p>
            The extension does not collect any user data. Nothing it saves is
            ever transmitted off your device. It makes no network requests, and
            there are no servers, accounts, analytics, advertising, or tracking
            of any kind associated with it.
          </p>
        </Section>

        <Section title="What the Extension Stores on Your Device">
          <p>
            To do its job, the extension saves the following locally in your
            browser, using Chrome&apos;s <code>chrome.storage.local</code>{" "}
            storage:
          </p>
          <BulletList
            items={[
              "For each Google Docs document you use, the titles of the tabs that have subtabs, and whether each of those tabs is currently collapsed or expanded.",
              "Your two extension settings: whether the Collapse all / Expand all buttons are shown, and whether subtabs start out collapsed by default.",
            ]}
          />
          <p>
            This information stays in the Chrome profile where it was created.
            It is what allows the extension to restore your tab layout after a
            refresh, and it is not synced to us or to anyone else.
          </p>
        </Section>

        <Section title="Permissions the Extension Uses">
          <BulletList
            items={[
              "Storage — used to save your collapsed tab layout and your settings locally on your device, as described above.",
              "Access to https://docs.google.com/document/* — the extension's script runs only on Google Docs document pages. There it reads which tabs are collapsed in the tabs sidebar and clicks the sidebar's own expand and collapse buttons to restore your previous layout.",
            ]}
          />
          <p>
            The extension requests no other site access and runs on no other
            websites.
          </p>
        </Section>

        <Section title="Your Document Content">
          <p>
            The extension does not read, modify, store, or transmit the contents
            of your documents. The only text it reads is the titles of tabs
            shown in the document tabs sidebar, which it uses solely as labels
            to tell your tabs apart when saving their collapsed state on your
            own device.
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
            Saved tab layouts and settings remain in your browser until you
            delete them. Removing the extension from Chrome deletes everything
            it has stored. You can also clear this data at any time through
            Chrome&apos;s own browsing data settings.
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
            <span style={{ color: "#6fd3c7", fontWeight: 600 }}>
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

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 24, color: "#ffffff" }}>
      <h1>Beddr Terms of Service</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <p>
        These Terms of Service ("Terms") govern your use of the Beddr mobile application
        ("App"), operated by Helen Mao. By using Beddr, you agree to these Terms.
      </p>

      <h2>Use of the App</h2>
      <p>
        Beddr allows users to track focused time and participate in competitions.
        You agree to use the app only for its intended purposes and not to misuse
        or attempt to manipulate competition results.
      </p>

      <h2>User Accounts</h2>
      <p>
        You sign in using Google or Apple authentication. You are responsible for
        maintaining the security of your account.
      </p>

      <h2>Data and Metrics</h2>
      <p>
        Beddr may collect and analyze usage data, including time spent in locked
        sessions and competition performance.
      </p>
      <p>
        We may use aggregated and anonymized data to generate overall statistics,
        such as total hours of focused time across all users. These statistics do
        not identify individual users.
      </p>

      <h2>Account Deletion</h2>
      <p>
        You may delete your account at any time from within the app. Deleting your
        account will permanently remove your personal data associated with the app.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Beddr is provided "as is" without warranties of any kind. We are not
        responsible for any damages resulting from use of the app.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the app
        constitutes acceptance of the updated Terms.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions, contact: <br />
        <strong>your-email@example.com</strong>
      </p>
    </main>
  );
}
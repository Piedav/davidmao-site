export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 24, color: "#111" }}>
      <h1>Beddr Privacy Policy</h1>
      <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

      <p>
        Beddr is operated by Helen Mao. This Privacy Policy explains how we collect,
        use, and protect your information when you use the Beddr mobile application.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Name (from Google or Apple sign-in)</li>
        <li>Email address</li>
        <li>User activity data (locked time, competition stats)</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>Create and manage your account</li>
        <li>Track competition progress and leaderboards</li>
        <li>Display your stats within the app</li>
      </ul>

      <h2>Data Storage</h2>
      <p>
        Your data is stored securely using Firebase services. We take reasonable
        measures to protect your information.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell or share your personal data with third parties, except as
        required to operate the app (e.g., Firebase authentication).
      </p>

      <h2>Account Deletion</h2>
      <p>
        You can delete your account at any time from the Profile screen in the app.
        This will permanently remove your account and associated data.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions, contact: <br />
        <strong>beddrteam@gmail.com</strong>
      </p>
    </main>
  );
}
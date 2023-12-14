import "../../public/styles/30_pages/privacyPolicy.css";

export default function Privacy() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <main className="policy">
      <h2 className="policy">
        <strong>Privacy Policy for "Your Creepy Stories"</strong>
      </h2>
      <p className="policy">Last updated: {currentDate}</p>
      <p>
        Welcome to "Your Creepy Stories" (the "Website"). This Privacy Policy is
        designed to help you understand how we collect, use, disclose, and
        safeguard your personal information. By using the Website, you agree to
        the terms outlined in this policy.
      </p>
      <h2>
        <strong>Information We Collect:</strong>
      </h2>
      <ul className="policy">
        <li className="policy">
          <strong>Personal Information:</strong> We may collect personal
          information such as your name, email address, or other details when
          you submit creepy stories or interact with our Website.
        </li>
        <li>
          <strong>Usage Information:</strong> We may collect non-personal
          information about how you use and navigate the Website, such as the
          pages you visit and the time spent on each page.
        </li>
      </ul>

      <h2>
        <strong>How We Use Your Information:</strong>
      </h2>
      <ul>
        <li>
          <strong>Creepy Stories:</strong> Any creepy stories or personal
          information you submit may be published on the Website, unless you
          specify otherwise. We reserve the right to review and moderate
          submissions for appropriateness.
        </li>
        <li>
          <strong>Communication:</strong> We may use your email address to
          communicate with you regarding your submissions, updates to the
          Website, or other relevant information.
        </li>
        <li>
          <strong>Analytics:</strong> We may use analytics tools to gather
          information about how users interact with the Website to improve its
          functionality and user experience.
        </li>
      </ul>

      <h2>
        <strong>Third-Party Links:</strong>
      </h2>
      <p>
        The Website may contain links to third-party websites. We are not
        responsible for the privacy practices or content of these third-party
        sites. Please review the privacy policies of these sites before
        providing any personal information.
      </p>

      <h2>
        <strong>Security:</strong>:
      </h2>
      <p>
        We take reasonable measures to protect your personal information.
        However, no method of transmission over the internet or electronic
        storage is entirely secure, and we cannot guarantee the absolute
        security of your data.
      </p>

      <h2>
        <strong>Your Choices:</strong>
      </h2>
      <p>
        You can choose not to submit personal information or creepy stories to
        the Website. If you have submitted information and would like it
        removed, please contact us.
      </p>

      <h2>
        <strong>Updates to This Privacy Policy:</strong>
      </h2>
      <p>
        We may update this Privacy Policy to reflect changes in our practices.
        We encourage you to review this page periodically for the latest
        information.
      </p>

      <h2>
        <strong>Contact Us:</strong>
      </h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at example@email.com.
      </p>
    </main>
  );
}

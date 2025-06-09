
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE_NAME}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description={`Last updated: ${new Date().toLocaleDateString()}`}
      />
      <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8 prose prose-lg text-foreground">
        <p>Welcome to {SITE_NAME}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.</p>
        
        <h2>1. INFORMATION WE COLLECT</h2>
        <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names; phone numbers; email addresses; mailing addresses; job titles; contact preferences; contact or authentication data; billing addresses; and other similar information.</p>

        <h2>2. HOW WE USE YOUR INFORMATION</h2>
        <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To post testimonials.</li>
          <li>Request feedback.</li>
          <li>To enable user-to-user communications.</li>
          <li>To manage user accounts.</li>
          <li>To send administrative information to you.</li>
          <li>To protect our Services.</li>
          <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
          <li>To respond to legal requests and prevent harm.</li>
          <li>Fulfill and manage your orders.</li>
          <li>To deliver and facilitate delivery of services to the user.</li>
          <li>To respond to user inquiries/offer support to users.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>Deliver targeted advertising to you.</li>
        </ul>

        <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
        <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

        <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

        <h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).</p>

        <h2>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.</p>

        <h2>7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>In some regions (like the European Economic Area and United Kingdom), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.</p>

        <h2>8. UPDATES TO THIS POLICY</h2>
        <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>

        <h2>9. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
        <p>If you have questions or comments about this policy, you may email us at info@{SITE_DOMAIN} or by post to:</p>
        <p>
          {SITE_NAME}<br />
          Rruga "Sami Frashëri", No. 123<br />
          Tirana, Albania
        </p>
      </div>
    </>
  );
}

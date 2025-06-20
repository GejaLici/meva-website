
import { PageHeader } from '@/components/shared/PageHeader';
import { SITE_NAME, SITE_DOMAIN } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Official Privacy Policy for ${SITE_NAME}. Understand how we collect, use, and protect your personal information in compliance with data protection regulations.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description={`Last updated: ${new Date().toLocaleDateString()}`}
      />
      <div className="container mx-auto max-w-screen-lg px-4 py-12 sm:px-6 lg:px-8 prose prose-lg text-foreground">
        <p>Welcome to ${SITE_NAME} (hereinafter referred to as "we," "us," or "our"). We are steadfastly committed to protecting your personal information and your fundamental right to privacy. This Privacy Policy governs your access to and use of our website, ${SITE_DOMAIN}, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@{SITE_DOMAIN}.</p>
        
        <h2>1. INFORMATION WE COLLECT</h2>
        <p>We collect personal information that you voluntarily provide to us when you register on the Site, express an interest in obtaining information about us or our products and services, when you participate in activities on the Site, or otherwise when you contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make, and the products and features you use. The personal information we may collect includes, but is not limited to: full names; phone numbers; email addresses; postal addresses; professional titles; contact preferences; authentication data; billing addresses; and other similar information necessary for providing our services and communications.</p>

        <h2>2. HOW WE USE YOUR INFORMATION</h2>
        <p>We use personal information collected via our Site for a variety of legitimate business purposes as described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your explicit consent, and/or for compliance with our legal obligations.</p>
        <ul>
          <li>To facilitate account creation and the logon process.</li>
          <li>To post testimonials with your prior consent.</li>
          <li>To request feedback and contact you about your use of the Site.</li>
          <li>To enable user-to-user communications with each user’s consent.</li>
          <li>To manage user accounts and maintain their accuracy.</li>
          <li>To send administrative information to you, such as information regarding our services, changes to our terms, conditions, and policies.</li>
          <li>To protect our Services, including fraud monitoring and prevention.</li>
          <li>To enforce our terms, conditions, and policies for business purposes, to comply with legal and regulatory requirements, or in connection with our contractual obligations.</li>
          <li>To respond to legal requests and prevent harm as required by applicable law.</li>
          <li>To fulfill and manage your requests for services or appointments.</li>
          <li>To deliver and facilitate delivery of services to the user.</li>
          <li>To respond to user inquiries and offer comprehensive support to users.</li>
          <li>To send you marketing and promotional communications, if you have opted-in to receive such communications.</li>
          <li>To deliver targeted advertising to you, where permissible.</li>
        </ul>

        <h2>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
        <p>We only share your personal information with your explicit consent, to comply with applicable laws, to provide you with our services, to protect your rights, or to fulfill legitimate business obligations. We may process or share data based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, Vital Interests.</p>

        <h2>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <p>We may use cookies and similar tracking technologies (such as web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our separate Cookie Notice (if applicable) or will be detailed herein if a separate notice is not provided.</p>

        <h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal or regulatory requirements). No purpose in this policy will require us keeping your personal information for longer than the period of time in which users have an account with us plus a reasonable period for archival or legal purposes.</p>

        <h2>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. These measures aim to prevent unauthorized access, disclosure, alteration, or destruction of your personal data. However, despite our safeguards and continuous efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. Therefore, we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Transmission of personal information to and from our Site is at your own risk.</p>

        <h2>7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p>In some regions, such as the European Economic Area (EEA) and the United Kingdom (UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure of your personal information; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below.</p>

        <h2>8. UPDATES TO THIS POLICY</h2>
        <p>We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by an updated "Revised" or "Last updated" date and the updated version will be effective as soon as it is accessible on the Site. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>

        <h2>9. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
        <p>If you have questions, comments, or concerns about this privacy policy, or our data practices, you may email our Data Protection Officer at info@{SITE_DOMAIN} or contact us by post at:</p>
        <p>
          {SITE_NAME}<br />
          Attn: Data Protection Officer<br />
          Rruga "Sami Frashëri", No. 123<br />
          Tirana, Albania
        </p>
      </div>
    </>
  );
}

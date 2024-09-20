import React from "react";

function Privacy() {
  return (
    <div
      className="container"
      style={{ marginTop: "5rem", marginBottom: "5rem" }}
    >
      <div className="row" style={{ display: "flex", alignItems: "center" }}>
        <div className="col-lg-6 col-md-12">
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "500",
            }}
          >
            Privacy Policy
          </h2>
          <h5>updated: August 11, 2024</h5>
          <p style={{ marginTop: "2rem",fontSize:"1.1rem"}}>
            Welcome to LearnSPhere ("we," "our," or "us"). We value your privacy
            and are committed to protecting your personal information. This
            Privacy Policy outlines how we collect, use, disclose, and safeguard
            your information when you visit our e-learning website LearnSphere
            (the "Website"). By accessing or using our Website, you agree to the
            terms of this Privacy Policy.
          </p>
        </div>
        <div className="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
          <img
            style={{ width: "60%", borderRadius: "50%" }}
            src="../Images/privacy.png"
            alt="privacy"
          />
        </div>
      </div>

      <div className="row privacy-content">
        <div id="content">
          <h1 style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            Information We Collect
          </h1>
          <p>
            We collect various types of information from our users, including:
          </p>
          <ul>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                Personal Information
              </h4>
              <ul>
                <li className="lists">
                  <h6>Registration Information: </h6>
                  <p>
                    When you sign up for an account, we may collect your name,
                    email address, password, and other contact details.
                  </p>
                </li>
                <li className="lists">
                  <h6>Profile Information: </h6>
                  <p>
                    You may voluntarily provide additional information such as
                    your profile picture, bio, and other educational details.
                  </p>
                </li>
                <li className="lists">
                  <h6>Payment Information: </h6>
                  <p>
                    If you make a purchase, we collect payment details,
                    including your credit/debit card information or other
                    payment methods.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                Non-Personal Information
              </h4>
              <ul>
                <li className="lists">
                  <h6>Usage Data:</h6>
                  <p>
                    We collect information about how you use our Website,
                    including the pages you visit, the time and date of your
                    visit, the time spent on those pages, and other diagnostic
                    data.
                  </p>
                </li>
                <li className="lists">
                  <h6>Device Information:</h6>
                  <p>
                    We may collect information about the device you use to
                    access the Website, including your device's IP address,
                    operating system, browser type, and unique device
                    identifiers.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                Cookies and Tracking Technologies
              </h4>
              <p>
                We use cookies, web beacons, and similar tracking technologies
                to collect information about your interaction with our Website.
                You can control the use of cookies through your browser
                settings.
              </p>
            </li>
          </ul>
        </div>
        <div id="content">
          <h1 style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            How We Use Your Information
          </h1>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                To Provide and Improve Our Services
              </h4>
              <ul>
                <li>To create and manage your account.</li>
                <li>
                  To process transactions and send you related information,
                  including purchase confirmations and invoices.
                </li>
                <li>
                  To personalize your learning experience based on your
                  preferences and usage patterns.
                </li>
              </ul>
            </li>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                To Communicate with You
              </h4>
              <ul>
                <li>
                  To send you updates, newsletters, and other communications
                  related to your account or our services.
                </li>
                <li>
                  To respond to your comments, questions, and requests for
                  customer support.
                </li>
              </ul>
            </li>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                To Ensure Security and Compliance
              </h4>
              <ul>
                <li>
                  To monitor and analyze usage trends and improve the safety and
                  security of our Website.
                </li>
                <li>
                  To comply with legal obligations and protect our rights and
                  interests.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id="content">
          <h1 style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            Your Rights and Choices
          </h1>
          <ul>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                Access and Correction
              </h4>
              <p>
                You have the right to access and update your personal
                information at any time. You can do this by logging into your
                account settings.
              </p>
            </li>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                Data Portability
              </h4>
              <p>
                You have the right to request a copy of your personal data in a
                structured, commonly used, and machine-readable format.
              </p>
            </li>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                Right to Deletion
              </h4>
              <p>
                You may request the deletion of your personal information.
                Please note that we may retain certain information as required
                by law or for legitimate business purposes.
              </p>
            </li>
            <li>
              <h4 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
                Opt-Out
              </h4>
              <p>
                You may opt-out of receiving promotional communications from us
                by following the unsubscribe instructions in the emails we send.
                Even after you opt-out of receiving promotional messages, you
                will still receive administrative messages regarding your
                account.
              </p>
            </li>
          </ul>
        </div>
        <div id="content">
          <h1 style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            Security of Your Information
          </h1>
          <p>
            We take the security of your personal information very seriously and
            implement a range of technical, administrative, and physical
            measures to safeguard it. These measures include encryption of
            sensitive data during transmission, secure servers, firewalls,
            access controls, and regular security audits. Our systems are
            designed to protect against unauthorized access, disclosure,
            alteration, or destruction of your data.
          </p>
          <p>
            However, it's important to understand that no method of transmitting
            or storing data electronically can be completely secure. While we
            strive to use commercially acceptable means to protect your personal
            information, we cannot guarantee its absolute security. In the event
            of a data breach, we have protocols in place to address the issue
            promptly and notify affected users as required by applicable laws
            and regulations.
          </p>
        </div>
        <div id="content">
          <h1 style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            Children's Privacy
          </h1>
          <p>
            Protecting the privacy of young children is particularly important
            to us. Our Website is designed for general audiences and is not
            intended for use by children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that a child under 13 has provided us with personal
            information, we will take immediate steps to delete such information
            from our records.
          </p>
          <p>
            If you are a parent or guardian and believe that your child under 13
            has provided us with personal information, please contact us
            immediately. We will work with you to ensure that such information
            is deleted from our systems and take any additional actions
            necessary to protect your child's privacy.
          </p>
        </div>
        <div id="content">
          <h1 style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            International Data Transfers
          </h1>
          <p>
            As part of our operations, your personal information may be
            transferred to and stored on servers located outside your country,
            state, or jurisdiction where the data protection laws may differ
            from those in your location. For example, if you are accessing our
            Website from the European Economic Area (EEA), your data may be
            transferred to countries outside the EEA where the level of data
            protection may not be as stringent.
          </p>
          <p>
            By using our Website and providing us with your personal
            information, you consent to the transfer of your data to countries
            outside your own, including the United States, where our servers are
            located. We take appropriate steps to ensure that your data is
            treated securely and in accordance with this Privacy Policy,
            regardless of where it is processed. This includes implementing data
            protection measures such as standard contractual clauses or relying
            on other legal mechanisms to ensure an adequate level of protection.
          </p>
        </div>
        <div id="content">
          <h1 style={{ marginTop: "4rem", marginBottom: "1rem" }}>
            Changes to this Privacy Policy
          </h1>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time to reflect changes in our practices, technology, legal
            requirements, or other factors. When we make changes to this Privacy
            Policy, we will update the "Effective Date" at the top of the page.
            We encourage you to review this Privacy Policy periodically to stay
            informed about how we are protecting your personal information.
          </p>
          <p>
            In the event of significant changes that affect your rights or the
            way we handle your personal data, we may provide more prominent
            notice, such as by sending you an email notification or posting an
            announcement on our Website. Your continued use of our Website
            following the posting of changes to this Privacy Policy constitutes
            your acceptance of those changes. If you do not agree with the
            updated terms, you should discontinue your use of the Website and
            contact us to deactivate your account.
          </p>
        </div>
      </div>
       
    </div>
  );
}

export default Privacy;

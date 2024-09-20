import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div
      className="container"
      style={{ marginTop: "5rem", marginBottom: "5rem" }}
    >
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h1 style={{ fontSize: "3rem", fontWeight: "400" }}>
            Terms and Conditions
          </h1>
          <h6 style={{ fontWeight: "700" }}>Updated: August 12, 2024</h6>
          <p style={{ fontSize: "1.3rem", marginTop: "2rem" }}>
            Welcome to LearnSphere! By accessing or using our e-learning website,
            you agree to comply with the following Terms and Conditions. These
            terms govern your use of the services provided on our website and
            outline the rights and responsibilities of both you as the user and
            us as the service provider. If you do not agree with any of these
            terms, please do not use our website.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12" style={{ textAlign: "center" }}>
          <img
            src="../Images/terms.png"
            alt="terms"
            style={{ borderRadius: "50%", width: "50%" }}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "5rem" }}>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Acceptance of Terms
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            By using our website, creating an account, or accessing any of our
            content or services, you acknowledge that you have read, understood,
            and agree to be bound by these Terms and Conditions. Your continued
            use of the website constitutes your ongoing acceptance of these
            terms.
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            User Responsibilities
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            As a user of our website, you agree to provide accurate and current
            information when creating an account. You are responsible for
            maintaining the confidentiality of your account credentials and for
            all activities that occur under your account. You agree to use the
            website only for lawful purposes and in a manner that does not
            infringe on the rights of others or restrict or inhibit their use
            and enjoyment of the website.
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Content Ownership and Usage
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            All content available on our website, including but not limited to
            text, images, videos, course materials, and software, is owned by us
            or our licensors. This content is protected by intellectual property
            laws and may not be reproduced, distributed, modified, or used for
            any purpose other than personal, non-commercial use, unless
            expressly authorized by us. Any content you upload or post to the
            website, such as comments or assignments, remains your property, but
            by doing so, you grant us a non-exclusive, worldwide license to use,
            display, and distribute that content as necessary to operate the
            website.
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Purchases and Payments
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            When you purchase a course, subscription, or other service from our
            website, you agree to pay all applicable fees. Prices for our
            services are subject to change, but we will always honor the price
            at the time of your purchase. Payment must be made through the
            payment methods we provide, and your payment information must be
            accurate and up-to-date. We reserve the right to suspend or
            terminate your access to services if payment is not received in a
            timely manner.
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Refunds and Cancellations
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            We offer refunds and allow cancellations in accordance with
            our&nbsp;
            <Link to={"/refund"} style={{ textDecoration: "none" }}>
              Refund and Cancellation Policy
            </Link>
            . It is your responsibility to review this policy before making a
            purchase. Refund requests made outside of the terms specified in our
            policy may not be honored. If you cancel a subscription or course
            enrollment, you may be eligible for a refund, depending on when the
            cancellation occurs relative to the start of the service.
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Limitation of Liability
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            While we strive to provide high-quality educational content and a
            reliable platform, we cannot guarantee that our website will always
            function without errors or interruptions. Our services are provided
            "as is" and "as available," without any warranties of any kind. We
            are not liable for any direct, indirect, incidental, or
            consequential damages arising from your use of the website,
            including but not limited to loss of data, profits, or goodwill,
            even if we have been advised of the possibility of such damages.
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Modifications to Terms
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            We reserve the right to update or modify these Terms and Conditions
            at any time. When changes are made, we will update the "Effective
            Date" at the top of this document. It is your responsibility to
            review these terms periodically to stay informed of any changes.
            Your continued use of the website after any modifications
            constitutes your acceptance of the updated terms.
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Governing Law and Dispute Resolution
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            These Terms and Conditions are governed by the laws of [Your
            Country/State], without regard to its conflict of law principles.
            Any disputes arising out of or relating to these terms or your use
            of the website will be resolved through binding arbitration in
            accordance with the rules of [Arbitration Organization], and both
            parties agree to submit to the jurisdiction of the courts located in
            [Your Country/State].
          </p>
        </div>
        <div>
          <h2
            style={{
              fontSize: "2.2rem",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Termination
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            We may, at our sole discretion, suspend or terminate your access to
            our website and services without notice if we believe that you have
            violated these Terms and Conditions. Upon termination, your right to
            use the website will cease immediately, and any data or content you
            have stored on the website may be deleted.
          </p>
        </div>
        <hr style={{ marginTop: "5rem" }}></hr>
        <h6 style={{ marginTop: "1rem", textAlign: "center" }}>
          This document provides a comprehensive overview of the terms and
          conditions that users must agree to when using our e-learning
          website, ensuring that both parties are protected and that the
          expectations are clear.
        </h6>
      </div>
    </div>
  );
}

export default Terms;

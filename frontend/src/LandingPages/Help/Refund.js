import React from "react";

function Refund() {
  return (
    <div className="container" style={{marginTop:"5rem", marginBottom:"5rem"}}>
      <div style={{textAlign:"center", marginBottom:"4rem"}}>
        <h1 style={{fontSize:"2.5rem",marginBottom:"1rem"}}>Refund and Cancellation Policy</h1>
        <p style={{fontWeight:"500", fontSize:"1.1rem"}}>
          At LearnSphere, we strive to ensure your satisfaction with our
          services. Please review our refund and cancellation policy below:
        </p>
      </div>
      <div style={{marginBottom:"4rem"}}>
        <h3 style={{fontSize:"1.8rem", marginBottom:"1rem"}}>Cancellations:</h3>
        <ul style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
          <li>
            You can cancel your subscription or course enrollment at any time
            before it begins.
          </li>
          <li>
            To cancel, please contact our support team or manage your
            subscription through your account settings.
          </li>
          <li>
            If you cancel before the start of a course or subscription period,
            you will receive a full refund.
          </li>
        </ul>
      </div>
      <div style={{marginBottom:"4rem"}}>
        <h3 style={{fontSize:"1.8rem", marginBottom:"1rem"}}>Refunds:</h3>
        <ul style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
          <li>
            Refunds are available within the first 7 days after the start of a course or subscription.
          </li>
          <li>
            To request a refund, please contact our support team with your order
            details.
          </li>
          <li>
            Refunds will be processed back to the original payment method within
            4-5 business days.
          </li>
        </ul>
      </div>
      <div style={{marginBottom:"4rem"}}>
        <h3 style={{fontSize:"1.8rem", marginBottom:"1rem"}}>Non-Refundable Items:</h3>
        <ul style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
          <li>
            Certain digital products(Ebooks, download content) or services may
            be non-refundable. These will be clearly indicated at the time of
            purchase.
          </li>
          <li>
            Refunds are not available for partially used subscriptions or
            courses after the refund period has passed.
          </li>
        </ul>
      </div>
      <div style={{marginBottom:"4rem"}}>
        <h3 style={{fontSize:"1.8rem", marginBottom:"1rem"}}>Exceptional Circumstances:</h3>
        <ul style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
          <li>
            If you experience any technical issues or other exceptional
            circumstances that prevent you from accessing our services, please
            reach out to our support team. We will assess your situation and may
            offer a refund or alternative solution at our discretion.
          </li>
        </ul>
      </div>
      <hr></hr>
      <p style={{fontWeight:"500", fontSize:"1.2rem", textAlign:"center"}}>
        We are committed to providing you with the best possible experience. If
        you have any questions or concerns about our refund and cancellation
        policy, please contact our support team
      </p>
    </div>
  );
}

export default Refund;

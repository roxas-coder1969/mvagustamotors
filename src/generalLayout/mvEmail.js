import React from "react";

export default function MvEmail() {
  return (
    <>
      <div className="email-container">
        <p className="email-subscribe">SUBSCRIBE TO OUR NEWSLETTER</p>
        <div className="your-email">
          <p>YOUR E-MAIL</p>
        </div>
        <p className="policy">
          *by sending us e-mail address, you agree with our
          <a href style={{ display: "inline", marginLeft: "3px" }}> privacy policy</a>
        </p>
      </div>
    </>
  );
}

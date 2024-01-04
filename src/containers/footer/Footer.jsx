import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

export const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Obadea , All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>
            <a href="https://github.com/Obadea">GitHub</a>
          </p>
          <p>
            <a href="tel:+2348088127274">+234 808 8127 274</a>
          </p>
          <p>
            <a href="mailto:obadeagbenga.gmail.com">obadeagbenga.gmail.com</a>
          </p>
          <p>
            <a href="https://twitter.com/Obadea0">X(twitter)</a>
          </p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>
          © 2024 <a href="https://twitter.com/Obadea0">OBADEA</a> GPT-3. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

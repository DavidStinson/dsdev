import React from "react";

import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github-dark.png";
import at from "../assets/images/at-solid.svg";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-me">
      <div className="contact-items">
        <a
          id="linkedin-contact"
          className="contact-item"
          href="https://linkedin.com/in/david-stinson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn Logo"
            className="social-logo-large"
          ></img>
        </a>
        <a
          id="github-contact"
          className="contact-item"
          href="https://github.com/DavidStinson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="GitHub Logo"
            className="social-logo-large"
          ></img>
        </a>
        <a
          id="twitter-contact"
          className="contact-item"
          href="https://twitter.com/davidstinson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={twitter}
            alt="Twitter Logo"
            className="social-logo-large"
          ></img>
        </a>
        <div id="email-contact" className="contact-item-end">
          <img
            src={at}
            alt="email at Logo"
            className="social-logo-large"
          ></img>
        </div>
        <span id="contact-email" className="contact-address">mail</span>
        <span id="contact-at" className="contact-address">@</span>
        <span id="contact-name" className="contact-address">davidstinson</span>
        <span id="contact-dev" className="contact-address">.dev</span>
      </div>
    </section>
  );
}

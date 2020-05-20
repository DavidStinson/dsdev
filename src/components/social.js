import React, { Component } from "react";

import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github-dark.png";

import "aos/dist/aos.css";
import "./social.css";

class Social extends Component {
  componentDidMount() {
    const AOS = require("aos");
    this.aos = AOS;
    this.aos.init({ duration: 900, easing: "ease-in-sine" });
  }

  componentDidUpdate() {
    this.aos.refresh();
  }

  render() {
    return (
      <aside
        className="social-container"
        data-aos="fade-down"
        data-aos-anchor="#portfolio-head"
        data-aos-anchor-placement="top-top"
      >
        <div
          className="social-name-container item item--primary"
          id="social-name"
        >
          <span>David Stinson</span>
        </div>
        <div className="social-site-container">
          <a
            className="social-link"
            href="https://linkedin.com/in/david-stinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn Logo"
              className="social-logo"
            ></img>
          </a>
          <a
            className="social-link"
            href="https://github.com/DavidStinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub Logo" id="github-logo-small"></img>
          </a>
          <a
            className="social-link"
            href="https://twitter.com/davidstinson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter Logo" className="social-logo"></img>
          </a>
        </div>
      </aside>
    );
  }
}

export default Social;

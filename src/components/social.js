import React, { Component } from "react";

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
      <div
        className="social-name-container item item--primary"
        data-aos="fade-down"
        data-aos-anchor="#portfolio"
        data-aos-anchor-placement="top-top"
      >
        David Stinson
      </div>
    );
  }
}

export default Social;

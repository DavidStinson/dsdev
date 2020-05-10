import React from "react";
import Foundation from "../components/foundation";
import ReactFitText from "react-fittext";

import "./global.css";
import "./index.css";

export default () => (
  <Foundation>
    <section className="hero">
      <div className="hero-left"></div>
      <div className="hero-right"></div>
      <ReactFitText compressor={1} minFontSize={64} maxFontSize={350}>
        <h1 className="overwhelmingly-large">
          Hey, <br /> I'm David
        </h1>
      </ReactFitText>
    </section>
    <p className="arrow bouncy">∨</p>
  </Foundation>
);

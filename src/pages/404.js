import React from "react";

import Foundation from "../components/foundation";

import "./global.css";
import "./404.css";

export default () => (
  <Foundation>
    <section className="four-oh-four-container">
      <h1 className="overwhelmingly-large-accent mod">
        Looks like this page doesn't exist!
      </h1>
      <h3 className="oversized-subhead mod">That's unfortunate.</h3>
    </section>
  </Foundation>
);

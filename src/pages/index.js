import React from "react";
import Foundation from "../components/foundation";

import "./global.css";
import "./index.css";

export default () => (
  <Foundation>
    <main className="main-grid">
      <section className="hero">
        <div className="hero-text">
          <h1 className="overwhelmingly-large-accent">
            Hey, I'm David Stinson
          </h1>
          <h3 className="oversized-subhead">
            I build quality software and websites in Austin, TX
          </h3>
        </div>
      </section>
      <section className="portfolio">
        <h2 className="oversized-head" id="portfolio">
          My Work
        </h2>
      </section>
    </main>
  </Foundation>
);

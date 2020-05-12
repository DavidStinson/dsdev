import React from "react";
import Foundation from "../components/foundation";

import "./global.css";
import "./index.css";

export default () => (
  <Foundation>
    <main className="main-grid">
      <section className="hero">
        <div className="hero-text">
          <h1 className="overwhelmingly-large">Hey, I'm David Stinson</h1>
          <h2 className="oversized">
            I build quality software and websites in Austin, TX
          </h2>
        </div>
      </section>
    </main>
  </Foundation>
);

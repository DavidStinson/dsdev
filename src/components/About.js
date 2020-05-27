import React from "react";

import "./about.css";

export default function About() {
  return (
    <section className="about-me">
      <h2 className="oversized-head">I'm also a:</h2>
      <div className="about-items">
        <p className="about-item">
          <span role="img" aria-label="dog emoji">
            🦮
          </span>{" "}
          Dog dad
        </p>
        <p className="about-item">
          <span role="img" aria-label="axe emoji">
            🪓
          </span>{" "}
          Woodworker
        </p>
        <p className="about-item">
          <span role="img" aria-label="mailbox with mail and flag up">
            📬
          </span>{" "}
          IP Network Admin
        </p>
        <p className="about-item">
          <span role="img" aria-label="6 sided die, rolled a 1">
            🎲
          </span>{" "}
          D&D player
        </p>
        <p className="about-item">
          <span role="img" aria-label="piece of paper with writing and pencil">
            📝
          </span>{" "}
          Writer
        </p>
        <p className="about-item">
          <span role="img" aria-label="running man">
            🏃🏼‍♂️
          </span>{" "}
          Runner
        </p>
      </div>
    </section>
  );
}

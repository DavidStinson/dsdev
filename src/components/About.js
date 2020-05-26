import React from "react";

import "./about.css";

export default function About() {
  return (
    <section className="about-me">
      <h2 className="oversized-head">I'm also into...</h2>
      <div className="about-items">
        <p className="about-item">
          <span role="img" aria-label="dog emoji">
            🦮
          </span>{" "}
          Rugby, my dog
        </p>
        <p className="about-item">
          <span role="img" aria-label="axe emoji">
            🪓
          </span>{" "}
          Woodworking
        </p>
        <p className="about-item">
          <span role="img" aria-label="mailbox with mail and flag up">
            📬
          </span>{" "}
          IP Networking
        </p>
        <p className="about-item">
          <span role="img" aria-label="6 sided die, rolled a 1">
            🎲
          </span>{" "}
          Dungeons and Dragons
        </p>
        <p className="about-item">
          <span role="img" aria-label="piece of paper with writing and pencil">
            📝
          </span>{" "}
          Writing
        </p>
        <p className="about-item">
          <span role="img" aria-label="running man">
            🏃🏼‍♂️
          </span>{" "}
          Running
        </p>
      </div>
    </section>
  );
}

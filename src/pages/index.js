import React from "react";
import { graphql } from "gatsby";

import Foundation from "../components/foundation";

import "./global.css";
import "./index.css";

export default function Index({ data }) {
  let portfolioEntries = data.allSanityPost.nodes.map((entry) => ({
    ...entry,
    slug: entry.slug.current,
    tags: entry.tags.map((tag) => tag.title),
    excerpt: entry._rawBodyExcerpt[0].children[0].text,
  }));
  return (
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
          <h3>{portfolioEntries[0].title}</h3>
        </section>
      </main>
    </Foundation>
  );
}

export const query = graphql`
  {
    allSanityPost(filter: { topic: { title: { eq: "Portfolio" } } }) {
      nodes {
        _id
        author {
          name
        }
        _rawBodyExcerpt
        githubLink
        heroImage {
          alt
          attr
        }
        publishedDate
        slug {
          current
        }
        tags {
          title
        }
        title
        deploymentLink
      }
    }
  }
`;

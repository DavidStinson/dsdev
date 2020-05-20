import React from "react";
import { graphql } from "gatsby";

import Foundation from "../components/foundation";
import Cards from "../components/Cards";

import "./global.css";
import "./index.css";

export default function Index({ data }) {
  let portfolioEntries = data.allSanityPost.nodes.map((entry) => ({
    ...entry,
    slug: entry.slug.current,
    id: entry._id,
    topic: entry.topic.title,
    excerpt: entry._rawBodyExcerpt[0].children[0].text,
  }));
  console.log(portfolioEntries);
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
          <h2 className="oversized-head">My Work</h2>
          <div className="cards-container" id="portfolio-head">
            <Cards cardStyle="portfolio-cards" cards={portfolioEntries} />
          </div>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
          <h1>TKTK</h1>
        </section>
      </main>
    </Foundation>
  );
}

export const query = graphql`
  {
    allSanityPost(
      filter: { topic: { title: { eq: "Portfolio" } } }
      sort: { order: DESC, fields: _id }
    ) {
      nodes {
        _id
        _rawBodyExcerpt
        authors {
          _id
          name
        }
        deploymentLink
        githubLink
        heroImage {
          alt
          attr
          asset {
            fluid(maxWidth: 550) {
              ...GatsbySanityImageFluid
            }
            metadata {
              lqip
              dimensions {
                height
                width
              }
            }
          }
        }
        publishedDate(formatString: "dddd, MMM Do YYYY")
        slug {
          current
        }
        tags {
          _id
          title
        }
        title
        topic {
          slug {
            current
          }
          title
        }
        updatedDate(formatString: "dddd, MMM Do YYYY")
      }
    }
  }
`;

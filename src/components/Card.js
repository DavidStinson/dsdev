import React from "react";
import Img from "gatsby-image";

import "./card.css";

export default function Card({
  authors,
  deploymentLink,
  excerpt,
  githubLink,
  heroImage,
  publishedDate,
  title,
  tags,
  topic,
  updatedDate,
}) {
  return (
    <div className="card">
      <div className="card-heading">
        <h3 className="card-title">{title}</h3>
        <div className="card-hero-image-container">
          <Img
            fluid={heroImage.asset.fluid}
            alt={heroImage.alt}
            className="card-hero-image"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="card-authors-container">
          <p>
            {topic === "Portfolio" && "Built by: "}
            {authors.map((author) => (
              <span className="card-author-name" key={author._id}>
                {author.name}
              </span>
            ))}
          </p>
        </div>
        <div className="card-tags-container">
          <p>
            {topic === "Portfolio" && "Principal Tech: "}
            {tags.map((tag) => (
              <span className="card-tag-title" key={tag._id}>
                {tag.title}
              </span>
            ))}
          </p>
        </div>
        <p className="card-excerpt">{excerpt}</p>
        <p className="card-published-date">Published on {publishedDate}</p>
        {updatedDate && (
          <p className="card-updated-date">and last updated {updatedDate}</p>
        )}
        {githubLink && (
          <a href={githubLink} className="card-github-link">
            GitHub
          </a>
        )}
        {deploymentLink && (
          <a href={deploymentLink} className="card-deployment-link">
            Deployed Site
          </a>
        )}
      </div>
    </div>
  );
}

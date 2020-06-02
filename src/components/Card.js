import React from "react";
import Img from "gatsby-image";

import "./card.css";
import github from "../assets/images/github-dark.png";

export default function Card({
  authors,
  deploymentLink,
  emojigo,
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
        <p className="card-published-date">Published on {publishedDate}</p>
        {updatedDate && (
          <p className="card-updated-date">and last updated {updatedDate}</p>
        )}
        <div className="card-hero-image-container">
          <Img
            fluid={heroImage.asset.fluid}
            alt={heroImage.alt}
            className="card-hero-image"
          />
        </div>
      </div>
      <div className="card-body">
        <h4 className="card-body-header">
          {topic === "Portfolio" && "Built by: "}
        </h4>
        <div className="card-authors-container">
          {authors.map((author) => (
            <div className="card-author-container" key={author._id}>
              <Img
                fixed={author.avatar.asset.fixed}
                alt={author.avatar.asset.alt}
                className="card-author-image"
              />
              <p className="card-author-name">{author.name}</p>
            </div>
          ))}
        </div>
        <h4 className="card-body-header">
          {topic === "Portfolio" && "Principal Tech: "}
        </h4>
        <div className="card-tags-container">
          {tags.map((tag) => (
            <div className="card-tag-container" key={tag._id}>
              <Img
                fixed={tag.tagImage.asset.fixed}
                alt={tag.tagImage.asset.alt}
                className="card-tag-image"
              />
              <p className="card-tag-title">{tag.title}</p>
            </div>
          ))}
        </div>

        <p className="card-excerpt">{excerpt}</p>
        <div className="card-external-links">
          {githubLink && (
            <a
              className="card-external-link"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="GitHub Logo"
                className="card-github-logo-small"
              ></img>
              View on GitHub
            </a>
          )}
          {deploymentLink && (
            <a href={deploymentLink} className="card-external-link">
              {emojigo && (
                <span
                  role="img"
                  aria-label={`${title} logo`}
                  className="card-project-logo"
                >
                  {emojigo}
                </span>
              )}
              View deployed site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

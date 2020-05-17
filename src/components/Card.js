import React from "react";

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
  updatedDate,
}) {
  return (
    <>
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-heroImage">{heroImage.alt}</p>
      </div>
      <div>
        <div className="card-tags-container">
          {tags.map((tag) => (
            <p className="card-tag-title" key={tag._id}>
              {tag.title}
            </p>
          ))}
        </div>
        <div className="card-authors-container">
          {authors.map((author) => (
            <p key={author._id} className="card-author-name">
              {author.name}
            </p>
          ))}
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
    </>
  );
}

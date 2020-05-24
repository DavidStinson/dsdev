import React from "react";

import Card from "../components/Card";

import "./cards.css";

export default function Cards({ cards, cardStyle }) {
  return (
    <>
      {cards && (
        <div className={cardStyle}>
          {cards.map((card) => (
            <Card
              authors={card.authors}
              deploymentLink={card.deploymentLink}
              emojigo={card.emojigo}
              excerpt={card.excerpt}
              githubLink={card.githubLink}
              heroImage={card.heroImage}
              key={card.id}
              title={card.title}
              tags={card.tags}
              topic={card.topic}
              publishedDate={card.publishedDate}
              updatedDate={card.updatedDate}
            />
          ))}
        </div>
      )}
    </>
  );
}

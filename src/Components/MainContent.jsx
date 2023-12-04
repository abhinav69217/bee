import React from "react";
import NewsCard from "./NewsCard";

const MainContent = ({ articles, onCardClick }) => {
  return (
    <main>
      <div className="cards-container container flex">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            imageUrl={article.urlToImage}
            title={article.title}
            source={`${article.source.name} ▪️ ${new Date(
              article.publishedAt
            ).toLocaleString("en-US", {
              timeZone: "Asia/Jakarta",
            })}`}
            description={article.description}
            url={article.url}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </main>
  );
};

export default MainContent;

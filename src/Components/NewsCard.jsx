import React from "react";

const NewsCard = ({
  imageUrl,
  title,
  source,
  description,
  url,
  onCardClick,
}) => {
  return (
    <div className="card" onClick={() => onCardClick(url)}>
      <div className="card-header">
        <img src={imageUrl} alt="newsImg" id="news-img" />
      </div>
      <div className="card-content">
        <h3 id="news-title">{title}</h3>
        <h6 className="news-source" id="news-source">
          {source}
        </h6>
        <p className="news-desc" id="news-desc">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;

import React from 'react';
import './articleCard.css';
import './articles.js';

function ArticleCard ({ article, index }) {

    {/* Opens the press article in a new window */}
    const handleIDClick = () => {
        window.open(article.link, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="articleCard" onClick={handleIDClick}>
            {/* Displays article title, date, description, and image */}
            <div className="verticalBundle">
                <h3>{article.title}</h3>
                <p className="date">{article.date}</p>
                <p>{article.description}</p>
            </div>
            <img src={article.img_source} alt={article.title} width="10%" height="10%"/>
        </div>
    );
}

export default ArticleCard;

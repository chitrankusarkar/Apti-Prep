import React from 'react';
import articlesData from '../data/articles.json';

const ArticlesSection: React.FC = () => {
    return (
        <section id="articles" className="section">
            <h2>Helpful Articles</h2>
            <ul className="card-grid articles">
                {articlesData.map((article, index) => (
                    <li key={index} className="card">
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ArticlesSection;
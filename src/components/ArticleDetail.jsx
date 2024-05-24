import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../components/articles';
import BackgroundImg from '../img/jury-bg.jpg';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) {
      return <h2>Article not found</h2>;
    }

    return (
        <div>
            <div className="main-content" style={{
                backgroundImage: `linear-gradient(rgba(24, 24, 24, 0.5), rgba(24, 24, 24, 0.5)), url(${BackgroundImg})`
            }}>
                <div className="content-overlay">
                    <div className="main-sub-title">Статьи</div>
                    <div className="main-title">Global Beauty Leader</div>
                </div>
            </div>
            <div className="article-detail">
                <Link to="/articles" className="back-link">Back to articles</Link>
                <p className="date">{article.date}</p>
                <h1 className="article-title">{article.title}</h1>
                <p>{article.content}</p>
                <p>{article.content2}</p>
                <p>{article.content3}</p>
                <p>{article.content4}</p>
                <p>{article.content5}</p>
                <p>{article.content6}</p>
                <p>{article.content7}</p>
                <p>{article.content8}</p>
                <p>{article.content9}</p>
                <p>{article.content10}</p>
                <p>{article.content11}</p>
                <div className="author">{article.author}</div>
            </div>
        </div>
    );
};

export default ArticleDetail;

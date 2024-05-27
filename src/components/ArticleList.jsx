import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import articles from '../components/articles';
import BackgroundImg from '../img/articles-bg.jpg';

const ArticleList = () => {
    const articleListRef = useRef(null);

    useEffect(() => {
        if (articleListRef.current) {
            articleListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    const renderArticles = () => {
        return articles.map((article, index) => (
            <div key={article.id} className="article-item">
                <Link to={`/articles/${article.id}`}>
                    <p className="date">{article.date}</p>
                    <h2>{article.title}</h2>
                    <p>{truncateText(article.excerpt, 260)}</p>
                    <p className="author">{article.author}</p>
                </Link>
            </div>
        ));
    };

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
            <div ref={articleListRef} className="article-list">
                <h2 className="secondary-sub-title">Статьи</h2>
                <h1 className="secondary-title mb-50">beauty tips + tricks</h1>
                <div className="article-grid">
                    {renderArticles()}
                </div>
            </div>
        </div>
    );
};

export default ArticleList;

import React from 'react';
import './News.css';

const News = ({ articles, city }) => {
  // Fonction pour formater la date
  const formatDate = (dateString) => {
    if (!dateString) return 'Date non disponible';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return 'Date non disponible';
    }
  };

  const handleArticleClick = (article) => {
    if (article.url && article.url.startsWith('http')) {
      window.open(article.url, '_blank', 'noopener,noreferrer');
    } else {
      // Afficher les détails
      const details = `
📰 ${article.title || 'Titre non disponible'}

📖 ${article.description || 'Description non disponible'}

🏷️ Source: ${article.source?.name || 'Non spécifiée'}

📅 Date: ${formatDate(article.publishedAt)}

📍 Ville: ${city}
      `;
      alert(details);
    }
  };

  if (!articles || articles.length === 0) {
    return (
      <div className="news-card">
        <h2>📰 Actualités pour {city}</h2>
        <p>Chargement des actualités...</p>
      </div>
    );
  }

  return (
    <div className="news-card">
      <h2>📰 Actualités pour {city}</h2>
      <div className="news-list">
        {articles.map((article, index) => (
          <div 
            key={index} 
            className="news-item"
            onClick={() => handleArticleClick(article)}
          >
            <div className="article-header">
              <h3>{article.title || 'Actualité locale'}</h3>
              <span className="article-date">
                {formatDate(article.publishedAt)}
              </span>
            </div>
            
            <p className="article-description">
              {article.description || 'Description des actualités locales...'}
            </p>
            
            <div className="article-footer">
              <span className="article-source">
                📰 {article.source?.name || 'Source diverse'}
              </span>
              
              {article.url && article.url.startsWith('http') ? (
                <span className="link-available">🔗 Lien disponible</span>
              ) : (
                <span className="link-unavailable">📄 Cliquez pour les détails</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
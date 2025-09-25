import React from 'react';
import './Home.css';

const Home = ({ onCitySelect, popularCities }) => {
  return (
    <div className="home-page">
      {/* Section Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>🌤️ Bienvenue sur WeatherNews Pro</h1>
            <p className="hero-subtitle">
              Votre source fiable pour la météo et les actualités en temps réel dans le monde entier
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Villes couvertes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Mises à jour</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Précision</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="weather-animation">
              <div className="sun"></div>
              <div className="cloud"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Features */}
      <section className="features-section">
        <div className="container">
          <h2>🌟 Pourquoi choisir WeatherNews Pro ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌤️</div>
              <h3>Météo Précise</h3>
              <p>Données météorologiques en temps réel avec une précision exceptionnelle</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📰</div>
              <h3>Actualités Fraîches</h3>
              <p>Informations actualisées provenant de sources fiables et vérifiées</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Interface Rapide</h3>
              <p>Chargement instantané et navigation fluide sur tous appareils</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Couverture Mondiale</h3>
              <p>Accédez aux données de n'importe quelle ville dans le monde</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Villes Populaires */}
      <section className="cities-section">
        <div className="container">
          <h2>🏙️ Villes Populaires</h2>
          <p className="section-subtitle">Découvrez la météo et les actualités des villes les plus recherchées</p>
          <div className="cities-grid">
            {popularCities.map((city, index) => (
              <div 
                key={index} 
                className="city-card"
                onClick={() => onCitySelect(city)}
              >
                <div className="city-icon">🌍</div>
                <h3>{city}</h3>
                <p>Cliquez pour voir les détails</p>
                <div className="city-action">
                  <span>Explorer →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à découvrir votre ville ?</h2>
            <p>Commencez votre recherche maintenant et restez informé</p>
            <button 
              className="cta-button"
              onClick={() => document.querySelector('.search-input')?.focus()}
            >
              🔍 Commencer la recherche
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
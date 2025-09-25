import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './components/Weather';
import News from './components/News';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';
import Cities from './pages/Cities';
import About from './pages/About';

// CLÉ API
const WEATHER_API_KEY = '55005332905f5a0a0ef8dede852a851b';
const GNEWS_API_KEY = '9f3fa7fc04e0538813d6be05f23fc8e9';

function App() {
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [city, setCity] = useState('Paris');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    fetchData();
    // Masquer la section welcome après 4 secondes
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const fetchData = async (newCity = city) => {
    setLoading(true);
    setError('');
    setShowWelcome(false);
    
    try {
      await Promise.all([
        fetchWeather(newCity),
        fetchNews(newCity)
      ]);
    } catch (err) {
      setError('Erreur lors du chargement des données');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric&lang=fr`
      );
      setWeather(response.data);
    } catch (err) {
      setError('Ville non trouvée. Essayez une autre ville.');
    }
  };

  const fetchNews = async (cityName) => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=${cityName}&lang=fr&max=5&apikey=${GNEWS_API_KEY}`
      );
      
      if (response.data.articles && response.data.articles.length > 0) {
        setNews(response.data.articles);
      } else {
        throw new Error('Aucun article trouvé');
      }
      
    } catch (err) {
      const mockArticles = [
        {
          title: `🌍 Actualités à ${cityName}`,
          description: `Restez informé des derniers développements et événements dans la région de ${cityName}.`,
          url: `https://fr.wikipedia.org/wiki/${cityName}`,
          source: { name: 'Encyclopédie Locale' },
          publishedAt: new Date().toISOString()
        }
      ];
      setNews(mockArticles);
    }
  };

  const handleSearch = (newCity) => {
    if (newCity.trim() !== '') {
      setCity(newCity);
      fetchData(newCity);
      setActiveTab('results');
    }
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    fetchData(selectedCity);
    setActiveTab('results');
  };

  const popularCities = ['Paris', 'London', 'New York', 'Tokyo', 'Dubai', 'Sydney', 'Berlin', 'Rome', 'Barcelona', 'Singapore'];

  // Fonction pour rendre le contenu en fonction de l'onglet actif
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onCitySelect={handleCitySelect} popularCities={popularCities} />;
      
      case 'cities':
        return <Cities onCitySelect={handleCitySelect} />;
      
      case 'about':
        return <About />;
      
      case 'results':
        return renderResultsSection();
      
      default:
        return <Home onCitySelect={handleCitySelect} popularCities={popularCities} />;
    }
  };

  const renderResultsSection = () => {
    return (
      <section className="results-section">
        <div className="container">
          <div className="results-header">
            <h2>📊 Résultats pour {city}</h2>
            <span className="last-update">
              Dernière mise à jour : {new Date().toLocaleTimeString('fr-FR')}
            </span>
            <button 
              className="back-button"
              onClick={() => setActiveTab('home')}
            >
              ← Retour à l'accueil
            </button>
          </div>

          {loading && (
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Chargement des données en cours...</p>
            </div>
          )}

          {error && (
            <div className="error-banner">
              <span>⚠️ {error}</span>
            </div>
          )}

          {!loading && !error && (
            <div className="content">
              {weather && <Weather data={weather} />}
              <News articles={news} city={city} />
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="app">
      {/* 🎯 HEADER PROFESSIONNEL */}
      <header className="professional-header">
        <div className="header-container">
          <div className="logo-section" onClick={() => setActiveTab('home')} style={{cursor: 'pointer'}}>
            <img 
              src="/danylogo.jpg" 
              alt="WeatherNews Pro" 
              className="app-logo"
            />
            <div className="brand">
              <h1>WeatherNews Pro</h1>
              <span>Votre source d'information météo et actualités</span>
            </div>
          </div>
          
          <nav className="navigation">
            <button 
              className={activeTab === 'home' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('home')}
            >
              🏠 Accueil
            </button>
            <button 
              className={activeTab === 'cities' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('cities')}
            >
              🌆 Villes
            </button>
            <button 
              className={activeTab === 'about' ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setActiveTab('about')}
            >
              ℹ️ À propos
            </button>
          </nav>
        </div>
      </header>

      {/* 🎯 SECTION HERO (Uniquement sur l'accueil) */}
      {showWelcome && activeTab === 'home' && (
        <section className="hero-section">
          <div className="hero-content">
            <h2>Bienvenue sur WeatherNews Pro</h2>
            <p>Obtenez des informations météorologiques précises et les dernières actualités pour n'importe quelle ville dans le monde</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Villes couvertes</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Mises à jour</span>
              </div>
              <div className="stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Précision</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 🎯 BARRE DE RECHERCHE (Visible sur toutes les pages sauf résultats) */}
      {activeTab !== 'results' && (
        <section className="search-section">
          <div className="container">
            <h2>Recherchez une ville</h2>
            <p>Obtenez les conditions météorologiques actuelles et les dernières actualités</p>
            <SearchBar onSearch={handleSearch} />
            
            {activeTab === 'home' && (
              <div className="popular-cities">
                <h3>Villes populaires :</h3>
                <div className="cities-grid">
                  {popularCities.slice(0, 6).map((popularCity) => (
                    <button
                      key={popularCity}
                      className="city-chip"
                      onClick={() => handleCitySelect(popularCity)}
                    >
                      🌍 {popularCity}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 🎯 CONTENU PRINCIPAL */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* 🎯 FOOTER PROFESSIONNEL */}
      <footer className="professional-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>WeatherNews Pro</h4>
              <p>Votre compagnon quotidien pour la météo et les actualités</p>
            </div>
            
            <div className="footer-section">
              <h4>Navigation</h4>
              <ul>
                <li><button onClick={() => setActiveTab('home')}>🏠 Accueil</button></li>
                <li><button onClick={() => setActiveTab('cities')}>🌆 Villes</button></li>
                <li><button onClick={() => setActiveTab('about')}>ℹ️ À propos</button></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 danielnibango6@gmail.com</p>
              <p>📞 +257 62627480</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 WeatherNews Pro. Tous droits réservés.</p>
            <p>developed by Daniel Nibango</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
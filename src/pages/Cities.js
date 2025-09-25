import React from 'react';
import './Pages.css';

const Cities = ({ onCitySelect }) => {
  const popularCities = [
    { name: 'Paris', country: 'France', population: '2.1M', emblem: '🗼' },
    { name: 'London', country: 'Royaume-Uni', population: '8.9M', emblem: '🇬🇧' },
    { name: 'New York', country: 'USA', population: '8.4M', emblem: '🗽' },
    { name: 'Tokyo', country: 'Japon', population: '13.9M', emblem: '🗾' },
    { name: 'Dubai', country: 'Émirats Arabes Unis', population: '3.3M', emblem: '🏙️' },
    { name: 'Sydney', country: 'Australie', population: '5.3M', emblem: '⚓' },
    { name: 'Berlin', country: 'Allemagne', population: '3.6M', emblem: '🐻' },
    { name: 'Rome', country: 'Italie', population: '2.8M', emblem: '🏛️' },
    { name: 'Barcelona', country: 'Espagne', population: '1.6M', emblem: '🏟️' },
    { name: 'Singapore', country: 'Singapour', population: '5.7M', emblem: '🦁' },
    { name: 'Toronto', country: 'Canada', population: '2.9M', emblem: '🍁' },
    { name: 'Rio de Janeiro', country: 'Brésil', population: '6.7M', emblem: '🗻' }
  ];

  const citiesByContinent = {
    'Europe': popularCities.filter(city => 
      ['Paris', 'London', 'Berlin', 'Rome', 'Barcelona'].includes(city.name)
    ),
    'Amérique': popularCities.filter(city => 
      ['New York', 'Toronto', 'Rio de Janeiro'].includes(city.name)
    ),
    'Asie': popularCities.filter(city => 
      ['Tokyo', 'Dubai', 'Singapore'].includes(city.name)
    ),
    'Océanie': popularCities.filter(city => 
      ['Sydney'].includes(city.name)
    )
  };

  return (
    <div className="cities-page">
      {/* Header Section */}
      <section className="cities-header">
        <div className="container">
          <h1>🌍 Villes du Monde</h1>
          <p className="cities-subtitle">
            Explorez les données météorologiques et actualités des villes les plus populaires à travers le globe
          </p>
          
        </div>
      </section>

      {/* Cities by Continent */}
      <section className="continents-section">
        <div className="container">
          {Object.entries(citiesByContinent).map(([continent, cities]) => (
            <div key={continent} className="continent-group">
              <h2 className="continent-title">
                {continent === 'Europe' ? '🇪🇺' : 
                 continent === 'Amérique' ? '🌎' :
                 continent === 'Asie' ? '🌏' : '🌊'} {continent}
              </h2>
              <div className="cities-grid">
                {cities.map((city, index) => (
                  <div 
                    key={index} 
                    className="city-card detailed"
                    onClick={() => onCitySelect(city.name)}
                  >
                    <div className="city-header">
                      <span className="city-emblem">{city.emblem}</span>
                      <div className="city-info">
                        <h3>{city.name}</h3>
                        <span className="country">{city.country}</span>
                      </div>
                    </div>
                    <div className="city-stats">
                      <div className="stat">
                        <span className="label">Population</span>
                        <span className="value">{city.population}</span>
                      </div>
                      <div className="stat">
                        <span className="label">Fuseau horaire</span>
                        <span className="value">UTC+1</span>
                      </div>
                    </div>
                    <button className="explore-btn">
                      Voir les détails →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <h2>📊 Statistiques Mondiales</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🌡️</div>
              <div className="stat-content">
                <h3>50+</h3>
                <p>Paramètres météo analysés</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📰</div>
              <div className="stat-content">
                <h3>100+</h3>
                <p>Sources d'actualités</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌐</div>
              <div className="stat-content">
                <h3>200+</h3>
                <p>Pays couverts</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <h3>24/7</h3>
                <p>Service disponible</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cities;
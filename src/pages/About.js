import React from 'react';
import './Pages.css';

const About = () => {
  const teamMembers = [
    { name: 'Daniel Nibango', role: 'Développeur Full-Stack', avatar: '👨‍💻', bio: 'Spécialiste React et intégration API' },
    { name: 'Météo Allemand', role: 'Partenaire Météo', avatar: '🌤️', bio: 'Fournisseur de données météorologiques' },
    { name: 'News Global', role: 'Partenaire Actualités', avatar: '📰', bio: 'Agrégateur de nouvelles internationales' }
  ];

  const technologies = [
    { name: 'React.js', icon: '⚛️', description: 'Framework frontend moderne' },
    { name: 'OpenWeatherMap', icon: '🌤️', description: 'API météorologique' },
    { name: 'GNews API', icon: '📰', description: 'API d\'actualités' },
    { name: 'CSS3', icon: '🎨', description: 'Styling responsive' },
    { name: 'Axios', icon: '🔗', description: 'Client HTTP' },
    { name: 'JavaScript ES6+', icon: '💻', description: 'Langage de programmation' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>ℹ️ À propos de WeatherNews Pro</h1>
            <p className="hero-subtitle">
              Découvrez l'histoire derrière votre application météo et actualités préférée
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>🎯 Notre Mission</h2>
              <p>
                WeatherNews Pro a été créé dans le but de fournir une plateforme unique 
                combinant des données météorologiques précises et des actualités pertinentes 
                pour aider les utilisateurs à prendre des décisions éclairées.
              </p>
              <p>
                Nous croyons que l'information devrait être accessible, fiable et présentée 
                de manière intuitive. C'est pourquoi nous avons conçu une interface utilisateur 
                moderne qui rend la consultation de la météo et des actualités agréable et efficace.
              </p>
              <div className="mission-stats">
                <div className="mission-stat">
                  <span className="number">2025</span>
                  <span className="label">Année de création</span>
                </div>
                <div className="mission-stat">
                  <span className="number">50+</span>
                  <span className="label">Utilisateurs satisfaits</span>
                </div>
                <div className="mission-stat">
                  <span className="number">89.9%</span>
                  <span className="label">Taux de disponibilité</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="visual-card">
                <div className="visual-icon">🌍</div>
                <h3>Impact Mondial</h3>
                <p>Service disponible dans 200+ pays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>👥 Notre Équipe</h2>
          <p className="section-subtitle">
            Rencontrez les passionnés qui rendent WeatherNews Pro possible
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <span className="avatar-icon">{member.avatar}</span>
                </div>
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section">
        <div className="container">
          <h2>🛠️ Technologies Utilisées</h2>
          <p className="section-subtitle">
            Découvrez les technologies modernes qui alimentent notre plateforme
          </p>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">{tech.icon}</div>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>💡 Nos Valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Précision</h3>
              <p>Données vérifiées et mises à jour en temps réel</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Performance</h3>
              <p>Interface rapide et expérience utilisateur fluide</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Fiabilité</h3>
              <p>Service disponible 24/7 sans interruption</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>📞 Contactez-nous</h2>
            <p>Vous avez des questions ou des suggestions ? Nous sommes à votre écoute.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>danielnibango6@gmail.com</span>
              </div>
              <div className="contact-item">
  <span className="contact-icon">📱</span>
  <a 
    href="https://wa.me/25762687480" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    +257 62687480
  </a>
</div>

              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <span>Support 24/7 disponible</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
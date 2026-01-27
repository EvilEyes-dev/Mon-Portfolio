import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">À propos</h2>
        
        <div className="about-content">
          {/* Texte de présentation */}
          <div className="about-text">
            <h3>Développeur Front-End</h3>
            
            <p>
              Actuellement en formation développeur web, je me spécialise dans la 
              création d'interfaces front-end intuitives et performantes.
            </p>
            
            <p>
              <strong>Ma force :</strong> transformer des maquettes en code propre et responsive.
            </p>
            
            <p>
              <strong>Mon objectif :</strong> intégrer une équipe pour développer mes compétences 
              full-stack dans un environnement professionnel et contribuer à des 
              projets concrets.
            </p>
            
            <ul className="about-highlights">
              <li>Maîtrise de niveau moyen du trio HTML/CSS/JavaScript et de React</li>
              <li>Rigueur dans la qualité du code et les bonnes pratiques</li>
              <li>Capacité d'apprentissage rapide (actuellement en formation back-end)</li>
              <li>Autonomie sur Git et workflows collaboratifs</li>
            </ul>
          </div>
          
          {/* Image ou illustration (optionnelle) */}
          <div className="about-image">
            <img 
            src="/images/p.jpg"
            alt="Alpha Oumar"
            style={{
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '6rem'
            }}/>
            </div>
            <p style={{ 
              textAlign: 'center', 
              marginTop: '16px', 
              color: '#64748b',
              fontSize: '0.875rem'
            }}>
            </p>
          </div>
        </div>
    </section>
  );
};

export default About;

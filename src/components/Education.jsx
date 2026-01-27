import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title">Parcours & Formation</h2>
        
        <div className="education-content">
          {/* Formation Actuelle */}
          <div className="education-item">
            <div className="education-header">
              <FaGraduationCap className="education-icon" />
              <div className="education-info">
                <h3>Formation Développeur Web Full-Stack</h3>
                <p>Autodidacte</p>
              </div>
            </div>
            
            <p className="education-description">
              Programme intensif couvrant l'ensemble du développement web moderne, 
              du front-end au back-end, avec une approche projet et pratique.
            </p>
            
            <ul className="education-highlights">
              <li>Front-End : HTML5, CSS3, JavaScript ES6+, React</li>
              <li>Back-End : Node.js, Express, bases de données</li>
              <li>Outils : Git, GitHub, méthodologies agiles</li>
              <li>Projets : En Cours</li>
            </ul>
          </div>
          
          {/* Projets Académiques */}
          <div className="education-item">
            <div className="education-header">
              <FaBriefcase className="education-icon" />
              <div className="education-info">
                <h3>Projets Académiques & Autodidacte</h3>
                <p>2024 - Présent</p>
              </div>
            </div>
            
            <p className="education-description">
              Apprentissage continu à travers la réalisation de projets personnels 
              et la veille technologique active.
            </p>
            
            {/*<ul className="education-highlights">
              <li>Développement de 8+ projets front-end en autonomie complète</li>
              <li>Contribution à des projets open-source sur GitHub</li>
              <li>Veille technologique quotidienne (blogs, documentation, tutoriels)</li>
              <li>Participation à des communautés de développeurs</li>
            </ul>*/}
          </div>
          
          {/* Expériences Pertinentes (optionnel - à adapter) */}
          {/* Décommenter et adapter si tu as des expériences à valoriser */}
          {/*
          <div className="education-item">
            <div className="education-header">
              <FaBriefcase className="education-icon" />
              <div className="education-info">
                <h3>[Titre du poste]</h3>
                <p>[Nom de l'entreprise]</p>
                <p>[Dates]</p>
              </div>
            </div>
            
            <p className="education-description">
              [Description courte de l'expérience et son lien avec le développement]
            </p>
            
            <ul className="education-highlights">
              <li>[Compétence transférable 1]</li>
              <li>[Compétence transférable 2]</li>
              <li>[Compétence transférable 3]</li>
            </ul>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Education;

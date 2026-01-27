import React from 'react';
import { FaCode, FaTools, FaServer } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      category: 'Front-End',
      icon: <FaCode className="skill-category-icon" style={{ color: '#2563eb' }} />,
      level: 2,
      levelText: 'Niveau Intermédiaire',
      skills: [
        'HTML5 & CSS3 (Flexbox, Grid)',
        'JavaScript',
        'React',
        'C# & C++'
      ]
    },
    {
      category: 'Outils & Workflow',
      icon: <FaTools className="skill-category-icon" style={{ color: '#10b981' }} />,
      level: 2,
      levelText: 'Niveau debutant',
      skills: [
        'Git & GitHub',
        'VS Code (extensions, debugging)',
        'npm/yarn',
      ]
    },
    {
      category: 'Back-End',
      icon: <FaServer className="skill-category-icon" style={{ color: '#f59e0b' }} />,
      level: 2,
      levelText: 'En apprentissage',
      skills: [
        'Node.js (bases)',
        'Express (initiation)',
        'REST API (compréhension)',
        'Bases de données (concepts)',
        'Authentification (théorie)'
      ]
    }
  ];

  // Composant pour afficher les étoiles
  const StarRating = ({ level }) => {
    return (
      <div className="skill-stars">
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={`star ${index < level ? '' : 'empty'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                {skillCategory.icon}
                <div>
                  <h3 className="skill-category-title">{skillCategory.category}</h3>
                  <div className="skill-level">
                    <StarRating level={skillCategory.level} />
                    <span className="skill-level-text">{skillCategory.levelText}</span>
                  </div>
                </div>
              </div>
              
              <ul className="skill-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

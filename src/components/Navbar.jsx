import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Détecter le scroll pour ajouter une ombre à la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du clic sur un lien
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Projets', to: 'projects' },
    { name: 'À propos', to: 'about' },
    { name: 'Compétences', to: 'skills' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="navbar-logo"
          style={{ cursor: 'pointer' }}
        >
          &lt;Alpha Oumar/&gt;
        </Link>

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                className="navbar-link"
                offset={-80}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
          
          {/* GitHub Link */}
          <li>
            <a
              href="https://github.com/ItachiUchiwa-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-github"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

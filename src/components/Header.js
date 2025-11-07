import React, { useState, useEffect } from 'react';
import './Header.css';
import './InteractiveAnimations.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-container">
              <div className="logo-icon">
                <img 
                  src="/images/logo.png.png" 
                  alt="ARCCENA Logo" 
                  className="logo-image"
                />
              </div>
              <div className="logo-text-section">
                <span className="logo-text">ARCCENA</span>
                <span className="logo-subtitle">The Web Beyond Boundaries</span>
              </div>
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
              <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
              <li><a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-primary">Contact us</a>
            <button 
              className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
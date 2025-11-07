import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Web Development',
    'UI/UX Design', 
    'DevOps & Deployment',
    'App Integration & Automation',
    'Digital Strategy'
  ];

  const insights = [
    'Join Our Developer Network',
    'Project Process & Timeline',
    'Technology Stack Guide',
    'Freelance vs Agency Benefits',
    'Digital Transformation Tips',
    'Web Development Best Practices'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="company-info">
              <div className="footer-logo">
                <div className="logo-container">
                  <div className="logo-icon">
                    <img 
                      src="/images/logo.png" 
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
              <p className="company-description">
                We connect businesses with verified developers, designers, and strategists — delivering cutting-edge digital solutions under one brand. 
                Experience agency precision with freelance flexibility.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>contact@arccena.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+1 214 306 68 37</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Boston, MA</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4 className="link-title">Services</h4>
                <ul className="link-list">
                  {services.map((service, index) => (
                    <li key={index}>
                      <a href="#services">{service}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4 className="link-title">Insights</h4>
                <ul className="link-list">
                  {insights.map((insight, index) => (
                    <li key={index}>
                      <a href="#services">{insight}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4 className="link-title">Quick Links</h4>
                <ul className="link-list">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="cta-footer">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Build Beyond Boundaries?</h3>
              <p className="cta-description">
                Join businesses who trust ARCCENA for their digital transformation. Let's create something extraordinary together.
              </p>
              <div className="cta-buttons">
                <a href="#contact" className="btn btn-primary">Start Your Project</a>
                <a href="#join-network" className="btn btn-secondary">Join Our Network</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} ARCCENA. All rights reserved. Made with 💻 by ARCCENA
            </p>
            <div className="social-links">
              <a href="https://linkedin.com/company/arccena" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <span>💼</span>
              </a>
              <a href="https://twitter.com/arccena" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <span>🐦</span>
              </a>
              <a href="https://github.com/arccena" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <span>🐙</span>
              </a>
              <a href="mailto:contact@arccena.com" className="social-link" aria-label="Email">
                <span>📧</span>
              </a>
            </div>
            <div className="legal-links">
              <button className="legal-link" onClick={() => console.log('Privacy Policy clicked')}>Privacy Policy</button>
              <button className="legal-link" onClick={() => console.log('Terms of Service clicked')}>Terms of Service</button>
              <button className="legal-link" onClick={() => console.log('Cookie Policy clicked')}>Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import './Hero.css';
import './InteractiveAnimations.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              The Web Beyond Boundaries
            </h1>
            <p className="hero-subtitle fade-in-on-scroll">
              We connect businesses with verified developers, designers, and strategists — delivering cutting-edge digital solutions under one brand.
            </p>
            <p className="hero-description fade-in-on-scroll">
              Clients don't deal with freelancers; they deal with ARCCENA, which ensures reliability, quality, and speed. 
              We're a freelance-powered, agency-managed web development company that brings together the best talent under one unified brand.
            </p>
            <div className="hero-actions fade-in-on-scroll">
              <a href="#contact" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="#join-network" className="btn btn-secondary">
                Join as Developer
              </a>
            </div>
          </div>
          <div className="hero-visual fade-in-on-scroll">
            <div className="hero-devices">
              <div className="device desktop">
                <div className="screen">
                  <div className="window-bar">
                    <div className="window-buttons">
                      <span className="btn-close"></span>
                      <span className="btn-minimize"></span>
                      <span className="btn-maximize"></span>
                    </div>
                  </div>
                  <div className="screen-content">
                    <div className="color-block blue"></div>
                    <div className="color-block green"></div>
                    <div className="color-block purple"></div>
                    <div className="color-block orange"></div>
                  </div>
                </div>
              </div>
              <div className="device tablet">
                <div className="screen">
                  <div className="screen-content">
                    <div className="web-interface">
                      <div className="interface-header"></div>
                      <div className="interface-body">
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-character">
                <div className="character">
                  <div className="character-head"></div>
                  <div className="character-body"></div>
                  <div className="character-arm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
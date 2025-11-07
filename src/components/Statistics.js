import React, { useState, useEffect } from 'react';
import './Statistics.css';
import './InteractiveAnimations.css';

const Statistics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    developers: 0,
    managers: 0,
    testimonials: 0
  });

  useEffect(() => {
    const finalNumbers = {
      projects: 150,
      developers: 50,
      managers: 25,
      testimonials: 98
    };

    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          projects: Math.floor(finalNumbers.projects * progress),
          developers: Math.floor(finalNumbers.developers * progress),
          managers: Math.floor(finalNumbers.managers * progress),
          testimonials: Math.floor(finalNumbers.testimonials * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalNumbers);
        }
      }, stepDuration);
    };

    // Start animation when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector('.statistics-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: counters.projects,
      suffix: '+',
      label: 'projects delivered',
      color: 'green'
    },
    {
      number: counters.developers,
      suffix: '+',
      label: 'network developers',
      color: 'blue'
    },
    {
      number: counters.managers,
      suffix: '+',
      label: 'satisfied clients',
      color: 'purple'
    },
    {
      number: counters.testimonials,
      suffix: '%',
      label: 'client satisfaction',
      color: 'orange'
    }
  ];

  return (
    <section className="statistics-section" id="about">
      <div className="container">
        <div className="section-header fade-in-on-scroll">
          <h2 className="section-title">ARCCENA Network in Numbers</h2>
          <p className="section-subtitle">
            Building a network of talent that delivers exceptional results. Every project benefits from our 
            unified approach — combining freelance expertise with agency reliability.
          </p>
        </div>

        <div className="stats-grid stagger-children">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-card ${stat.color}`}>
              <div className="stat-icon">
                <span>📈</span>
              </div>
              <div className="stat-number">
                {stat.number.toLocaleString()}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="team-images">
          <div className="team-grid">
            <div className="team-photo photo-1">
              <div className="photo-placeholder">👥</div>
            </div>
            <div className="team-photo photo-2">
              <div className="photo-placeholder">💼</div>
            </div>
            <div className="featured-photo">
              <div className="photo-placeholder">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
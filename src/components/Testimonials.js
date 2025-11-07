import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      position: 'CEO & Founder',
      company: 'TechStart Solutions',
      rating: 5,
      text: 'ARCCENA felt like a full in-house team, without the overhead. The seamless coordination between their developers and designers was incredible. They delivered our MVP 2 weeks ahead of schedule.',
      avatar: '�‍💼'
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Head of Digital',
      company: 'Growth Dynamics',
      rating: 5,
      text: 'Working with ARCCENA was a game-changer. One point of contact, but access to a whole network of specialists. Great coordination between team members and excellent project management throughout.',
      avatar: '�‍💼'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Companies Choose ARCCENA</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card animate-fade-in-up" style={{animationDelay: `${index * 0.3}s`}}>
              <div className="testimonial-header">
                <div className="client-info">
                  <div className="avatar">
                    <span>{testimonial.avatar}</span>
                  </div>
                  <div className="client-details">
                    <h4 className="client-name">{testimonial.name}</h4>
                    <p className="client-position">{testimonial.position}</p>
                  </div>
                </div>
                <div className="company-logo">
                  <span className="company-name">{testimonial.company}</span>
                </div>
              </div>
              
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="awards-showcase">
          <h3 className="awards-title">Our approach and values</h3>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-badge fastest-growing">
                <span>⚡</span>
              </div>
              <p className="award-description">
                Agency precision with freelance flexibility — we deliver enterprise-quality solutions with startup agility
              </p>
            </div>
            <div className="award-item">
              <div className="award-badge reliable">
                <span>🌟</span>
              </div>
              <p className="award-description">
                One brand, infinite developers — clients work with ARCCENA, not individual freelancers
              </p>
            </div>
          </div>
          
          <div className="partnership-badges">
            <div className="badge microsoft">
              <span>⚡</span>
              <p>Fast Delivery</p>
            </div>
            <div className="badge aws">
              <span>🔒</span>
              <p>Secure & Reliable</p>
            </div>
            <div className="badge iso">
              <span>📈</span>
              <p>Scalable Solutions</p>
            </div>
            <div className="badge iso-security">
              <span>🌐</span>
              <p>Global Network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
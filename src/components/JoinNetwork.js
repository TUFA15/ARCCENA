import React, { useState } from 'react';
import './JoinNetwork.css';

const JoinNetwork = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skill: '',
    portfolio: '',
    experience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We\'ll review your application and get back to you soon.');
  };

  const benefits = [
    {
      icon: '🏢',
      title: 'Professional Brand',
      description: 'Work under the ARCCENA brand with full agency backing and support.'
    },
    {
      icon: '🤝',
      title: 'Client Management',
      description: 'We handle all client communications, contracts, and project management.'
    },
    {
      icon: '💰',
      title: 'Fair Compensation',
      description: 'Competitive rates with regular payments and transparent pricing.'
    },
    {
      icon: '🚀',
      title: 'Growth Opportunities',
      description: 'Access to diverse projects and continuous skill development.'
    }
  ];

  return (
    <section className="join-network-section" id="join-network">
      <div className="container">
        <div className="join-content">
          <div className="join-info">
            <h2 className="section-title">Join ARCCENA Network</h2>
            <p className="section-subtitle">
              Are you a developer or designer ready to build beyond boundaries?
            </p>
            <p className="join-description">
              Work under one unified brand — we handle clients, you focus on code. 
              Join our network of verified professionals and be part of delivering 
              exceptional digital solutions.
            </p>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="benefit-icon">
                    <span>{benefit.icon}</span>
                  </div>
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="join-form-container">
            <div className="form-card">
              <h3 className="form-title">Apply to Join</h3>
              <p className="form-subtitle">Ready to be part of something bigger?</p>
              
              <form onSubmit={handleSubmit} className="join-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="skill">Primary Skill</label>
                  <select
                    id="skill"
                    name="skill"
                    value={formData.skill}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your expertise</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full-Stack Developer</option>
                    <option value="uiux">UI/UX Designer</option>
                    <option value="devops">DevOps Engineer</option>
                    <option value="mobile">Mobile Developer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Experience Level</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select experience level</option>
                    <option value="junior">Junior (1-2 years)</option>
                    <option value="mid">Mid-level (3-5 years)</option>
                    <option value="senior">Senior (5+ years)</option>
                    <option value="lead">Lead/Architect (8+ years)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="portfolio">Portfolio/GitHub Link</label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    required
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinNetwork;
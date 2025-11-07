import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web-app',
      client: 'TechStart Solutions',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and advanced analytics.',
      features: ['Payment Integration', 'Real-time Chat', 'Admin Dashboard', 'Mobile Responsive'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Corporate Website',
      category: 'website',
      client: 'Growth Dynamics',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      description: 'Modern corporate website with interactive animations, CMS integration, and performance optimization.',
      features: ['Animation Library', 'CMS Integration', 'SEO Optimized', 'Fast Loading'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'web-app',
      client: 'DataFlow Inc',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'Redis'],
      description: 'Comprehensive SaaS analytics dashboard with real-time data visualization and user management.',
      features: ['Data Visualization', 'User Management', 'API Integration', 'Real-time Updates'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      category: 'mobile',
      client: 'FinTech Pro',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'MySQL', 'JWT', 'Blockchain'],
      description: 'Secure mobile banking application with biometric authentication and blockchain integration.',
      features: ['Biometric Auth', 'Blockchain Security', 'Real-time Transactions', 'Cross-platform'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'AI-Powered Platform',
      category: 'web-app',
      client: 'InnovateAI',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'GCP'],
      description: 'Machine learning platform for predictive analytics with intuitive data visualization.',
      features: ['ML Integration', 'Predictive Analytics', 'Data Visualization', 'Cloud Deployment'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'website',
      client: 'Creative Studio',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Three.js', 'GSAP', 'WebGL', 'Netlify'],
      description: 'Interactive 3D portfolio website with immersive animations and WebGL effects.',
      features: ['3D Animations', 'WebGL Effects', 'Interactive Design', 'Performance Optimized'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web-app', label: 'Web Applications' },
    { key: 'website', label: 'Websites' },
    { key: 'mobile', label: 'Mobile Apps' }
  ];

  const techStack = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Vue.js', icon: '💚', color: '#4FC08D' },
    { name: 'Angular', icon: '🅰️', color: '#DD0031' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'Next.js', icon: '▲', color: '#000000' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'Kubernetes', icon: '☸️', color: '#326CE5' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our latest projects showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="tech-stack-section">
          <h3 className="tech-stack-title">Technologies We Master</h3>
          <div className="tech-stack-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => setActiveProject(project)}
                    >
                      View Details
                    </button>
                    <a href={project.liveUrl} className="btn btn-secondary">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <div className="portfolio-header">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <span className="portfolio-client">{project.client}</span>
                </div>
                
                <p className="portfolio-description">{project.description}</p>
                
                <div className="portfolio-tech">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag more">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className="project-modal" onClick={() => setActiveProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setActiveProject(null)}
              >
                ×
              </button>
              
              <div className="modal-header">
                <h2>{activeProject.title}</h2>
                <span className="modal-client">{activeProject.client}</span>
              </div>
              
              <div className="modal-body">
                <img src={activeProject.image} alt={activeProject.title} />
                
                <div className="modal-info">
                  <p className="modal-description">{activeProject.description}</p>
                  
                  <div className="modal-features">
                    <h4>Key Features</h4>
                    <ul>
                      {activeProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-tech">
                    <h4>Technologies Used</h4>
                    <div className="tech-list">
                      {activeProject.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    <a href={activeProject.liveUrl} className="btn btn-primary">
                      Live Demo
                    </a>
                    <a href={activeProject.githubUrl} className="btn btn-secondary">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="portfolio-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Let's collaborate with our expert developers to bring your vision to life</p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">Start a Project</a>
            <a href="#join-network" className="btn btn-secondary">Join Our Network</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
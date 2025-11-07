import React from 'react';
import './Development.css';

const Development = () => {
  const processes = [
    {
      icon: '🔍',
      title: 'Discover & Define',
      description: 'We start by understanding your goals, target audience, and vision. Our team conducts thorough research to define project scope, requirements, and success metrics.',
      team: 'Strategy & Research Team'
    },
    {
      icon: '🎨',
      title: 'Design & Prototype',
      description: 'Our designers create wireframes, user flows, and interactive prototypes. We focus on user experience and visual appeal while ensuring brand consistency.',
      team: 'UI/UX Design Team'
    },
    {
      icon: '⚙️',
      title: 'Develop & Test',
      description: 'Using agile methodology, our developers build your solution with continuous testing and feedback. We ensure code quality, performance, and scalability.',
      team: 'Development Team'
    },
    {
      icon: '🚀',
      title: 'Deploy & Optimize',
      description: 'We launch your project with proper analytics, SEO optimization, and cloud infrastructure. Performance monitoring ensures everything runs smoothly.',
      team: 'DevOps Team'
    },
    {
      icon: '�',
      title: 'Support & Scale',
      description: 'Long-term maintenance, updates, and scalability planning. We provide ongoing support to help your digital presence grow with your business.',
      team: 'Support Team'
    }
  ];

  const qualityFeatures = [
    {
      icon: '🏆',
      title: 'Quality management',
      description: 'We outline the controls behind our ISO 9001-certified management system, list software quality and project health KPIs our teams use, and describe quality controls specific to each SDLC stage.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'The page overviews our collaboration flow from planning to success measurement to ongoing improvement. It also outlines tactical communication forms and collaboration tools we use.'
    },
    {
      icon: '🔒',
      title: 'Security management',
      description: 'We explain the scope of our cyber defense activities and describe our ISO 27001-supported security management procedures during the development project.'
    },
    {
      icon: '📚',
      title: 'Knowledge management',
      description: 'We describe our knowledge management and transfer process and share sample software documents we deliver across various development stages.'
    }
  ];

  return (
    <section className="development-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            Our proven workflow ensures every project is delivered on time, on budget, and beyond expectations. 
            From concept to deployment, we maintain transparency and quality at every step.
          </p>
        </div>

        <div className="development-grid">
          {processes.map((process, index) => (
            <div key={index} className="process-card animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="process-icon">
                <span>{process.icon}</span>
              </div>
              <h3 className="process-title">{process.title}</h3>
              <p className="process-description">{process.description}</p>
              <div className="team-size">{process.team}</div>
            </div>
          ))}
        </div>

        <div className="quality-section">
          <h3 className="quality-title">How We Ensure Success in Web Development Projects</h3>
          <p className="quality-subtitle">
            Apart from technical expertise, many other factors influence project success and software quality. 
            ARCCENA's teams approach all of them seriously. You are welcome to check the descriptions of processes 
            and practices we rely on to deliver on goal, quality, schedule, and budget:
          </p>

          <div className="quality-grid">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="quality-card animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="quality-icon">
                  <span>{feature.icon}</span>
                </div>
                <h4 className="quality-card-title">{feature.title}</h4>
                <p className="quality-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to Start Your Web Development Project?</h3>
          <p className="cta-description">
            Let's discuss how ARCCENA can help you achieve your web development goals with our proven expertise and quality-first approach.
          </p>
          <div className="cta-actions">
            <a href="#contact" className="btn btn-primary">Schedule a consultation</a>
            <a href="#portfolio" className="btn btn-secondary">View our portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
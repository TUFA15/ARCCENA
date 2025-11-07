import React, { useEffect, useRef } from 'react';
import './Services.css';
import './InteractiveAnimations.css';

const Services = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target === gridRef.current) {
            entry.target.classList.add('animate');
          }
        }
      });
    }, observerOptions);

    const elementsToObserve = sectionRef.current.querySelectorAll('.fade-in-on-scroll');
    elementsToObserve.forEach((el) => observer.observe(el));
    
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Full-stack websites built for speed, security, and scale. Our developers use cutting-edge technologies to create web applications that perform flawlessly across all devices and browsers.'
    },
    {
      icon: '�',
      title: 'UI/UX Design',
      description: 'Designs that feel as good as they look. Our design team creates intuitive, beautiful interfaces that enhance user experience and drive engagement through thoughtful user research and testing.'
    },
    {
      icon: '⚙️',
      title: 'DevOps & Deployment',
      description: 'Automated pipelines, cloud hosting, and zero downtime. We handle the technical infrastructure so your applications are always available, secure, and performing at their best.'
    },
    {
      icon: '🧩',
      title: 'App Integration & Automation',
      description: 'Connecting APIs and workflows to streamline your business. We build custom integrations that automate processes, sync data, and create seamless connections between your tools.'
    },
    {
      icon: '�',
      title: 'Digital Strategy',
      description: 'From SEO to marketing automation — we make growth measurable. Our strategists help you leverage technology to reach your audience and achieve your business objectives.'
    }
  ];

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div style={{
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: '#ff0080',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 9999,
        fontSize: '14px'
      }}>
        SERVICES SECTION IS LOADED!
      </div>
      <div className="container">
        <div className="section-header fade-in-on-scroll">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            We deliver comprehensive digital solutions through our network of verified developers, designers, and strategists. 
            Every project is backed by agency-level quality assurance and project management.
          </p>
        </div>

        <div className="services-grid stagger-children" ref={gridRef}>
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
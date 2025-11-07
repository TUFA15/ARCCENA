import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingTiers = [
    {
      icon: '💼',
      symbol: '$',
      price: '5,000',
      title: 'Landing Page Pro',
      description: 'Perfect for startups and small businesses looking to establish their online presence.',
      features: [
        'Custom responsive design',
        'Performance optimization',
        'SEO foundation',
        'Contact integration',
        '30 days support'
      ],
      color: 'green'
    },
    {
      icon: '🔧',
      symbol: '$$',
      price: '15,000',
      title: 'Business Website',
      description: 'Complete web solution for growing businesses with advanced features.',
      features: [
        'Multi-page website',
        'CMS integration',
        'Advanced SEO',
        'Analytics setup',
        '90 days support'
      ],
      color: 'orange',
      popular: true
    },
    {
      icon: '�',
      symbol: '$$$',
      price: '35,000',
      title: 'Web Application',
      description: 'Full-featured web applications with custom functionality and user management.',
      features: [
        'Custom web application',
        'User authentication',
        'Database integration',
        'API development',
        '6 months support'
      ],
      color: 'blue'
    },
    {
      icon: '🏢',
      symbol: '$$$$',
      price: '75,000',
      title: 'Enterprise Solution',
      description: 'Comprehensive digital platform for large organizations with complex requirements.',
      features: [
        'Enterprise architecture',
        'Advanced integrations',
        'Scalable infrastructure',
        'Dedicated support team',
        '1 year support'
      ],
      color: 'purple'
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Transparent Project Pricing</h2>
          <p className="section-subtitle">
            We believe in clear, upfront pricing. Every project gets the full ARCCENA treatment — 
            from initial strategy to final deployment, backed by our network of specialists.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.color} ${tier.popular ? 'popular' : ''} animate-fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <div className="pricing-icon">
                  <span>{tier.icon}</span>
                </div>
                <div className="pricing-info">
                  <div className="price-tag">
                    <span className="price-symbol">{tier.symbol}</span>
                    <span className="price-amount">From ${tier.price}</span>
                  </div>
                  <h3 className="pricing-title">{tier.title}</h3>
                </div>
              </div>

              <p className="pricing-description">{tier.description}</p>

              <ul className="features-list">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pricing-action">
                <a href="#contact" className="btn btn-pricing">Get Quote</a>
              </div>
            </div>
          ))}
        </div>

        <div className="custom-quote-section">
          <div className="quote-card">
            <h3 className="quote-title">Want to learn the exact cost of your solution?</h3>
            <p className="quote-description">
              Fill out our short questionnaire and we will provide you with a custom quote 
              within the shortest possible time.
            </p>
            <div className="quote-actions">
              <a href="#contact" className="btn btn-primary">Get Custom Quote</a>
              <a href="#services" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
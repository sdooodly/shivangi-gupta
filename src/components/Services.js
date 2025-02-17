import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Brand Development',
    description: 'Crafting unique brand identities that resonate with your target audience.',
  },
  {
    title: 'Social Media Marketing',
    description: 'Building a strong social presence and boosting engagement through strategic campaigns.',
  },
  {
    title: 'Content Creation',
    description: 'Producing high-quality, impactful content tailored for various platforms.',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Enhancing website visibility and rankings on search engines for increased organic traffic.',
  },
  {
    title: 'Campaign Management',
    description: 'Planning and executing effective marketing campaigns to achieve your business goals.',
  },
  {
    title: 'Marketing Strategy Consulting',
    description: 'Providing expert insights and tailored strategies to drive business growth.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container"> {/* Container for centering and width control */}
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">Elevate your brand with our comprehensive marketing solutions.</p> {/* Subtitle added */}
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content"> {/* Content wrapper for better hover effect */}
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              <div className="service-overlay"></div> {/* Overlay for hover effect */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
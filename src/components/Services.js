import React from 'react';
import './../Services.css'; // Import the CSS file for this component

const servicesData = [
  {
    title: 'Brand Development',
    description: 'Creating unique brand identities that resonate with target audiences.',
  },
  {
    title: 'Social Media Marketing',
    description: 'Crafting strategies to boost engagement and build a strong social presence.',
  },
  {
    title: 'Content Creation',
    description: 'Producing high-quality, impactful content for various platforms.',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Optimizing websites to improve visibility and rankings on search engines.',
  },
  {
    title: 'Campaign Management',
    description: 'Planning and executing marketing campaigns effectively.',
  },
  {
    title: 'Marketing Strategy Consulting',
    description: 'Providing insights and strategies tailored to business goals.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Types of Work I Do</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="service-hover-effect"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
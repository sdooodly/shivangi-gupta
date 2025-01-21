import React from 'react';

const servicesData = [
  {
    title: 'Brand Development',
    description: 'Creating unique brand identities that resonate with target audiences.'
  },
  {
    title: 'Social Media Marketing',
    description: 'Crafting strategies to boost engagement and build a strong social presence.'
  },
  {
    title: 'Content Creation',
    description: 'Producing high-quality, impactful content for various platforms.'
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Optimizing websites to improve visibility and rankings on search engines.'
  },
  {
    title: 'Campaign Management',
    description: 'Planning and executing marketing campaigns effectively.'
  },
  {
    title: 'Marketing Strategy Consulting',
    description: 'Providing insights and strategies tailored to business goals.'
  }
];

const Services = () => {
  return (
    <div className="services">
      <h3>Types of Work I Do</h3>
      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-front">
              <h4>{service.title}</h4>
            </div>
            <div className="card-back">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
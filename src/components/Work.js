// components/Work.js
import React, { useState } from 'react';
import './Work.css';

const companies = [
  { 
    name: 'Reuters', 
    role: 'Led digital transformation of legacy news platforms',
    duration: '2019-2021'
  },
  { 
    name: 'Nielsen', 
    role: 'Pioneered AI-driven consumer behavior analytics',
    duration: '2021-2022'
  },
  { 
    name: 'Google', 
    role: 'Developed privacy-first ad targeting frameworks',
    duration: '2022-2023'
  },
  { 
    name: 'Microsoft', 
    role: 'Architected enterprise cloud migration strategies',
    duration: '2023-Present'
  },
];

const Work = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section id="work" className="work-section">
      <h2 className="work-title">Professional Journey</h2>
      
      <div className="work-timeline">
        {companies.map((company, index) => (
          <div 
            key={index}
            className={`work-card ${expandedCard === index ? 'expanded' : ''}`}
            onMouseEnter={() => setExpandedCard(index)}
            onMouseLeave={() => setExpandedCard(null)}
            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
          >
            <div className="card-front">
              <span className="company-index">0{index + 1}</span>
              <h3 className="company-name">{company.name}</h3>
              <div className="duration-pill">{company.duration}</div>
            </div>
            <div className="card-content">
              <p className="role-description">{company.role}</p>
              <div className="achievement-stats">
                <div className="stat-item">
                  <span className="stat-number">120%</span>
                  <span className="stat-label">ROI Increase</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
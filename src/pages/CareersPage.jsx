// src/pages/CareersPage.jsx
import "../styles/Careers.css";
import { useState } from "react";

const CareersPage = () => {
  const [activeJob, setActiveJob] = useState(null);

  const jobOpenings = [
    {
      title: "Content Writer",
      department: "Editorial",
      type: "Full-time",
      location: "Nagpur (Remote OK)",
      description: "Write inspiring stories about local heroes, startups, and community impact.",
      responsibilities: [
        "Research and write 3-4 articles/week",
        "Conduct interviews with sources",
        "Collaborate with editors"
      ],
      requirements: [
        "Excellent writing skills (English/Marathi)",
        "Passion for positive journalism",
        "2+ years experience preferred"
      ],
      color: "#10b981"
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      type: "Full-time",
      location: "Nagpur",
      description: "Grow our audience through engaging social media content.",
      responsibilities: [
        "Create daily social posts",
        "Grow Instagram/Twitter following",
        "Analyze engagement metrics"
      ],
      requirements: [
        "Social media expertise",
        "Content creation skills",
        "Basic graphic design knowledge"
      ],
      color: "#3b82f6"
    },
    {
      title: "Frontend Developer",
      department: "Tech",
      type: "Part-time/Contract",
      location: "Remote",
      description: "Help build our fast, responsive news platform.",
      responsibilities: [
        "React component development",
        "Performance optimization",
        "Bug fixes and features"
      ],
      requirements: [
        "React + Tailwind CSS",
        "Responsive design experience",
        "Git workflow"
      ],
      color: "#8b5cf6"
    }
  ];

  return (
    <main className="careers-page">
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Join Our Team</h1>
            <p className="hero-subtitle">
              Be part of a mission-driven media company creating positive impact in Nagpur and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="openings-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              We're hiring talented individuals who share our vision of positive storytelling.
            </p>
          </div>
          
          <div className="openings-grid">
            {jobOpenings.map((job, index) => (
              <div 
                key={index} 
                className={`job-card ${activeJob === index ? 'active' : ''}`}
                style={{ '--job-color': job.color }}
                onMouseEnter={() => setActiveJob(index)}
                onMouseLeave={() => setActiveJob(null)}
              >
                <div className="job-header">
                  <div className="job-badge">{job.department}</div>
                  <div className="job-main">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-type">{job.type}</span>
                      <span className="job-location">{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="job-details">
                  <div className="job-column">
                    <h4>Responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="job-column">
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="job-footer">
                  <a 
                    href={`mailto:careers@teztecchbuzz.in?subject=Application%20for%20${encodeURIComponent(job.title)}`} 
                    className="apply-btn"
                  >
                    Apply for this role
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Competitive compensation, professional growth, and meaningful work.
            </p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h4>Growth Opportunities</h4>
              <p>Professional development and skill-building programs</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h4>Work-Life Balance</h4>
              <p>Flexible hours and remote work options</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💼</div>
              <h4>Competitive Pay</h4>
              <p>Market-rate salaries with performance bonuses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">Ready to Apply?</h2>
          <p className="cta-subtitle">
            Send your resume even if you don't see the perfect role. We keep great talent on file.
          </p>
          <a href="mailto:careers@teztecchbuzz.in?subject=General%20Career%20Inquiry" 
             className="cta-btn">
            Submit Resume
          </a>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;

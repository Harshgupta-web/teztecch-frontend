// src/pages/BrandCampaignsPage.jsx
import "../styles/BrandCampaigns.css";

const BrandCampaignsPage = () => {
  return (
    <main className="campaigns-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Brand Campaigns</h1>
          <p className="hero-subtitle">
            Powerful stories that connect brands with communities and create lasting impact
          </p>
        </div>
      </section>

      <section className="featured-campaign">
        <div className="container">
          <div className="featured-content">
            <div className="featured-text">
              <h2 className="section-title">Nagpur Clean Drive 2024</h2>
              <p className="featured-description">
                LocalBank partnered with 500+ volunteers to clean 25km of Nagpur's 
                riverbanks. 15 tons of waste collected. 50K+ social media impressions.
              </p>
              <div className="campaign-stats">
                <span className="stat">15<span>Tons Waste</span></span>
                <span className="stat">500<span>Volunteers</span></span>
                <span className="stat">50K<span>Impressions</span></span>
              </div>
            </div>
            <div className="featured-image">
              <div className="campaign-placeholder">
                Clean Drive Impact
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="campaigns-grid">
        <div className="container">
          <h2 className="section-title">Our Recent Campaigns</h2>
          <div className="campaigns-list">
            <div className="campaign-item">
              <div className="campaign-image">TechFest</div>
              <div className="campaign-details">
                <h3>TechFest Nagpur 2024</h3>
                <p>TechStartup sponsored Nagpur's largest tech festival reaching 10K students</p>
                <div className="campaign-tags">
                  <span>Education</span>
                  <span>Technology</span>
                </div>
              </div>
            </div>

            <div className="campaign-item">
              <div className="campaign-image">WomenEmpower</div>
              <div className="campaign-details">
                <h3>Women in Business Summit</h3>
                <p>EduTech empowered 300 women entrepreneurs with skill workshops</p>
                <div className="campaign-tags">
                  <span>Women Empowerment</span>
                  <span>Skills</span>
                </div>
              </div>
            </div>

            <div className="campaign-item">
              <div className="campaign-image">GreenNagpur</div>
              <div className="campaign-details">
                <h3>Green Nagpur Initiative</h3>
                <p>GreenEnergy planted 5,000 trees across 20 Nagpur localities</p>
                <div className="campaign-tags">
                  <span>Environment</span>
                  <span>Community</span>
                </div>
              </div>
            </div>

            <div className="campaign-item">
              <div className="campaign-image">SkillIndia</div>
              <div className="campaign-details">
                <h3>Skill India Nagpur Chapter</h3>
                <p>NagpurMart trained 1,200 youth in digital marketing & e-commerce</p>
                <div className="campaign-tags">
                  <span>Skills</span>
                  <span>Employment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Campaign Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-number">250K+</div>
              <p>Combined Social Reach</p>
            </div>
            <div className="impact-item">
              <div className="impact-number">75+</div>
              <p>Campaigns Delivered</p>
            </div>
            <div className="impact-item">
              <div className="impact-number">98%</div>
              <p>Client Satisfaction</p>
            </div>
            <div className="impact-item">
              <div className="impact-number">50+</div>
              <p>Local Partners</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Launch Your Campaign?</h2>
            <p>
              Partner with us to create meaningful campaigns that resonate with 
              Nagpur's engaged audience.
            </p>
            <div className="cta-buttons">
              <a href="/advertise" className="cta-btn primary">
                View Ad Rates
              </a>
              <a href="mailto:campaigns@teztecchbuzz.in" className="cta-btn secondary">
                Start Discussion
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandCampaignsPage;

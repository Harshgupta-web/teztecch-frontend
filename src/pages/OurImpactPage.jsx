// src/pages/OurImpactPage.jsx
import "../styles/OurImpact.css";

const OurImpactPage = () => {
  return (
    <main className="impact-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Our Impact</h1>
          <p className="hero-subtitle">
            Stories that inspire action, change minds, and build better communities
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1.2M</div>
              <div className="stat-label">Total Views</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">285K</div>
              <div className="stat-label">Unique Readers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15K</div>
              <div className="stat-label">Social Shares</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">92%</div>
              <div className="stat-label">Positive Feedback</div>
            </div>
          </div>
        </div>
      </section>

      <section className="milestones-section">
        <div className="container">
          <h2 className="section-title">Key Milestones</h2>
          <div className="milestones-grid">
            <div className="milestone-item">
              <div className="milestone-number">2024</div>
              <h3>Nagpur Launch</h3>
              <p>Started with local stories from Central India</p>
            </div>
            <div className="milestone-item">
              <div className="milestone-number">100K</div>
              <h3>Views in 3 Months</h3>
              <p>Reached 100K readers in first quarter</p>
            </div>
            <div className="milestone-item">
              <div className="milestone-number">50+</div>
              <h3>Local Heroes</h3>
              <p>Featured stories of 50+ community changemakers</p>
            </div>
            <div className="milestone-item">
              <div className="milestone-number">10K</div>
              <h3>Newsletter Subs</h3>
              <p>Built engaged weekly newsletter community</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Readers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <p>"Finally a news source that uplifts rather than divides. Love the Nagpur focus!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">RS</div>
                <h4>Rohit S.</h4>
                <span>Nagpur Resident</span>
              </div>
            </div>
            <div className="testimonial-item">
              <p>"The stories about local startups inspired me to start my own business."</p>
              <div className="testimonial-author">
                <div className="author-avatar">PS</div>
                <h4>Priya Sharma</h4>
                <span>Entrepreneur</span>
              </div>
            </div>
            <div className="testimonial-item">
              <p>"Best part of my morning - positive news from my city!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">AK</div>
                <h4>Ankit K.</h4>
                <span>Reader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-section">
        <div className="container">
          <h2 className="section-title">Community Impact</h2>
          <div className="community-content">
            <div className="community-text">
              <h3>Stories That Created Change</h3>
              <ul>
                <li>₹5L raised for local orphanage through reader donations</li>
                <li>2,000 trees planted after our environment campaign</li>
                <li>500+ youth trained via featured skill programs</li>
                <li>10+ local businesses boosted by our coverage</li>
              </ul>
            </div>
            <div className="community-image">
              <div className="impact-placeholder">Community Impact</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">Join the Impact</h2>
          <p>
            Help us tell more stories that matter. Subscribe, share, and be part of the change.
          </p>
          <div className="cta-buttons">
            <a href="/subscribe" className="cta-btn primary">Subscribe Now</a>
            <a href="/stories" className="cta-btn secondary">Read Stories</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurImpactPage;

// src/pages/AdvertisePage.jsx
import "../styles/Advertise.css";

const AdvertisePage = () => {
  return (
    <main className="advertise-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Advertise With Us</h1>
          <p className="hero-subtitle">
            Reach engaged readers in Nagpur and across India with targeted, 
            high-impact advertising solutions
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div class="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Monthly Readers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2min 30s</div>
              <div className="stat-label">Avg Read Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">India Audience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25-45</div>
              <div className="stat-label">Age Group</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-formats-section">
        <div className="container">
          <h2 className="section-title">Ad Formats</h2>
          <div className="formats-grid">
            <div className="format-card">
              <div className="format-icon">📱</div>
              <h3>Native Banner</h3>
              <p>300x250 px • Homepage & Category Pages</p>
              <div className="format-price">₹15,000/month</div>
            </div>
            <div className="format-card">
              <div className="format-icon">📱</div>
              <h3>Leaderboard</h3>
              <p>728x90 px • Above fold visibility</p>
              <div className="format-price">₹25,000/month</div>
            </div>
            <div className="format-card">
              <div className="format-icon">🎬</div>
              <h3>Sponsored Story</h3>
              <p>Native article with your brand story</p>
              <div className="format-price">₹45,000</div>
            </div>
            <div className="format-card">
              <div className="format-icon">📧</div>
              <h3>Newsletter</h3>
              <p>Featured in weekly digest (10K subs)</p>
              <div className="format-price">₹12,000/issue</div>
            </div>
          </div>
        </div>
      </section>

      <section className="success-section">
        <div className="container">
          <h2 className="section-title">Trusted By</h2>
          <div className="brands-grid">
            <div className="brand-logo">LocalBank</div>
            <div className="brand-logo">TechStartup</div>
            <div className="brand-logo">NagpurMart</div>
            <div className="brand-logo">EduTech</div>
            <div className="brand-logo">GreenEnergy</div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <h2 className="section-title">Get Started Today</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Ready to advertise?</h3>
              <p>
                Let's discuss how we can help your brand connect with our 
                engaged audience. Minimum commitment: 1 month.
              </p>
              <div className="contact-details">
                <p><strong>Email:</strong> ads@teztecchbuzz.in</p>
                <p><strong>Phone:</strong> +91 712-XXX-XXXX</p>
                <p><strong>Media Kit:</strong> <a href="#">Download PDF</a></p>
              </div>
            </div>
            <form className="ad-inquiry-form">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Company Email *" required />
              <input type="text" placeholder="Company Name *" required />
              <textarea 
                placeholder="Tell us about your advertising goals..." 
                rows="4"
              ></textarea>
              <button type="submit">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdvertisePage;

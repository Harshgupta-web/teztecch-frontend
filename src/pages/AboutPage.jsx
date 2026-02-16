// src/pages/AboutPage.jsx
import "../styles/About.css"; // create this CSS file

const AboutPage = () => {
  return (
    <main className="about-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">About Teztecch Buzz</h1>
          <p className="hero-subtitle">
            Bringing positive stories from Nagpur and beyond to inspire change
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              Teztecch Buzz was born in Nagpur with a simple mission: to 
              highlight stories of innovation, resilience, and positive impact 
              from our city and across India. In a world filled with noise, we 
              focus on what uplifts, educates, and inspires.
            </p>
            <p>
              From local startups breaking barriers to community heroes making 
              a difference, we bring you stories that matter. Our goal is to 
              create a platform where positivity meets purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-avatar">RS</div>
              <h4>Rahul Sharma</h4>
              <p>Founder & Editor-in-Chief</p>
              <p>Tech enthusiast and storyteller from Nagpur</p>
            </div>
            <div className="team-member">
              <div className="team-avatar">PS</div>
              <h4>Priya Singh</h4>
              <p>Content Lead</p>
              <p>Bringing local stories to global audience</p>
            </div>
            <div className="team-member">
              <div className="team-avatar">AK</div>
              <h4>Akshay Kumar</h4>
              <p>Tech & Business</p>
              <p>Covering innovation from Central India</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🌟</div>
              <h4>Positivity First</h4>
              <p>Every story we tell aims to inspire and uplift</p>
            </div>
            <div className="value-item">
              <div className="value-icon">📍</div>
              <h4>Local Roots</h4>
              <p>Celebrating Nagpur's innovators and changemakers</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Real Impact</h4>
              <p>Stories that create conversations and change</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            Have a story from Nagpur? Want to collaborate? 
            Reach out to us at <strong>hello@teztecchbuzz.in</strong>
          </p>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
            <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

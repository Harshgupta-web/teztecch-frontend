// src/pages/PressCoveragePage.jsx
import "../styles/PressCoverage.css";

const PressCoveragePage = () => {
  const coverageItems = [
    {
      logo: "Times of India",
      title: "Nagpur's Positive News Platform Gains Traction",
      date: "Dec 2024",
      excerpt: "Teztecch Buzz emerges as go-to source for uplifting stories from Central India",
      link: "#"
    },
    {
      logo: "The Hitavada",
      title: "Local Stories That Inspire Change",
      date: "Nov 2024",
      excerpt: "Nagpur-based platform celebrates community heroes and innovation",
      link: "#"
    },
    {
      logo: "Nagpur Today",
      title: "Teztecch Buzz: The Anti-Negative News Movement",
      date: "Oct 2024",
      excerpt: "Focus on solutions and positivity resonates with readers",
      link: "#"
    },
    {
      logo: "Lokmat",
      title: "Digital Platform Reviving Local Journalism",
      date: "Sep 2024",
      excerpt: "Nagpur startup brings fresh perspective to regional news",
      link: "#"
    },
    {
      logo: "Business Standard",
      title: "How Teztecch Buzz is Redefining News",
      date: "Aug 2024",
      excerpt: "Positive journalism model attracts advertisers and readers",
      link: "#"
    },
    {
      logo: "Indian Express",
      title: "Nagpur's Feel-Good News Success Story",
      date: "Jul 2024",
      excerpt: "Community-driven platform hits 100K monthly readers milestone",
      link: "#"
    }
  ];

  return (
    <main className="press-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Press Coverage</h1>
          <p className="hero-subtitle">
            Featured in leading publications across India for our unique approach to positive journalism
          </p>
        </div>
      </section>

      <section className="coverage-section">
        <div className="container">
          <div className="coverage-grid">
            {coverageItems.map((item, index) => (
              <article key={index} className="coverage-item">
                <div className="coverage-logo">
                  <div className="logo-placeholder">{item.logo}</div>
                </div>
                <div className="coverage-content">
                  <h3 className="coverage-title">{item.title}</h3>
                  <div className="coverage-meta">
                    <span className="coverage-date">{item.date}</span>
                  </div>
                  <p className="coverage-excerpt">{item.excerpt}</p>
                  <a href={item.link} className="coverage-link">Read Article →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="media-kit-section">
        <div className="container">
          <div className="media-kit-content">
            <div className="media-kit-text">
              <h2 className="section-title">Media Kit Available</h2>
              <p>
                Looking to feature Teztecch Buzz? Download our media kit with 
                stats, reach, and editorial guidelines.
              </p>
              <a href="/media-kit.pdf" className="download-btn" download>
                Download Media Kit
              </a>
            </div>
            <div className="media-kit-image">
              <div className="placeholder">📊 Media Stats</div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2 className="section-title">Media Inquiries</h2>
          <p>
            For press releases, interviews, or coverage opportunities:
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:press@teztecchbuzz.in">press@teztecchbuzz.in</a></p>
            <p><strong>Phone:</strong> +91 712-XXX-XXXX</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PressCoveragePage;

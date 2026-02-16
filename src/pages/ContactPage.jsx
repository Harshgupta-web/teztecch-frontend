// src/pages/ContactPage.jsx
import "../styles/Contact.css";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Contact Teztecch Buzz</h1>
          <p className="hero-subtitle">
            Have a story idea, partnership proposal, or feedback? Reach out and the team will get back to you soon.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Info */}
            <div className="contact-info">
              <h2>Get in touch</h2>
              <p>
                Teztecch Buzz is based in Nagpur, Maharashtra and works with contributors across India.
              </p>

              <div className="info-block">
                <h4>General Queries</h4>
                <p>Email: <a href="mailto:hello@teztecchbuzz.in">hello@teztecchbuzz.in</a></p>
              </div>

              <div className="info-block">
                <h4>Story Ideas</h4>
                <p>Email: <a href="mailto:stories@teztecchbuzz.in">stories@teztecchbuzz.in</a></p>
              </div>

              <div className="info-block">
                <h4>Advertise / Brand Campaigns</h4>
                <p>Email: <a href="mailto:ads@teztecchbuzz.in">ads@teztecchbuzz.in</a></p>
              </div>

              <div className="info-block">
                <h4>Office</h4>
                <p>Nagpur, Maharashtra, India</p>
              </div>
            </div>

            {/* Right: Form */}
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for contacting Teztecch Buzz!");
              }}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" type="text" placeholder="What is this about?" required />
                </div>
                <div className="form-field">
                  <label htmlFor="type">I’m reaching out for</label>
                  <select id="type" defaultValue="story">
                    <option value="story">Share a story</option>
                    <option value="press">Press / media</option>
                    <option value="advertise">Advertise</option>
                    <option value="career">Career</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
              </div>

              <div className="form-field full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us more about how we can help..."
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit">Send Message</button>
                <p className="helper-text">
                  By clicking send, you agree to be contacted on the details shared above.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

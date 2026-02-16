// src/components/Footer.jsx
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Stories */}
        <div className="footer-column">
          <h4 className="footer-title">Stories</h4>
          <ul className="footer-links">
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Startup</a></li>
            <li><a href="#">Travel</a></li>
            <li><a href="#">Farming</a></li>
            <li><a href="#">Education</a></li>
          </ul>
        </div>

        {/* More */}
        <div className="footer-column">
          <h4 className="footer-title">More</h4>
          <ul className="footer-links">
            <li><a href="#">Advertise With Us</a></li>
            <li><a href="#">Work With Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Grievance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4 className="footer-title">Contact</h4>
          <p className="footer-text">
            SHARE YOUR STORY:<br />
            <a href="mailto:hello@teztecchbuzz.in">hello@teztecchbuzz.in</a>
          </p>
          <p className="footer-text">
            SEND FEEDBACK:<br />
            <a href="https://www.teztecchbuzz.in">www.teztecchbuzz.in</a>
          </p>

          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>

        {/* Weekly Digest */}
        <div className="footer-column footer-newsletter">
          <h4 className="footer-title">Weekly Digest</h4>
          <p className="footer-text small">
            Fill your inbox with positivity!
          </p>
          <form
            className="footer-form"
            onSubmit={(e) => {
              e.preventDefault();
              // handle submit later
            }}
          >
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Teztecch Buzz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

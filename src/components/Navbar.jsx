import { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ onSearchChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearchChange && onSearchChange(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSearchChange) {
      onSearchChange(query);
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo navbar-logo-links">
          <Link to="/">Teztecch <strong>Buzz</strong></Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
            <Link to="/stories">STORIES</Link>
  <Link to="/about">ABOUT</Link>
  <Link to="/brand-campaigns">BRAND CAMPAIGNS</Link>
  <Link to="/advertise">ADVERTISE WITH US</Link>
        </div>

        

          {/* Right Section */}
        <div className="navbar-right">
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search stories..."
              value={query}
              onChange={handleSearchChange}
            />
          </div>

          <button className="subscribe-btn desktop-only">
            SUBSCRIBE
          </button>

          <div
            className="hamburger desktop-only"
            onClick={() => setDrawerOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION */}
<div className="mobile-bottom-nav">
  <Link to="/">
    <i className="fas fa-home"></i>
    <span>Home</span>
  </Link>

  <Link to="/stories">
  <i className="fas fa-newspaper"></i>
    <span>Stories</span>
  </Link>

  <Link to="/topics">
    <i className="fas fa-th-large"></i>
    <span>Topics</span>
  </Link>

  <Link to="/contact">
    <i className="fas fa-envelope"></i>
    <span>Contact</span>
  </Link>




      {/* MOBILE HAMBURGER (Bottom Right) */}
      <div
        className="hamburger "
        onClick={() => setDrawerOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>

      {/* Right Drawer */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <span>MENU</span>
          <i
            className="fas fa-times"
            onClick={() => setDrawerOpen(false)}
          ></i>
        </div>

        <div className="drawer-content">
          <Link to="/">HOME</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/about">About</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/impact">Our Impact</Link>
          <Link to="/brand-campaigns">Brand Campaigns</Link>
          <Link to="/watch-inspiring-video">Watch Inspiring Videos</Link>
          <Link to="/advertise">Advertise With Us</Link>
          <Link to="/press-coverage">Press Coverage</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Career at Teztecch Buzz</Link>
          <hr />

          <p className="follow-title">Follow Us On</p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>

          <div className="newsletter">
            <p className="newsletter-title">
              Fill your inbox with positivity!
            </p>
            <p className="newsletter-sub">
              The Better India Weekly Digest
            </p>
            <button className="subscribe-btn full">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div
          className="overlay"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;

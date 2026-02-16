// src/pages/Subscriber.jsx
import { useState } from "react";
import "../styles/Subscriber.css";

const Subscriber = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (!name.trim()) {
      setStatus({ type: "error", message: "Please enter your name." });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: "success",
        message: "Thank you for subscribing to Teztecch Buzz!"
      });
      setEmail("");
      setName("");
    }, 1000);
  };

  return (
    <main className="subscriber-page">
      <section className="subscriber-hero">
        <div className="container">
          <div className="subscriber-hero-content">
            <h1 className="subscriber-title">Subscribe to Teztecch Buzz</h1>
            <p className="subscriber-subtitle">
              Get the latest inspiring stories from Nagpur and beyond, delivered straight to your inbox.
            </p>
          </div>
        </div>
      </section>

      <section className="subscriber-section">
        <div className="container">
          <div className="subscriber-layout">
            <div className="subscriber-info">
              <h2>Stay in the loop</h2>
              <p>
                Be the first to read positive news, local hero stories, and updates from the Teztecch Buzz team.
              </p>
              <ul>
                <li>Weekly curated newsletter</li>
                <li>No spam, unsubscribe anytime</li>
                <li>Exclusive stories and announcements</li>
              </ul>
            </div>

            <form className="subscriber-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-field checkbox-field">
                <label>
                  <input type="checkbox" required />  
                  I agree to receive emails from Teztecch Buzz.
                </label>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>

              <p className="form-helper">
                We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Subscriber;

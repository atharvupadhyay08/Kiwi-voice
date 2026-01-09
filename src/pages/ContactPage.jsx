import React, { useState } from "react";

const ContactPage = () => {
  const [status, setStatus] = useState("idle");
  // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xkoowope", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions, need support, or want to learn more about Kiwi?<br />
          We’re always here to help.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-section">
        <div className="contact-card">
          <h2>We’re Here for You</h2>
          <p className="contact-subtitle">
            Fill out the form below and our team will reach out within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" name="phone" />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea name="message" rows="4" required></textarea>
            </div>

            <button type="submit" className="button-primary contact-btn">
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status === "success" && (
            <p className="form-success">
              ✅ Message sent successfully. We’ll get back to you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="form-error">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </div>
      </section>

      {/* SUPPORT INFO */}
      <section className="contact-support">
        <div className="support-grid">
          <div className="support-card">
            <h3>Email Support</h3>
            <p>hello@kiwibracelet.com</p>
          </div>

          <div className="support-card">
            <h3>Phone Support</h3>
            <p>+1 (857) 999-7279</p>
          </div>

          <div className="support-card">
            <h3>Response Time</h3>
            <p>Within 24 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

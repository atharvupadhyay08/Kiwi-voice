import React from "react";

const ContactPage = () => {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <h1>Contact Us</h1>
        <p>
          Have questions? Need support? We’re here to help you anytime.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <h2>We're Here for You</h2>
        <p className="subtitle">
          Fill out the form below and our support team will get back to you within 24 hours.
        </p>

        {/* Contact Form Card */}
        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"  
            method="POST"
            className="contact-form"
          >
            <label>Full Name</label>
            <input type="text" name="name" placeholder="John Doe" required />

            <label>Email Address</label>
            <input type="email" name="email" placeholder="yourname@example.com" required />

            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="+1 800 123 4567" />

            <label>Your Message</label>
            <textarea name="message" rows="5" placeholder="How can we help you?" required></textarea>

            <button type="submit" className="button-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* SUPPORT INFO */}
        <div className="section" style={{ marginTop: "40px" }}>
          <h2>Support</h2>
          <p className="subtitle">Need help with the Kiwi Watch?</p>

          <div className="card-grid">

            <div className="card">
              <h3>Email Support</h3>
              <p>support@kiwibracelet.com</p>
            </div>

            <div className="card">
              <h3>Phone Support</h3>
              <p>+1 (800) 123-4567</p>
            </div>

            <div className="card">
              <h3>Response Time</h3>
              <p>Within 24 hours</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;

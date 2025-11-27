import React from "react";

const ContactPage = () => {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <h1>Contact Us</h1>
        <p>
          Have questions? Need support? We’re always here to help.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <h2>We're Here for You</h2>
        <p className="subtitle">
          Fill out the form below, and our team will reach out within 24 hours.
        </p>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="section" style={{ marginTop: "40px" }}>
          <h2>Support</h2>
          <p className="subtitle">Need assistance with the Kiwi Watch?</p>

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
              <p>Usually within 24 hours.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ContactPage;

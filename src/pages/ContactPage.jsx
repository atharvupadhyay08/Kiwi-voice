import React, { useState } from "react";

const ContactPage = () => {
  const [status, setStatus] = useState("idle"); 
  // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xqaryyab", {
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
    <div>
      {/* HERO */}
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Have questions? Need support? We’re here to help anytime.</p>
      </section>

      {/* CONTACT FORM */}
      <section className="section">
        <h2>We're Here for You</h2>
        <p className="subtitle">
          Fill out the form and our team will reach out within 24 hours.
        </p>

        <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
          <form onSubmit={handleSubmit} className="contact-form">

            <label>Full Name</label>
            <input type="text" name="name" required />

            <label>Email Address</label>
            <input type="email" name="email" required />

            <label>Phone Number</label>
            <input type="text" name="phone" />

            <label>Your Message</label>
            <textarea name="message" rows="5" required></textarea>

            <button type="submit" className="button-primary">
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status === "success" && (
            <p style={{ color: "green", marginTop: "15px", textAlign: "center" }}>
              ✔ Message sent successfully! We’ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p style={{ color: "red", marginTop: "15px", textAlign: "center" }}>
              ❌ Something went wrong. Please try again.
            </p>
          )}
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

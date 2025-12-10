import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xqaryyab");

  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <h1>Contact Us</h1>
        <p>Have questions? Need support? We're here to help you anytime.</p>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <h2>We're Here for You</h2>
        <p className="subtitle">
          Fill out the form below and our support team will reach out within 24 hours.
        </p>

        {/* SUCCESS MESSAGE */}
        {state.succeeded && (
          <div className="card" style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
            <h3>Message Sent ✔</h3>
            <p>Thank you for contacting us! We will respond shortly.</p>
          </div>
        )}

        {!state.succeeded && (
          <div className="card" style={{ maxWidth: "600px", margin: "auto" }}>
            <form onSubmit={handleSubmit} className="contact-form">

              <label>Full Name</label>
              <input type="text" name="name" required />

              <label>Email Address</label>
              <input type="email" name="email" required />
              <ValidationError field="email" errors={state.errors} />

              <label>Phone Number</label>
              <input type="text" name="phone" />

              <label>Your Message</label>
              <textarea name="message" rows="5" required />
              <ValidationError field="message" errors={state.errors} />

              <button type="submit" className="button-primary" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        )}

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

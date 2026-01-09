import React, { useState } from "react";

const WaitlistPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const waitlistData = {
      fullName,
      email,
      source
    };
  
    try {
      const res = await fetch("https://formspree.io/f/mbddrdkr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(waitlistData)
      });
  
      if (!res.ok) throw new Error("Submission failed");
  
      setSubmitted(true);
      setFullName("");
      setEmail("");
      setSource("");
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="waitlist-page">
      <div className="waitlist-card">
        <h1>Kiwi 1 Waitlist Registration</h1>
        <p className="waitlist-subtitle">
          Join the exclusive waitlist for the Kiwi 1 health wearable and be among
          the first to experience it.
        </p>

        {!submitted ? (
          <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>How did you hear about our startup?</label>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                <option value="Friend / Word of Mouth">
                  Friend / Word of Mouth
                </option>
                <option value="Social Media Ad">Social Media Ad</option>
                <option value="Website">Website</option>
                <option value="Our Facebook Page">Our Facebook Page</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button type="submit" className="button-primary waitlist-btn">
              Join the Waitlist
            </button>
          </form>
        ) : (
          <div className="success-message">
            <h3>✅ You’re on the list!</h3>
            <p>We’ll notify you as soon as Kiwi 1 becomes available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistPage;

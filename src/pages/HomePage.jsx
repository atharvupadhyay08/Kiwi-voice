import React from "react";
import { useNavigate } from "react-router-dom";
import HeroVideo from "../components/HeroVideo";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <h1>Technology That Finally Serves Seniors</h1>
        <p>
          Kiwi is a 100% voice-controlled smart assistant watch designed for
          safety, connection, and peace of mind — no screens, no apps,
          no confusion.
        </p>

        <div style={{ marginTop: "24px" }}>
          <button
            className="button-primary"
            onClick={() =>
              document
                .getElementById("get-started")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>

          <button
            className="button-secondary"
            onClick={() =>
              document
                .getElementById("features")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="section">
        <h2>See Kiwi in Action</h2>
        <p className="subtitle">
          A quick look at how Kiwi quietly supports seniors throughout the day.
        </p>

        <div style={{ maxWidth: "900px", margin: "40px auto 0" }}>
          <HeroVideo />
        </div>
      </section>

      <section className="features">
  <div className="features-grid">

    <div className="feature-card">
      <span className="icon">🎙️</span>
      <h3>100% Voice Controlled</h3>
      <p>
        No screens, no apps, no learning curve.
        Just natural conversation built for seniors.
      </p>
    </div>

    <div className="feature-card">
      <span className="icon">🚨</span>
      <h3>Emergency Detection</h3>
      <p>
        Detects falls and abnormal vitals automatically
        and alerts caregivers instantly.
      </p>
    </div>

    <div className="feature-card">
      <span className="icon">👨‍👩‍👧</span>
      <h3>Family Dashboard</h3>
      <p>
        Real-time health insights for loved ones —
        without invading privacy.
      </p>
    </div>

  </div>
</section>


   <section className="comparison-section">
  <h2 className="comparison-title">
    Why Traditional Wearables Fail Seniors
  </h2>
  <p className="comparison-subtitle">
    Kiwi isn’t a small improvement — it’s a complete rethink.
  </p>

  <div className="comparison-grid">

    {/* Traditional Wearables */}
    <div className="comparison-card traditional">
      <h3>Traditional Wearables</h3>
      <ul>
        <li>❌ Touch screens & tiny buttons</li>
        <li>❌ Requires smartphone pairing</li>
        <li>❌ Complex menus</li>
        <li>❌ Fitness-first, not care-first</li>
        <li>❌ Medical-looking design</li>
      </ul>
    </div>

    {/* Kiwi Watch */}
    <div className="comparison-card kiwi">
      <h3>Kiwi Watch</h3>
      <ul>
        <li>✅ Pure voice interaction</li>
        <li>✅ Works independently</li>
        <li>✅ Designed specifically for seniors</li>
        <li>✅ Care & safety focused</li>
        <li>✅ Elegant everyday design</li>
      </ul>
    </div>

  </div>
</section>

      <section className="cta">
  <div className="cta-card">
    <h2>Get Started With Kiwi</h2>
    <p>Safer living, smarter care, and peace of mind — in minutes.</p>
    <button>Talk to Our Team →</button>
  </div>
</section>

    </div>
  );
};

export default HomePage;

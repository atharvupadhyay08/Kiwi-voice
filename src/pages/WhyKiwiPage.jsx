import React from "react";

const WhyKiwiPage = () => {
  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <h1>Why Kiwi?</h1>
        <p>
          A revolutionary senior-first wearable that makes safety effortless,
          family connection natural, and technology invisible.
        </p>
      </section>

      {/* PROBLEM SECTION */}
      <section className="section">
        <h2>The Silent Crisis in Senior Care</h2>
        <p className="subtitle">
          Seniors are underserved by technology — Kiwi fixes what others ignore.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>Assisted Living</h3>
            <p>Falls go undetected, emergency pendants are forgotten, and staff are stretched thin.</p>
          </div>

          <div className="card">
            <h3>Hospitals & Post-Discharge</h3>
            <p>No continuous monitoring, leading to high readmission rates.</p>
          </div>

          <div className="card">
            <h3>Families at Home</h3>
            <p>
              Constant worry about medication, falls, and daily wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
<section className="section">
  <h2>The Numbers Don’t Lie</h2>
  <p className="subtitle">
    Real-world clinical validation from frontline healthcare professionals.
  </p>

  <div className="card-grid">
    <div className="stat-card">
      <h1>95.7%</h1>
      <p>Nurses save time every shift<br />(89/93 respondents)</p>
    </div>

    <div className="stat-card">
      <h1>82.8%</h1>
      <p>Would recommend Kiwi<br />(rated 4–5/5)</p>
    </div>

    <div className="stat-card">
      <h1>67.7%</h1>
      <p>Report high clinical trust<br />(rated 4–5/5)</p>
    </div>

    <div className="stat-card">
      <h1>80.6%</h1>
      <p>Trained in under 30 minutes</p>
    </div>

    <div className="stat-card">
      <h1>71%</h1>
      <p>Have purchasing influence in their facility</p>
    </div>

    <div className="stat-card">
      <h1>64.5%</h1>
      <p>Save 1–5 minutes per shift on vitals</p>
    </div>

    <div className="stat-card">
      <h1>62.4%</h1>
      <p>Likely to use Kiwi daily</p>
    </div>
  </div>

  <p className="micro-note">Based on feedback from 93 clinical respondents</p>
</section>


      {/* THE KIWI BREAKTHROUGH */}
      <section className="section">
        <h2>The Kiwi Breakthrough</h2>
        <p className="subtitle">
          Designed entirely around how seniors communicate and live.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>100% Voice Controlled</h3>
            <p>Zero screens. Zero buttons. Zero confusion.</p>
          </div>

          <div className="card">
            <h3>Proactive Family Dashboard</h3>
            <p>Automatic alerts, wellness summaries, and real-time vitals.</p>
          </div>

          <div className="card">
            <h3>Senior-First Design</h3>
            <p>Looks like a modern watch — not a medical device.</p>
          </div>
        </div>
      </section>

{/* INSIGHTS SECTION */}
<section className="section">
  <h2>What These Numbers Mean</h2>

  <div className="card-grid">
    <div className="card">
      <h3>Clinical Buy-In & Adoption</h3>
      <p>
        60% of clinicians are likely or very likely to recommend Kiwi to their unit,
        validating strong product–market fit and readiness for facility-wide rollout.
      </p>
      <p>
        57% believe Kiwi significantly improves patient triage and management,
        directly impacting patient safety and care efficiency.
      </p>
    </div>

    <div className="card">
      <h3>Immediate ROI for Care Teams</h3>
      <p>
        69% of users save 1–5 minutes per shift on vitals collection,
        freeing time for direct patient care.
      </p>
      <p>
        62% rate Kiwi’s ease of use as 4 or 5, ensuring rapid adoption
        with minimal training overhead.
      </p>
    </div>

    <div className="card">
      <h3>Enterprise-Ready Infrastructure</h3>
      <p>
        62% of respondents rate EHR integration as important or extremely important,
        aligning Kiwi with enterprise deployment requirements.
      </p>
      <p>
        Kiwi is built to scale across hospitals, assisted living facilities,
        and post-discharge care environments.
      </p>
    </div>
  </div>
</section>



      {/* COMPARISON */}
      <section className="section">
        <h2>A Complete Redesign of Senior Technology</h2>

        <div className="comparison">
          <div className="comp-box">
            <h3>Traditional Wearables</h3>
            <ul>
           <li>❌ Complex interface</li>
            <li>❌ Smartphone required</li>
           <li>❌ Stigmatizing design</li>
           <li>❌ Fitness-focused features</li>
           </ul>

          </div>

          <div className="comp-box">
            <h3>The Kiwi Watch</h3>
            <ul>
              <li>✔️ Pure voice interaction</li>
              <li>✔️ Works independently</li>
              <li>✔️ Elegant & dignity-preserving</li>
              <li>✔️ Built for safety & care</li>
            </ul>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyKiwiPage;

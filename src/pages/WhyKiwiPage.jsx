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

        <div className="card-grid">
          <div className="stat-card">
            <h1>67%</h1>
            <p>Older adults avoid technology due to complexity.</p>
          </div>

          <div className="stat-card">
            <h1>98%</h1>
            <p>Fall alerts in traditional devices are false alarms.</p>
          </div>

          <div className="stat-card">
            <h1>80%</h1>
            <p>Seniors live with chronic conditions needing monitoring.</p>
          </div>
        </div>
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

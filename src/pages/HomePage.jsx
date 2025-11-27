import React from "react";

const HomePage = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Technology That Finally Serves Seniors.</h1>
        <p>
          Kiwi is a 100% voice-controlled smart assistant watch designed for
          safety, connection, and peace of mind — no screens, no apps,
          no confusion.
        </p>

        <button className="button-primary">Get Started</button>
        <button className="button-secondary">Learn More</button>
      </section>

      

      {/* STATS SECTION */}
      <section className="section">
  <h2>Why Kiwi?</h2>
  <p className="subtitle">
    A breakthrough senior-first wearable with natural voice interface.
  </p>

  <div className="card-grid">

    <div className="card">
      <h3>100% Voice Controlled</h3>
      <p>No screens, no apps — just natural conversation that feels effortless.</p>
    </div>

    <div className="card">
      <h3>Smart Emergency Detection</h3>
      <p>Automatically senses falls or abnormal vitals and alerts family instantly.</p>
    </div>

    <div className="card">
      <h3>Medication & Routine Coach</h3>
      <p>Kiwi remembers schedules and offers gentle reminders throughout the day.</p>
    </div>

    <div className="card">
      <h3>Proactive Family Dashboard</h3>
      <p>Real-time health updates, alerts, and insights for loved ones.</p>
    </div>

    <div className="card">
      <h3>Senior-First Comfort Design</h3>
      <p>Lightweight, stylish, and intuitive — designed specially for seniors.</p>
    </div>

    <div className="card">
      <h3>Built for Safety & Independence</h3>
      <p>Gives seniors autonomy while ensuring 24/7 voice-activated support.</p>
    </div>

  </div>
</section>


      {/* COMPARISON SECTION */}
      <section className="section">
        <h2>Why Traditional Wearables Fail</h2>
        <p className="subtitle">
          Kiwi isn’t an improvement — it’s a redesign for seniors.
        </p>

        <div className="comparison">

          <div className="comp-box">
            <h3>Traditional Wearables</h3>
            <ul>
              <li>❌ Complex touch screens</li>
              <li>❌Requires smartphone pairing</li>
              <li>❌ Multiple menus & buttons</li>
              <li>❌ Fitness-first — not senior care</li>
              <li>❌ Looks like a medical tracker</li>
            </ul>
          </div>

          <div className="comp-box">
            <h3>Kiwi Watch</h3>
            <ul>
              <li>✔️ Pure voice interaction</li>
              <li>✔️ Works independently — no phone</li>
              <li>✔️ Senior-friendly & intuitive</li>
              <li>✔️ Designed for safety & care</li>
              <li>✔️ Elegant non-medical appearance</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;

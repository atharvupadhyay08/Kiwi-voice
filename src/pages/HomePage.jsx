import React from "react";

const HomePage = () => {
  return (
    <div>

      {/* Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .no-bullets li {
          list-style: none;
          margin: 0.4rem 0;
        }
        .video-section {
          width: 100%;
          height: 70vh;
          overflow: hidden;
          position: relative;
        }
        .video-section video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Technology That Finally Serves Seniors.</h1>
        <p>
          Kiwi is a 100% voice-controlled smart assistant watch designed for
          safety, connection, and peace of mind — no screens, no apps,
          no confusion.
        </p>

        {/* Buttons */}
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
      </section>

      {/* ⭐ NEW VIDEO SECTION ⭐ */}
      {/* PRODUCT VIDEO SECTION */}
<section className="section" style={{ textAlign: "center" }}>
  <h2>See Kiwi in Action</h2>
  <p className="subtitle">A quick look at how Kiwi makes seniors' lives easier.</p>

  <div style={{ position: "relative", maxWidth: "800px", margin: "auto" }}>
    <video
      id="productVideo"
      src="/Kiwi-voice/Hero.mp4"
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        borderRadius: "14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
      }}
    ></video>

    {/* Video Controls */}
    <div
      style={{
        marginTop: "15px",
        display: "flex",
        gap: "15px",
        justifyContent: "center"
      }}
    >
      <button
        className="button-primary"
        onClick={() => {
          const video = document.getElementById("productVideo");
          video.paused ? video.play() : video.pause();
        }}
      >
        Play / Pause
      </button>

      <button
        className="button-secondary"
        onClick={() => {
          const video = document.getElementById("productVideo");
          video.muted = !video.muted;
        }}
      >
        Mute / Unmute
      </button>
    </div>
  </div>
</section>

      {/* FEATURES SECTION (For Learn More Button) */}
      <section className="section" id="features">
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
            <ul className="no-bullets">
              <li>❌ Complex touch screens</li>
              <li>❌ Requires smartphone pairing</li>
              <li>❌ Multiple menus & buttons</li>
              <li>❌ Fitness-first — not senior care</li>
              <li>❌ Looks like a medical tracker</li>
            </ul>
          </div>

          <div className="comp-box">
            <h3>Kiwi Watch</h3>
            <ul className="no-bullets">
              <li>✔️ Pure voice interaction</li>
              <li>✔️ Works independently — no phone</li>
              <li>✔️ Senior-friendly & intuitive</li>
              <li>✔️ Designed for safety & care</li>
              <li>✔️ Elegant non-medical appearance</li>
            </ul>
          </div>

        </div>
      </section>

      {/* GET STARTED SECTION */}
      <section className="section" id="get-started">
        <h2>Get Started With Kiwi</h2>
        <p className="subtitle">
          Begin your journey toward safer, smarter senior independence.
        </p>

        <div className="card-grid">

          <div className="card">
            <h3>Create Your Kiwi Account</h3>
            <p>Set up your profile in under a minute and personalize your preferences.</p>
          </div>

          <div className="card">
            <h3>Choose Your Voice</h3>
            <p>Select from soothing, natural-sounding voices specially made for seniors.</p>
          </div>

          <div className="card">
            <h3>Start Talking</h3>
            <p>Ask Kiwi anything — reminders, health checks, assistance, or safety alerts.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;

import React from "react";
import "../styles.css";

export default function ForSeniorsPage() {
  return (
    <main className="seniors-page">

      {/* HERO */}
      <section className="seniors-hero">
        <h1>🌿 A Safer Way to Age — Without Complicated Technology</h1>
        <p>
          Kiwi helps seniors stay independent while giving families peace of mind.
        </p>
      </section>

      {/* CONTINUOUS MONITORING */}
      <section className="content-section">
        <h2>📊 Continuous Monitoring</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h4>❤️ Heart Rate</h4>
            <p>Detects stress or early illness</p>
          </div>

          <div className="feature-card">
            <h4>🚨 Fall Detection</h4>
            <p>Automatic detection without button presses</p>
          </div>

          <div className="feature-card">
            <h4>🫁 Blood Oxygen (SpO₂)</h4>
            <p>Identifies breathing issues</p>
          </div>

          <div className="feature-card">
            <h4>🚶‍♂️ Activity & Movement</h4>
            <p>Reveals weakness or fatigue</p>
          </div>

          <div className="feature-card">
            <h4>📍 GPS Location</h4>
            <p>Alerts if wandering occurs</p>
          </div>
        </div>
      </section>

      {/* DESIGNED FOR SENIORS */}
      <section className="content-section alt">
        <h2>👵 Designed for Seniors</h2>

        <div className="feature-grid">
          <div className="feature-card">🗣️ Voice-first interaction</div>
          <div className="feature-card">📵 No smartphones or apps needed</div>
          <div className="feature-card">💬 Natural spoken commands</div>
          <div className="feature-card">📨 Alerts sent to family & caregivers</div>
          <div className="feature-card">⏰ Medication & routine reminders</div>
        </div>
      </section>

      {/* PEACE OF MIND */}
      <section className="content-section">
        <h2>🕊️ Peace of Mind</h2>

        <div className="feature-grid">
          <div className="feature-card">😊 Seniors live confidently</div>
          <div className="feature-card">👨‍👩‍👧 Families stay informed, not intrusive</div>
          <div className="feature-card">🔔 Care teams notified only when needed</div>
          <div className="feature-card">🩺 Doctors can check vitals remotely</div>
        </div>
      </section>

      {/* CAREGIVERS */}
      <section className="content-section alt">
        <h2>🤝 Built With Caregivers in Mind</h2>

        <div className="feature-grid">
          <div className="feature-card">🔕 Fewer unnecessary alerts</div>
          <div className="feature-card">📈 Trusted, actionable data</div>
          <div className="feature-card">🏥 Designed with nurses & senior homes</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <button className="button-primary">
          💡 Learn how Kiwi works →
        </button>
        <button className="button-secondary">
          💚 See if Kiwi is right for you →
        </button>
      </section>

    </main>
  );
}

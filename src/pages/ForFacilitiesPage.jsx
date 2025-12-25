import React from "react";
import "../styles.css";

export default function ForFacilitiesPage() {
  return (
    <main className="facilities-page">

      {/* HERO */}
      <section className="facilities-hero">
        <h1>Built for Workflow Efficiency, Clinical Trust, and Scale</h1>
        <p>
          Kiwi reduces workload, improves oversight, and integrates seamlessly
          into senior care facilities.
        </p>
      </section>

      {/* HOW KIWI HELPS */}
      <section className="content-section">
        <h2>How Kiwi Helps Your Facility</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h4>❤️ Heart Rate Monitoring</h4>
            <p>Continuous insights without manual checks</p>
          </div>

          <div className="feature-card">
            <h4>🫁 Blood Oxygen (SpO₂)</h4>
            <p>Early detection of respiratory concerns</p>
          </div>

          <div className="feature-card">
            <h4>🚶‍♂️ Activity & Movement</h4>
            <p>Identifies fatigue, decline, or unusual behavior</p>
          </div>

          <div className="feature-card">
            <h4>🚨 Fall Detection</h4>
            <p>Immediate alerts without resident interaction</p>
          </div>

          <div className="feature-card">
            <h4>📍 Location (GPS)</h4>
            <p>Wandering alerts for memory care residents</p>
          </div>
        </div>
      </section>

      {/* FACILITY BENEFITS */}
      <section className="content-section alt">
        <h2>Facility Benefits</h2>

        <div className="feature-grid">
          <div className="feature-card">⏱️ Reduced manual vitals collection</div>
          <div className="feature-card">👀 Continuous oversight between rounds</div>
          <div className="feature-card">⚡ Automatic fall detection</div>
          <div className="feature-card">🩺 Remote physician access</div>
          <div className="feature-card">🔗 EHR & workflow integration</div>
        </div>
      </section>

      {/* ROI */}
      <section className="content-section">
        <h2>Expected ROI</h2>

        <div className="feature-grid">
          <div className="feature-card">📉 Reduced nurse workload</div>
          <div className="feature-card">🔕 Lower alert fatigue</div>
          <div className="feature-card">⏳ Training under 30 minutes</div>
        </div>
      </section>

      {/* ENTERPRISE */}
      <section className="content-section alt">
        <h2>Designed for Enterprise Adoption</h2>

        <div className="feature-grid">
          <div className="feature-card">
            🧩 PointClickCare & MatrixCare integration
          </div>
          <div className="feature-card">
            🖥️ Single centralized clinical dashboard
          </div>
          <div className="feature-card">
            🛡️ Clinical-grade support — not a consumer gadget
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <button className="button-primary">
          🚀 Request a facility pilot →
        </button>
        <button className="button-secondary">
          💬 Talk to our clinical team →
        </button>
      </section>

    </main>
  );
}

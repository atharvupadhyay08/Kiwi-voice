import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function WhyKiwiPage() {
  const navigate = useNavigate();

  return (
    <main className="whykiwi-page">
      <section className="hero-soft">
        <h1>WHY KIWI?</h1>
        <p className="hero-subtext">
          Kiwi is a wearable that keeps an eye on seniors’ health and safety throughout the day,
          helping caregivers spot risks early and prevent emergencies.
        </p>
      </section>

      <section className="split-entry">
        <div className="entry-card" onClick={() => navigate("/for-seniors")}>
          <h3>For Seniors & Families</h3>
          <p>Safety, independence, and peace of mind — without complicated technology.</p>
          <span className="entry-cta">Explore →</span>
        </div>

        <div className="entry-card" onClick={() => navigate("/for-facilities")}>
          <h3>For Nursing Homes & Senior Care Facilities</h3>
          <p>Continuous monitoring that reduces workload and improves oversight.</p>
          <span className="entry-cta">Explore →</span>
        </div>
      </section>
    </main>
  );
}

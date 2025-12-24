import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function WhyKiwiPage() {
  const navigate = useNavigate();

  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <h1>Why Kiwi?</h1>
        <p>
          Kiwi is a wearable that keeps an eye on seniors’ health and safety
          throughout the day, helping caregivers spot risks early and prevent
          emergencies.
        </p>
      </section>

      {/* SPLIT ENTRY */}
      <section className="split-entry">
        <div
          className="entry-card"
          role="button"
          tabIndex={0}
          onClick={() => navigate("/why-kiwi/seniors")}
          onKeyDown={(e) =>
            e.key === "Enter" && navigate("/why-kiwi/seniors")
          }
        >
          <h3>For Seniors & Families</h3>
          <p>
            Safety, independence, and peace of mind — without complicated
            technology.
          </p>
          <span className="entry-cta">Explore →</span>
        </div>

        <div
          className="entry-card"
          role="button"
          tabIndex={0}
          onClick={() => navigate("/why-kiwi/facilities")}
          onKeyDown={(e) =>
            e.key === "Enter" && navigate("/why-kiwi/facilities")
          }
        >
          <h3>For Nursing Homes & Senior Care Facilities</h3>
          <p>
            Continuous monitoring that reduces workload and improves oversight.
          </p>
          <span className="entry-cta">Explore →</span>
        </div>
      </section>

    </main>
  );
}

export default WhyKiwiPage;

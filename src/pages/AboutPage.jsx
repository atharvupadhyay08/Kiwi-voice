import React from "react";

const AboutPage = () => {
  return (
    <div>

      {/* HERO */}
      <section className="about-hero">
        <h1>About Kiwi</h1>
        <p>
          Our mission is simple: make technology disappear so seniors can live
          safer, happier, and more connected lives.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <h2>Our Story</h2>
        <p className="subtitle">
          Kiwi was born from real-life challenges experienced by families,
          hospitals, and caregivers.
        </p>

        <div className="card">
          <p>
            We saw seniors struggling with smartphones, complex wearables, and
            unintuitive emergency devices. We saw families living in constant
            worry. And we saw outdated technology pretending to be solutions.
            <br /><br />
            So we built Kiwi — a voice-first wearable designed not for the tech
            world, but for the real world. A device that seniors can use without
            learning. A system families can trust without setup. A design that
            protects dignity instead of labeling someone as fragile.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <h2>What We Stand For</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Dignity</h3>
            <p>Technology should empower, not overwhelm or embarrass.</p>
          </div>

          <div className="card">
            <h3>Simplicity</h3>
            <p>
              The easiest interface in the world is human speech — so we built
              everything around it.
            </p>
          </div>

          <div className="card">
            <h3>Safety</h3>
            <p>
              Falls, vitals, reminders — Kiwi handles it automatically.
            </p>
          </div>

          <div className="card">
            <h3>Connection</h3>
            <p>
              Families stay informed without invading privacy.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND */}
      <section className="section">
        <h2>The Kiwi Identity</h2>
        <p className="subtitle">
          Fresh. Simple. Life-enhancing — just like the fruit.
        </p>

        <div className="card">
          <p>
            Kiwi represents renewal, energy, and life. Our brand reflects
            friendliness and trust with a modern, clean aesthetic. We’re not a
            medical device company — we’re a care company powered by design and
            technology.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

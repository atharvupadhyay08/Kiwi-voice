import React from "react";

export default function RecommendationChart() {
  const data = [
    { rating: "5", value: 21 },
    { rating: "4", value: 39 },
    { rating: "3", value: 28 },
    { rating: "2", value: 11 },
    { rating: "1", value: 1 },
  ];

  return (
    <div className="trust-card">
      <div className="trust-highlight">
        <span>87%</span>
        <p>of care staff are likely or very likely to recommend Kiwi</p>
      </div>

      <div className="rating-bars">
        {data.map((item) => (
          <div className="rating-row" key={item.rating}>
            <span className="rating-label">{item.rating}</span>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: `${item.value * 2.2}%` }}
              />
            </div>
            <span className="rating-value">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="testimonial">
        <p>
          “Kiwi has significantly improved our response time and increased
          confidence during shifts.”
        </p>
        <span>— Staff Nurse</span>
      </div>
    </div>
  );
}

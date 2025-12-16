import React from "react";
import { VegaLite } from "react-vega";

const spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  title: "Staff Likelihood to Recommend the Device",
  background: "transparent",
  data: {
    values: [
      { Recommendation_Rating: "1", Count: 1 },
      { Recommendation_Rating: "2", Count: 11 },
      { Recommendation_Rating: "3", Count: 28 },
      { Recommendation_Rating: "4", Count: 39 },
      { Recommendation_Rating: "5", Count: 21 }
    ]
  },
  layer: [
    {
      mark: "bar",
      encoding: {
        x: {
          field: "Recommendation_Rating",
          type: "nominal",
          title: "Rating Score (1: Not likely, 5: Very likely)"
        },
        y: {
          field: "Count",
          type: "quantitative",
          title: "Number of Respondents"
        },
        tooltip: [
          { field: "Recommendation_Rating", type: "nominal" },
          { field: "Count", type: "quantitative" }
        ],
        color: { value: "#1A73E8" }
      }
            },
            {
                  mark: { type: "text", dy: -5 },
                  encoding: {
                        x: { field: "Recommendation_Rating", type: "nominal" },
                        y: { field: "Count", type: "quantitative" },
                        text: { field: "Count", type: "quantitative" },
                        color: { value: "#111" }
                  }
            }
  ]
};

export default function RecommendationChart() {
  return <VegaLite spec={spec} />;
}

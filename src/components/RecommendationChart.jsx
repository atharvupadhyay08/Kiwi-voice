import React, { useEffect, useRef } from "react";
import embed from "vega-embed";

export default function RecommendationChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const spec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      background: "transparent",
      title: "Staff Likelihood to Recommend the Device",

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
          mark: { type: "bar", cornerRadiusTopLeft: 6, cornerRadiusTopRight: 6 },
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
              { field: "Recommendation_Rating", type: "nominal", title: "Rating" },
              { field: "Count", type: "quantitative", title: "Responses" }
            ],
            color: { value: "#4CAF50" }
          }
        },
        {
          mark: { type: "text", dy: -8 },
          encoding: {
            x: { field: "Recommendation_Rating", type: "nominal" },
            y: { field: "Count", type: "quantitative" },
            text: { field: "Count", type: "quantitative" },
            color: { value: "#111" }
          }
        }
      ]
    };

    embed(chartRef.current, spec, {
      actions: false
    });

  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}

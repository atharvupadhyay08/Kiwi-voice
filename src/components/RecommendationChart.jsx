import React, { useEffect, useRef } from "react";
import embed from "vega-embed";

export default function RecommendationChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const spec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      background: "transparent",

      title: {
        text: "Staff Likelihood to Recommend Kiwi",
        fontSize: 18,
        fontWeight: 600,
        color: "#111",
        anchor: "middle"
      },

      data: {
        values: [
          { rating: "1", count: 1 },
          { rating: "2", count: 11 },
          { rating: "3", count: 28 },
          { rating: "4", count: 39 },
          { rating: "5", count: 21 }
        ]
      },

      layer: [
        {
          mark: {
            type: "bar",
            cornerRadiusTopLeft: 10,
            cornerRadiusTopRight: 10
          },
          encoding: {
            x: {
              field: "rating",
              type: "ordinal",
              title: "Rating (1 = Not likely, 5 = Very likely)",
              axis: {
                labelFontSize: 13,
                titleFontSize: 13
              }
            },
            y: {
              field: "count",
              type: "quantitative",
              title: "Number of Respondents",
              axis: {
                labelFontSize: 13,
                titleFontSize: 13,
                grid: true,
                gridColor: "#eaeaea"
              }
            },
            color: {
              value: "#4CAF50"
            },
            tooltip: [
              { field: "rating", title: "Rating" },
              { field: "count", title: "Responses" }
            ]
          }
        },
        {
          mark: {
            type: "text",
            dy: -8,
            fontSize: 13,
            fontWeight: 600
          },
          encoding: {
            x: { field: "rating", type: "ordinal" },
            y: { field: "count", type: "quantitative" },
            text: { field: "count", type: "quantitative" },
            color: { value: "#111" }
          }
        }
      ]
    };

    embed(chartRef.current, spec, { actions: false });
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}

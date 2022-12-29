import React from "react";
import { Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineController,
} from "chart.js";

import { Skeleton } from "antd";

ChartJS.register(LineController, 
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartContainer = (props) => {
  return (
    <React.Fragment>
      {props.loading ? (
        <Skeleton active={props.loading} />
      ) : (
        <Chart
          type="line"
          data={props.data}
          className="chart-container earnings"
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            layout: {
              autoPadding: true,
              padding: 40,
            },
          }}
        />
      )}
    </React.Fragment>
  );
};

export default ChartContainer;

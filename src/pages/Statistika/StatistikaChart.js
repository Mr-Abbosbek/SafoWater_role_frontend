// import React, { useState } from "react";
// import { Line } from "react-chartjs-2";

// const Chart = () => {
//   const [data] = useState({
//     labels: [
//       "Eating",
//       "Drinking",
//       "Sleeping",
//       "Designing",
//       "Coding",
//       "Cycling",
//       "Running",
//     ],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgba(194, 116, 161, 0.5)",
//         borderColor: "rgb(194, 116, 161)",
//         data: [65, 59, 90, 81, 56, 55, 40],
//       },
//       {
//         label: "My Second dataset",
//         backgroundColor: "rgba(71, 225, 167, 0.5)",
//         borderColor: "rgb(71, 225, 167)",
//         data: [28, 48, 40, 19, 96, 27, 100],
//       },
//     ],
//   });

//   return (
//     <div className="statistic w-100">
//         <div className="chart">
//         <h3 className="mt-5">Line chart</h3>
//         <Line data={data} className="w-100" />
//         </div>
//     </div>
//   );
// };

// export default Chart;

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const StatistikaChart = ({path}) => {
  const [data] = useState({
    series1: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100,],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: "series3",
        data: [5, 43, 45, 37, 53, 17, 48],
      },
    ],
    series2: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100,],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        // height: 350,
        type: "area",
      },
      // dataLabels: {
      //   enabled: false,
      // },
      // stroke: {
      //   curve: "smooth",
      // },
      xaxis: {
        type: "month",
        categories: [
          "2018-08-19",
          "2018-09-19",
          "2018-10-19",
          "2018-11-19",
          "2018-12-19",
          "2018-13-19",
          "2018-14-19",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="statistic">
        <ReactApexChart
          options={data.options}
          series={ path === true ? data.series1 : data.series2}
          type="area"
          height={750}
          style={{backgroundColor: "#ffff", padding: "10px", margin: "20px 0px"}}
        />
      </div>
    </div>
  );
};

export default StatistikaChart;

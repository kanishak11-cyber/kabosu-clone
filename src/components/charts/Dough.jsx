import React from "react";
// import kabu from "../../assets/kabu.jpg";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);
const data = {
  labels: [
    "Ecosystem  BUY BACK 2%",
    "Auto LP 1%",
    "Redistribution to all holders 1%",
    "Rewards 3%",
    "Marketing 3%",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [2, 1, 1, 3, 3],
      backgroundColor: [
        "rgb(36, 219, 173)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(237, 204, 228)",
        "rgb((31, 103, 184)",
      ],
      hoverOffset: 4,
    },
  ],
};
const Dough = () => {
  return (
    <div className="text-white">
      <h1>UTILITIES <br/> & <br/> SLIPPAGE</h1>
      <Doughnut data={data}  />
      {/* <div className="rounded-full w-32 h-32 -mt-48 ml-28 m-1">
        <img
          src={kabu}
          alt=""
          className="z-10   mb-1 rounded-full"
        />
      </div> */}
    </div>
  );
};

export default Dough;

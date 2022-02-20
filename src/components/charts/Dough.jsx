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
    <div className="p-5 text-white">
      <h1 className="md:text-3xl text-xl">UTILITIES &  SLIPPAGE</h1>
      <Doughnut data={data}  className='text-white my-2'  width={400} height={400}/>
     
    </div>
  );
};

export default Dough;

import React
// { useEffect, useState } 
from "react";
// import kabu from "../../assets/kabu.jpg";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);
const data = {    
  labels: [
    "Marketing 6%",
    "Burn 30%",
    "Airdrops 5%",
    "Babu Swap & NFT Marketplace development 5%",
    "Exchange Listing 5%",
    "Team Wallet 2%",
    "Fair launch PinkSale & pancakeSwap Liquidity 50%",

  ],
 


  datasets: [
    {
      label: "Distribution",
      textColor: "#000000",
      data: [6, 30, 5, 5, 5, 2, 50],
      backgroundColor: [
        "rgb(36, 219, 173)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(237, 204, 228)",
        "rgb((31, 103, 184)",
        "rgb(109, 43, 185)",

        "rgb(66, 145, 54)",
      ],
     borderWidth: 2,
      borderColor: "#fff",
      labelColor: "#000000",
      hoverBorderColor: "#fff",
      hoverOffset: 4,
    },

  ],
  
};

const Donut = () => {
  

  return (
    <div className="text-white p-5">
      <h1 className="md:text-3xl text-xl">DISTRIBUTION</h1>
      <Doughnut data={data} className='text-white my-2'  width={400} height={400}  />
     
    </div>
  );
};

export default Donut;

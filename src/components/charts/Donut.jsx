import React
// { useEffect, useState } 
from "react";
// import kabu from "../../assets/kabu.jpg";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
ChartJs.register(Tooltip, Title, ArcElement, Legend);
const data = {
  style: {
    width: "28vw",
    height: "28vh",
    color: "white",
    alignItems: "center",
    
  },
  labels: [
    "Marketing 6%",
    "Babu Swap & NFT Marketplace development 5%",
    "Exchange Listing 5%",
    "Team Wallet 2%",
    "Airdrops 5%",
    "Fair launch PinkSale & pancakeSwap Liquidity 50%",
    "Burn 30%",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [6, 5, 5, 2, 2, 50, 30],
      backgroundColor: [
        "rgb(36, 219, 173)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(237, 204, 228)",
        "rgb((31, 103, 184)",
        "rgb(109, 43, 185)",

        "rgb(66, 145, 54)",
      ],
      hoverOffset: 4,
    },
  ],
};

const Donut = () => {
  //   const [data, setData] = useState({
  //     datasets: [
  //       {
  //         data: [10, 20, 30],
  //         backgroundColor: ["red", "blue", "yellow"],
  //       },
  //     ],
  //     labels: ["Red", "Yellow", "Blue"],
  //   });
  //   useEffect(() => {
  //     const fetchData = () => {
  //       fetch("https://jsonplaceholder.typicode.com/users")
  //         .then((data) => {
  //           const res = data.json();
  //           return res;
  //         })
  //         .then((res) => {
  //           console.log("resss", res);
  //           const label = [];
  //           const data = [];
  //           for (var i of res) {
  //             label.push(i.name);
  //             data.push(i.id);
  //           }
  //           setData({
  //             datasets: [
  //               {
  //                 data: data,
  //                 backgroundColor: ["red", "blue", "yellow"],
  //               },
  //             ],
  //             labels: label,
  //           });
  //         })
  //         .catch((e) => {
  //           console.log("error", e);
  //         });
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div className="text-white">
      <h1 className="md:text-3xl text-xl">DISTRIBUTION</h1>
      <Doughnut data={data}  />
      {/* <div className="rounded-full w-32 h-32">
            <img src={kabu} alt="" className="z-10 -mt-48  ml-32 mb-1 rounded-full" />
      </div> */}
    </div>
  );
};

export default Donut;

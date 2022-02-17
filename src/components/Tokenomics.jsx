import React from "react";
// import liquid from "../assets/liquidity.png";
// import tax from "../assets/tax.png";
import Donut from "./charts/Donut";
import Dough from "./charts/Dough";
import Roadmap from "./Roadmap";
const Tokenomics = () => {
  return (
    <div>
      <div className="bg-gradient-to-r ont p-5 h-full  text-white from-[#eb79b8] to-[#eba63f] ">
        <div className="justify-between">
          <div className="text-center justify-center my-10">
            <h1 className="ont md:text-5xl text-2xl p-5"> Our Tokenomics</h1>
            <h1 className="ont md:text-3xl text-lg p-5 ">
              {" "}
              100 000 000 000 000 Total Supply{" "}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center my-10">
            <div className="items-center text-center mt-2 ">
              <div className="object-center items-center  md:px-52 px-36  ">
                <Donut />
              </div>
            </div>
            <div className="items-center text-center mt-2   ">
              <div className="object-center items-center md:px-52 px-36">
                <Dough />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Roadmap />
    </div>
  );
};

export default Tokenomics;

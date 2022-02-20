import React from "react";
// import liquid from "../assets/liquidity.png";
// import tax from "../assets/tax.png";
import Donut from "./charts/Donut";
import Dough from "./charts/Dough";
import Doucument from "./Doucument";

const Tokenomics = () => {
  return (
    <div className="w-full ">
      <div className="bg-gradient-to-r ont p-5 px-10 text-white from-[#eb79b8] to-[#eba63f] ">
        <div className="justify-between">
          <div className="text-center justify-center my-10">
            <h1 className="ont md:text-5xl text-2xl p-5"> Our Tokenomics</h1>
            <h1 className="ont md:text-3xl text-lg p-5 ">
              {" "}
              100 000 000 000 000 Total Supply{" "}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row text-center justify-evenly my-10">
            <Donut className='m-2' />
            <Dough className='m-2' />
          </div>
        </div>
      </div>
      <Doucument />
      {/* <Roadmap /> */}
    </div>
  );
};

export default Tokenomics;

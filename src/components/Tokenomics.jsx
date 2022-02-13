import React from "react";
import liquid from "../assets/liquidity.png";
import tax from "../assets/tax.png";
const Tokenomics = () => {
  return (
    <div className="bg-gradient-to-r ont p-5 h-full  text-white from-[#eb79b8] to-[#eba63f] ">
      <div className="justify-between">
        <div className="text-center justify-center my-10">
          <h1 className="ont md:text-5xl text-2xl p-5"> Our Tokenomics</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center my-10">
          <div className="items-center text-center mt-2 ">
            <div className="object-center items-center  md:px-52 px-36  ">
              <img src={tax} alt="tax" className=" w-full h-full" />
            </div>
            <div className="text-center my-5">
              <div className="my-2">
                <h1 className="md:text-5xl text-3xl">5%</h1>
              </div>
              <div className="my-2">
                <h1 className="md:text-3xl text-xl">
                  Re-Distributed to Holders
                </h1>
              </div>
            </div>
          </div>
          <div className="items-center text-center mt-2   ">
            <div className="object-center items-center md:px-52 px-36">
              <img src={liquid} alt="liqid" className="" />
            </div>
            <div className="text-center my-5 ">
              <div className="my-2">
                <h1 className="md:text-5xl text-3xl">5%</h1>
              </div>
              <div className="my-2">
                <h1 className="md:text-3xl text-xl">Added to Liquidity</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

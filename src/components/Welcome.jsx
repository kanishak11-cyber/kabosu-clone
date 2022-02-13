import React from "react";
import logo from "../assets/kabousababy.png";
import { FaChartLine, FaShoppingCart } from "react-icons/fa";
import { BsShieldShaded } from "react-icons/bs";
const Welcome = () => {
  return (
    <div className=" bg-gradient-to-r from-[#eb79b8] to-[#eba63f] text-center   text-white ont  px-10">
      <div className="flex flex-col   ">
        <div className="rounded-full  place-self-center  md:w-1/5 w-1/3 hover:transition-transform hover:scale-110  ">
          <img
            src={logo}
            alt=""
            className="  bg-white  rounded-full hover:transition-transform hover:scale-110"
          />
        </div>
        <div className="py-5  ">
          <h1 className="md:text-6xl ont text-lg">The offical CEO of Doge</h1>
        </div>
        <div className="py-5">
          <h1 className="md:text-xl text-sm">
            The World&apos;s 1st Dog Themed Token That Rewards You, Whilst
            Giving Dogs a Home
          </h1>
        </div>
      </div>
      <div className="uppercase justify-evenly w-full pb-10 ">
        <button className="border-white border-4 rounded-full m-2 px-5 py-2 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
          <h1 className="text-lg flex flex-row items-center ">
            kabosu swap <FaShoppingCart />
          </h1>
        </button>
        <button className="border-white border-4 rounded-full px-5 m-2 py-2 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
          <h1 className="text-lg flex flex-row items-center">
            Buy kabosu <FaShoppingCart />
          </h1>
        </button>
        <button className="border-white border-4 rounded-full m-2 px-5 py-2 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
          <h1 className="text-lg flex flex-row items-center">
            view chart{""} <FaChartLine />{" "}
          </h1>
        </button>
        <button className="border-white border-4 rounded-full px-5 m-2  py-2 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
          <h1 className="text-lg flex flex-row items-center ">
            check bscscan <BsShieldShaded />
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Welcome;

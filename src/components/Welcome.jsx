import React from "react";
import logo from "../assets/kabousababy.png";
import { FaChartLine, FaShoppingCart } from "react-icons/fa";
import { BsShieldShaded } from "react-icons/bs";
import About from "./About";

const Welcome = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#eb79b8] to-[#eba63f] text-center    text-white ont  py-3">
        <div className="flex flex-col  bg-gradient-to-r from-[#eb79b8] to-[#eba63f] text-center  ">
          <div className="rounded-full  place-self-center  md:w-1/5 w-1/3 hover:transition-transform hover:scale-110  ">
            <img
              src={logo}
              alt="logo"
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
          <a
            href="https://swap.kabosutoken.io/#/swap?outputCurrency=0x4A824eE819955A7D769e03fe36f9E0C3Bd3Aa60b"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="border-white border-4 rounded-full m-2 px-5 py-2 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
              <h1 className="text-lg flex flex-row items-center ">
                kabosu swap <FaShoppingCart />
              </h1>
            </button>
          </a>
          <a
            href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x4A824eE819955A7D769e03fe36f9E0C3Bd3Aa60b"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="border-white border-4 rounded-full px-5 m-2 py-2 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
              <h1 className="text-lg flex flex-row items-center">
                Buy kabosu <FaShoppingCart />
              </h1>
            </button>
          </a>
          <a
            href="https://dex.guru/token/0x4a824ee819955a7d769e03fe36f9e0c3bd3aa60b-bsc"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="border-white border-4 rounded-full m-2 px-5 py-2 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
              <h1 className="text-lg flex flex-row items-center">
                view chart{""} <FaChartLine />{" "}
              </h1>
            </button>
          </a>
          <a
            href="https://bscscan.com/token/0x4A824eE819955A7D769e03fe36f9E0C3Bd3Aa60b"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="border-white border-4 rounded-full px-5 m-2  py-2 hover:bg-gradient-to-r from-yellow-500 to-pink-500">
              <h1 className="text-lg flex flex-row items-center ">
                check bscscan <BsShieldShaded />
              </h1>
            </button>
          </a>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Welcome;

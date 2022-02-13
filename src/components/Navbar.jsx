import React from "react";
import home from "../assets/kabousababy.png";
const Navbar = () => {
  return (
    <div className="justify-center  sticky  ">
      <div className="justify-between px-3 py-5 bg-gradient-to-r flex flex-row  from-[#eb79b8] to-[#eba63f]  text-white">
        <div className="flex flex-row ont-a">
          <div className="w-20 h-20 rounded-full items-center">
            <img
              src={home}
              alt="home"
              className="w-20 h-20 rounded-full  object-cover"
            />
          </div>
          <div className=" ">
            <h1 className="text-5xl justify-center items-center text-center border-b-4 border-pink-600  ">
              <a href="/">Kabosu</a>
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-evenly w-3/5  navbar-brand items-center">
          <div className="justify-items-center ">
            <h1 className="text-3xl justify-center">About</h1>
          </div>
          <div className="justify-items-center ">
            <h1 className="text-3xl justify-center">Tokenomics</h1>
          </div>
          <div className="justify-items-center ">
            <h1 className="text-3xl justify-center">RoadMap</h1>
          </div>
          <div className="justify-items-center  ">
            <button className=" text-3xl justify-center border-4 rounded-full">
             <h1 className="px-5 navbar-brand">Buy kabosu</h1> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

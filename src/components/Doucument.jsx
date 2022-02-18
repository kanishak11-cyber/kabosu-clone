import React from "react";
import paper from "../assets/whitepaper.png";
import cov1 from "../assets/whitecover.png";
import cov2 from "../assets/auditcover.png";
import Roadmap from "./Roadmap";
const Doucument = () => {
  return (
      <div>
    <div className=" bg-gradient-to-r from-[#eb79b8]  to-[#eba63f] text-white ont justify-center">
      <div className="flex md:flex-row flex-col text-center px-10">
        <div className="">
          <a
            href="https://www.youtube.com/watch?v=lS2GvkBvrAM"
            className="play-btn-s2 video-play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={paper} alt="" className="" />
            {/* <em class="play-icon"><span></span></em> */}
          </a>
        </div>
        <div>
          <h1 className="md:text-5xl text-3xl">Our documents</h1>
          <div className="border-b-8 border-pink-400 md:mx-64 mx-32 mt-5 w-32  justify-center"></div>
          <p className="my-10 font-medium">
            You can find links to our official white paper and independent audit
            below so you can be confident knowing you are in good hands with us!
          </p>
          <div className="flex md:flex-row flex-col justify-evenly p-5 mt-5 capitalize">
          <div className="flex flex-row mx-5 ">
              <div className="mt-4 -mr-14 z-10 w-20 h-32">
                <img src={cov1} alt="" className="" />
              </div>
              <div className="flex flex-col white-glassmorphism  w-56 h-28 z-0">
                <h1 className="m-5 ">Whitepaper</h1>
                <button className="hover:text-pink-500 font-semibold border border-pink-500 mx-14">Read Now</button>
              </div>
            </div>
            <div className="flex flex-row mx-5">
              <div className="mt-4 -mr-14 z-10 w-20 h-32">
                <img src={cov2} alt="" className="" />
              </div>
              <div className="flex flex-col white-glassmorphism  w-56 h-28 z-0">
                <h1 className="m-5 ">Audit</h1>
                <button className="hover:text-pink-500 font-semibold border border-pink-500 mx-14">Read Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Roadmap />
    </div>
  );
};

export default Doucument;

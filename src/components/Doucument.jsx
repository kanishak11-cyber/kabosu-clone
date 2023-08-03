import React, { forwardRef, useImperativeHandle } from "react";
import paper from "../assets/whitepaper.png";
import cov1 from "../assets/whitecover.png";
import cov2 from "../assets/auditcover.png";

const Doucument = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // function to scroll to the component
    scroll: () => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div className="">
      <hr/>
      <div className="py-20 bg-gradient-to-r from-[#eb79b8]  to-[#eba63f] text-white ont justify-center">
        <div className="flex md:flex-row flex-col text-center md:px-20 px-5">
          <div className="justify-center   md:p-10 p-3 animate-none">
            
            <div className="cover  transition delay-150 duration-300 ease-in-out  ">
               <a
              href="https://www.youtube.com/watch?v=lS2GvkBvrAM"
              className="justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={paper} className="animate-pulse  " alt="cover" />                            
            </a>
            </div>
           
          </div>
          <div>
            <h1 className="md:text-5xl text-3xl mx-10">Our documents</h1>
            <div className="border-b-8 border-pink-400 md:mx-64 mx-32 mt-5 w-32  justify-center"></div>
            <p className="my-10 font-medium mx-14">
              You can find links to our official white paper and independent
              audit below so you can be confident knowing you are in good hands
              with us!
            </p>
            <div className="flex md:flex-row flex-col justify-evenly p-5 mt-5 capitalize">
              <div className="flex flex-row px-5 ">
                <div className="mt-4 -mr-14 z-10 w-20 h-32">
                  <img src={cov1} alt="" className="" />
                </div>
                <div className="flex flex-col white-glassmorphism  w-56 h-28 z-0">
                  <h1 className="m-5 ">Whitepaper</h1>
                  <a
                    href="https://kabosutoken.io/wp-content/uploads/2021/06/Kabosu-Whitepaper-V2_compressed.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="hover:text-pink-500 font-semibold border border-pink-500 mx-14">
                      Read Now
                    </button>
                  </a>
                </div>
              </div>
              <div className="flex flex-row px-5">
                <div className="mt-4 -mr-14 z-10 w-20 h-32">
                  <img src={cov2} alt="" className="" />
                </div>
                <div className="flex flex-col white-glassmorphism  w-56 h-28 z-0">
                  <h1 className="m-5 ">Audit</h1>
                  <a
                    href="https://kabosutoken.io/wp-content/uploads/2021/06/Kabosu-Token-BEP-20-Audit-7465046.pdf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="hover:text-pink-500 font-semibold border border-pink-500 mx-14">
                      Read Now
                    </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
});

export default Doucument;

import React, { useState } from "react";
import home from "../assets/kabousababy.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="bg-gradient-to-r from-[#eb79b8] to-[#eba63f]  text-white ont">
      <nav className="w-full flex md:justify-center justify-between items-center p-4">
        <div className="md:flex-[0.5] flex-initial  justify-between items-center">
          <div className="flex flex-row justify-center items-center">
          <div className="w-20 h-20 rounded-full items-center">
           <img
               src={home}
           alt="home"
               className="w-20 h-20 rounded-full  object-cover"
             />
           </div>
          
             <h1 className="text-4xl justify-center items-center text-center border-b-4 border-pink-600  ">
               <a href="/">Kabosu</a>
             </h1>
           
           </div>
        </div>
        <div className="text-white md:flex hidden list-none flex-row justify-evenly items-center flex-initial">
          <div className="flex flex-row justify-evenly  navbar-brand items-center">
            <div className="justify-items-center  px-2">
              <h1 className="text-2xl justify-center">About</h1>
            </div>
            <div className="justify-items-center px-2">
              <h1 className="text-2xl justify-center">Tokenomics</h1>
            </div>
            <div className="justify-items-center px-2">
              <h1 className="text-2xl justify-center">RoadMap</h1>
            </div>
            <div className="justify-items-center px-2 ">
              <button className=" text-2xl justify-center border-4 rounded-full">
                <h1 className="px-5 navbar-brand">Buy kabosu</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed top-0 -right-2 p-3 w-[50vw] h-screen shadow-xl md:hidden list-none
                flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              <div className=" items-center">
                <div className="justify-items-center py-3 ">
                  <h1 className="md:text-3xl text-lg justify-center">About</h1>
                </div>
                <div className="justify-items-center py-3 ">
                  <h1 className="md:text-3xl text-lg justify-center">Tokenomics</h1>
                </div>
                <div className="justify-items-center py-3">
                  <h1 className="md:text-3xl text-lg justify-center">RoadMap</h1>
                </div>
                <div className="justify-items-center py-3 ">
                  <button className="md:text-3xl text-lg justify-center border-4 rounded-full">
                    <h1 className="md:px-5 px-2 navbar-brand">Buy kabosu</h1>
                  </button>
                </div>
              </div>
            
            </ul>
          )}
        </div>
      </nav>
    </div>
    // <div className="justify-center  sticky  ">
    //   <div className="justify-between px-3 py-5 bg-gradient-to-r flex flex-row  from-[#eb79b8] to-[#eba63f]  text-white">
    //     <div className="flex flex-row ont-a">
    //       <div className="w-20 h-20 rounded-full items-center">
    //         <img
    //           src={home}
    //           alt="home"
    //           className="w-20 h-20 rounded-full  object-cover"
    //         />
    //       </div>
    //       <div className=" ">
    //         <h1 className="text-5xl justify-center items-center text-center border-b-4 border-pink-600  ">
    //           <a href="/">Kabosu</a>
    //         </h1>
    //       </div>
    //     </div>

    //     <div className="flex flex-row justify-evenly w-3/5  navbar-brand items-center">
    //       <div className="justify-items-center ">
    //         <h1 className="text-3xl justify-center">About</h1>
    //       </div>
    //       <div className="justify-items-center ">
    //         <h1 className="text-3xl justify-center">Tokenomics</h1>
    //       </div>
    //       <div className="justify-items-center ">
    //         <h1 className="text-3xl justify-center">RoadMap</h1>
    //       </div>
    //       <div className="justify-items-center  ">
    //         <button className=" text-3xl justify-center border-4 rounded-full">
    //          <h1 className="px-5 navbar-brand">Buy kabosu</h1>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;

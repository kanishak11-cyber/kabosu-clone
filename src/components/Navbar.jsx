import React, { useState } from "react";
import home from "../assets/kabousababy.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="bg-gradient-to-r from-[#eb79b8]  to-[#eba63f] h-24 bg-white text-white ont">
      <nav className="w-full flex md:justify-center justify-between   items-center p-4">
        <div className="md:flex-[0.5] flex-initial bg-transparent z-10 justify-between  items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="w-20 h-20 rounded-full items-center">
              <img
                src={home}
                alt="home"
                className="w-20 h-20 rounded-full  object-cover"
              />
            </div>

            <h1 className="text-4xl block  justify-center items-center text-center border-b-4 border-pink-600  ">
              <a href="/">Kabosu</a>
            </h1>
          </div>
        </div>
        <div className="text-white md:flex hidden list-none flex-row justify-evenly items-center flex-initial">
          <div className="flex flex-row justify-evenly  navbar-brand items-center">
            <li className="justify-items-center  px-2">
              <a href="about" className="text-lg block justify-center scroll-smooth">
                About
              </a>
            </li>
            <div className="justify-items-center px-2">
              <a href="/tokenomics" className="text-lg justify-center">
                Tokenomics
              </a>
            </div>
            <div className="justify-items-center px-2">
              <a href="/roadmap" className="text-lg justify-center">
                RoadMap
              </a>
            </div>
            <div className="justify-items-center px-2">
              <a href="/join" className="text-lg justify-center">
                Join
              </a>
            </div>
            <div className="justify-items-center px-2">
              <a href="/contact" className="text-lg justify-center">
                Contact
              </a>
            </div>
            <div className="justify-items-center px-2 py-3">
              <button className=" text-lg justify-center border rounded-full">
                <h1 className="px-5 py-2 navbar-brand">Buy kabosu</h1>
              </button>
              <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                  <i className="icon-down-circle"></i>
                </a>
              </p>
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
                  <h1 className="md:text-3xl text-lg justify-center">
                    Tokenomics
                  </h1>
                </div>
                <div className="justify-items-center py-3">
                  <h1 className="md:text-3xl text-lg justify-center">
                    RoadMap
                  </h1>
                </div>
                <div className="justify-items-center py-3">
                  <a href="#join" className="text-lg justify-center">
                    Join
                  </a>
                </div>
                <div className="justify-items-center py-3">
                  <a href="/contact" className="text-lg justify-center">
                    Contact
                  </a>
                </div>
                <div className="justify-items-center py-3 ">
                  <button className="md:text-3xl text-lg justify-center border rounded-full">
                    <h1 className="md:px-5 px-2 navbar-brand">Buy kabosu</h1>
                  </button>
                </div>
              </div>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

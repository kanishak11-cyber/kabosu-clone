import React from "react";
import {
  FaReddit,
  FaTelegram,
  FaDiscord,
  FaInstagramSquare,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="justify-center m-10">
      {/* icons */}
      <div className="text-pink-600 text-5xl flex flex-row flex-1 justify-evenly text-center">
        <FaTelegram />
        <FaReddit />
        <AiFillTwitterCircle />
        <FaDiscord />
        <FaInstagramSquare />
      </div>
      {/* end icons */}
      <div className=" text-center md:text-sm text-xs mt-5 text-[#4c5a77]">
        <h1>
          Copyright © 2022 Kabosu Token. All Rights Reserved - Privacy Policy -
          Terms & Conditions
        </h1>
      </div>
    </div>
  );
};

export default Footer;

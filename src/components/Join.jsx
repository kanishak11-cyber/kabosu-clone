import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaFacebook,
  FaReddit,
  FaDiscord,
} from "react-icons/fa";
import Contact from "./Contact";
const Join = () => {
  return (
    <div>
      <div className="bg-gradient-to-r ont p-5 h-full  text-white from-[#eb79b8] to-[#eba63f] ">
        <div className="text-center justify-center ont ">
          <h1 className="text-3xl md:5xl my-5">Join Our Community</h1>
          <p className="text-lg md:3xl my-5">
            We are a new project but positive news about us is travelling fast.
            <br />
            Be sure to join our amazing community to keep up-to-date and find
            out how you can get involved.
          </p>
          <h2 className="text-2xl my-5">See You Soon!</h2>
        </div>

        <div className="   my-20 ">
          <div className="md:flex-row  flex-col  flex flex-1 justify-evenly">
            <div className="flex flex-row justify-evenly ">
              <a
                href="https://www.telegram.org/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="p-5 ">
                  <FaTelegram className=" text-5xl   md:m-5 m-2" />
                  <h1 className="md:text-3xl text-lg text-center">Telegram</h1>
                </div>
              </a>

              <a href="https://twitter.com" rel="noreferrer " target="_blank">
                <div className="p-5">
                  <FaTwitter className="md:m-5 m-2 text-5xl " />
                  <h1 className="md:text-3xl text-lg text-center">Twitter</h1>
                </div>
              </a>

              <a href="https://reddit.com" rel="noreferrer " target="_blank">
                <div className="p-5">
                  <FaReddit className="md:m-5 m-2 text-5xl " />
                  <h1 className="md:text-3xl text-lg text-center">Reddit</h1>
                </div>
              </a>
            </div>

            <div className="flex flex-row justify-evenly ">
              <a href="https://discord.com" rel="noreferrer " target="_blank">
                <div className="p-5">
                  <FaDiscord className="md:m-5 m-2 text-5xl " />
                  <h1 className="md:text-3xl text-lg text-center">Discord</h1>
                </div>
              </a>

              <a href="https://instagram.com" rel="noreferrer " target="_blank">
                <div className="p-5">
                  <FaInstagram className="md:m-5 m-2 text-5xl " />
                  <h1 className="md:text-3xl text-lg text-center">Instagram</h1>
                </div>
              </a>

              <a href="https://facebook.com" rel="noreferrer " target="_blank">
                <div className="p-5">
                  <FaFacebook className="md:m-5 m-2 text-5xl " />
                  <h1 className="md:text-3xl text-lg text-center">Facebook</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Join;

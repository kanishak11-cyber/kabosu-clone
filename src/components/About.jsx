import React from "react";
import ball from "../assets/ball.png";
const About = () => {
  return (
    <div>
      <div className="m-10">
        <div className="flex flex-row justify-center items-center   ">
          <h1 className="text-9xl   text-pink-400 font-extrabold justify-center text-center opacity-10  ">
            かぼす
          </h1>
          <h1 className="text-4xl ont capitalize -ml-80 text-center text-cyan-800">
            who is kabosu?
          </h1>
        </div>
        <div className="text-center text-[#4c5a77]">
          <div className="my-5">
            <p className="text-[#4c5a77] text-2xl italic font-medium">
              <strong>
                Kabosu (Japanese: かぼす) is a female Shiba Inu most famously
                known as the face of Doge.
              </strong>
            </p>
            <p className="text-lg my-5 font-normal">
              Kabosu was born in November 2nd, 2005 in a Japanese pedigree puppy
              mill that was promptly shut down, leaving Kabosu stranded in one
              of Japan’s many animal shelters. The owner of Kabosu, Atsuko Sato,
              rescued her in 2008, saving her from certain death at the hands of
              humanity. Her name was given by a shelter volunteer – Kabosu is a
              type of fruit and said rescue worker mentioned that her face was
              very round, just like the fruit.
            </p>
            <p className="text-lg my-5 font-normal">
              The goal of Kabosu is to prevent dogs of all breeds from being
              abandoned. For this reason we will be making regular donations to
              community chosen dog charities!
            </p>
          </div>
        </div>
        <div className=" my-5 justify-center  items-center">
            
          <img
            src={ball}
            alt="ball"
            className=" items-center md:mx-56 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

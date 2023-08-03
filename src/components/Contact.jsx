import React, { forwardRef, useImperativeHandle } from "react";

const Contact = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // function to scroll to the component
    scroll: () => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div className="justify-center bg-pink-50 md:p-10 p-5">
      <div className="md:m-10 m-5">
        <div className="text-center">
          <h1 className="text-pink-500 md:text-5xl text-2xl ont ">Contact Kabosu</h1>
          <p className="text-[#4c5a77] md:text-xl text-md my-5 justify-center md:mx-52">
            We value our community, so if you have any suggestions or would like
            to get involved get in touch with us today!
          </p>
        </div>
        <div className="flex flex-col text-center text-2xl mt-5 w-3/4 justify-center md:mx-40  mx-10">
          <form className="flex flex-col flex-1  justify-center items-center p-3 text-center">
            <input
              type="text"
              placeholder=" Your Name"
              className="border-b-2 my-3 p-3 bg-pink-50 w-full text-center"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-b-2 my-3 p-3 bg-pink-50 w-full text-center"
            />
            <textarea
              placeholder=" Your Message"
              className="border-b-2 my-3 bg-pink-50 w-full text-center"
            ></textarea>
            <button
              type="submit"
              className="border-2 border-black rounded-full justify-center mt-5 text-sm px-7 py-3 text-[#4c5a77] hover:bg-gradient-to-r ont  from-[#eb79b8] to-[#eba63f] hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Contact;

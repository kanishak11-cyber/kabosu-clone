import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Join from "./components/Join";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Welcome from "./components/Welcome";
import { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Doucument from "./components/Doucument";
import home from "./assets/kabousababy.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const aboutRef = useRef(null);
  const roadmapRef = useRef(null);
  const docsRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const joinRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <Router>
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
                  <Link to="/">Kabosu</Link>
                </h1>
              </div>
            </div>
            <div className="text-white md:flex hidden list-none flex-row justify-evenly items-center flex-initial">
              <div className="flex flex-row justify-evenly text-lg navbar-brand items-center  gap-3">
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(aboutRef)}
                >
                  About
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(tokenomicsRef)}
                >
                  Tokenomics
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(docsRef)}
                >
                  Documents
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(roadmapRef)}
                >
                  RoadMap
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(joinRef)}
                >
                  Join
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(contactRef)}
                >
                  Contact
                </button>{" "}
                <a
                  href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x4A824eE819955A7D769e03fe36f9E0C3Bd3Aa60b"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <div className="justify-items-center px-2 py-3">
                    <button className=" text-lg justify-center border rounded-full">
                      <h1 className="px-5 py-2 navbar-brand">Buy kabosu</h1>
                    </button>
                  </div>
                </a>
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
                  <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(aboutRef)}
                >
                  About
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(tokenomicsRef)}
                >
                  Tokenomics
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(docsRef)}
                >
                  Documents
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(roadmapRef)}
                >
                  RoadMap
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(joinRef)}
                >
                  Join
                </button>
                <button
                  className="justify-items-center hover:text-[#fdfd96] px-2"
                  onClick={() => scrollToRef(contactRef)}
                >
                  Contact
                </button>

                   
                      <div className="justify-items-center eth-card rounded-full">
                        <a
                          href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x4A824eE819955A7D769e03fe36f9E0C3Bd3Aa60b"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <h1 className="px-3 py-1 navbar-brand">Buy kabosu</h1>
                        </a>
                      </div>
                  
                  </div>
                </ul>
              )}
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About ref={aboutRef} />} />
          <Route path="/roadmap" element={<Roadmap ref={roadmapRef} />} />
          <Route path="/docs" element={<Doucument ref={docsRef} />} />
          <Route
            path="/tokenomics"
            element={<Tokenomics ref={tokenomicsRef} />}
          />
          <Route path="/join" element={<Join ref={joinRef} />} />
          <Route path="/contact" element={<Contact ref={contactRef} />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;

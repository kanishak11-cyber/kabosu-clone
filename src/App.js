import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Doucument from "./components/Doucument";
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,700;0,800;0,900;1,700&display=swap');
</style>
function App() {
  return (
    <div className=" ">
      <Router>
        <div className="bg-white fixed w-full text-black">
          <Navbar />
        </div>

        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Welcome />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path='/docs' element={<Doucument/>}/>
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path='/telegram' component={() => window.location = 'https://telegram.org/'}/> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Navbar className="fixed" />
      <Welcome />

      <About />
      <Tokenomics />
      <Roadmap />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

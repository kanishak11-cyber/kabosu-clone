import "./App.css";
import About from "./components/About";
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
      <Footer/>
    </div>
  );
}

export default App;

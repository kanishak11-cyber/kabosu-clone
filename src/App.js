import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Tokenomics from './components/Tokenomics';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar className='fixed'/>
      <Welcome/>
     
      <About/>
      <Tokenomics/>
    </div>
  );
}

export default App;

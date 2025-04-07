import logo from './logo.svg';
import './App.css';


// components
import Navbar from './components/Navbar';
import FindFlights from './components/FindFlights';

function App() {
  return (
    <div>
      <Navbar />
      <FindFlights />
    </div>
  );
}

export default App;


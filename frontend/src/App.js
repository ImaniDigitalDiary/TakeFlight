// import logo from './logo.svg';
import './App.css';

//  styles
import './styling/app.css'


// components
import Navbar from './components/Navbar';
import FindFlights from './components/FindFlights';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <FindFlights />
    </div>
  );
}

export default App;


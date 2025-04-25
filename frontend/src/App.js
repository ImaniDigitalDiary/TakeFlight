// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'

//  styles
import './styling/app.css'

// pages
import HomePage from './pages/HomePage';

// components
import Navbar from './components/Navbar';
import FindFlights from './components/FindFlights';

function App() {
  return (
    <div className='app'>
      {/* <Navbar />
      <FindFlights /> */}
      <Routes>
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;


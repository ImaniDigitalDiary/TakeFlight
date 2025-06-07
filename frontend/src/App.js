import './App.css';
import {Routes, Route} from 'react-router-dom'

//  STYLES
import './styling/app.css'

// PAGES
import HomePage from './pages/HomePage';
import Book from './pages/Book';
import HelpCenter from './pages/HelpCenter';
import MyTripsPage from './pages/MyTripsPage';
import TravelInfoPage from './pages/TravelInfoPage';
import MileagePlusPage from './pages/MileagePlusPage';



function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/book' element={<Book />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/my-trips' element={<MyTripsPage />} />
        <Route path='/travel-info' element={<TravelInfoPage />} />
        <Route path='/mileage-plus' element={<MileagePlusPage />} />
      </Routes>
    </div>
  );
}

export default App;


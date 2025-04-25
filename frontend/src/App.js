import './App.css';
import {Routes, Route} from 'react-router-dom'

//  STYLES
import './styling/app.css'

// PAGES
import HomePage from './pages/HomePage';



function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;


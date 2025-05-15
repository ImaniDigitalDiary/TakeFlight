import './App.css';
import {Routes, Route} from 'react-router-dom'

//  STYLES
import './styling/app.css'

// PAGES
import HomePage from './pages/HomePage';
import HelpCenter from './pages/HelpCenter';



function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/help-center' element={<HelpCenter />} />
      </Routes>
    </div>
  );
}

export default App;


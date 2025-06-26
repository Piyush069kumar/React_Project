// src/App.jsx
import './App.css';
// import { useContext } from 'react';
// import { AppContext } from './context/AppContext';
import { Link } from 'react-router-dom';
import { Route, Routes} from "react-router-dom";
import SearchWeather from './pages/SearchWeather';
import YourWeather from './pages/YourWeather';
function App() {

  return (

    <div className='App'>
      <h1>Weather Application</h1>
      <p>
        Search weather by city or use your current location
      </p>
      <nav>
      
        <Link to="/city" className='Link'>
        <button className='button'>Search by City</button>
        </Link>

        <Link to="/location" className='Link'>
          <button className='button'>Use My Location</button>
        </Link>

      </nav>
      
      <Routes>
        <Route path="/city" element={<SearchWeather />} />
        <Route path="/location" element={<YourWeather />} />
      </Routes>
    </div>
    
  );
}

export default App;

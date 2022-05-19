import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomeComponent from './componenets/home/homeComponent';
import RestaurantsNearMe from './componenets/restaurantsNearMe/restaurantsNearMe';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/restaurants-near-me' element={<RestaurantsNearMe />} />
      </Routes>
    </div>
  );
}

export default App;

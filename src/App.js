import { useEffect, useState } from 'react';
import './App.css';
import SelectLevel from './components/SelectLevel';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Game from './components/Game';


function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<SelectLevel />} />
          <Route path='/easy' element={<Game level='easy' size={3} />} />
          <Route path='/medium' element={<Game level='medium' size={5} />} />
          <Route path='/hard' element={<Game level='hard' size={7} />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;

import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newmovies from './pages/Newmovies';
import Mahesh from './pages/Mahesh';
import Pras from './pages/Pras';
import Newntr from './pages/Newntr';
import Newnani from './pages/Newnani';
import Dashboard from './pages/Dashboard';
import Teluguheros from './pages/Teluguheros'
import Shahrukhan from './pages/Shahrukhan';
import Hindiheros from './pages/Hindiheros';
import Amt from './pages/Amt';
import Salman from './pages/Salman';



function App() {
  return (
    <div className='Main'>
      <Router> 
        <Routes>
          <Route path='/' element={<Login />} /> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/telugu' element={<Teluguheros/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/pawankalyana' element={<Newmovies />} />
          <Route path='/maheshbabu' element={<Mahesh/>}/>
          <Route path='/prabhas' element={<Pras/>}/>
          <Route path='/ntr' element={<Newntr/>}/>
          <Route path='/nani' element={<Newnani/>}/>
          <Route path='/hindi' element={<Hindiheros/>}/>
          <Route path='/shah' element={<Shahrukhan/>}/>
          <Route path='/amit' element={<Amt/>}/>
          <Route path='/salman' element={<Salman/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

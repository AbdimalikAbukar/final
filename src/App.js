
import './App.css';
import React from 'react';
import Home from './Home';
import NobelPrizeInfo from './NobelPrizeInfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1>Abdimalik Abukar - n01630627</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/nobel/:year' element={<NobelPrizeInfo />}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

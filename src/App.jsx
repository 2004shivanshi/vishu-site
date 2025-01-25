


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        {/* Define routes for Home only */}
        <Routes>
          <Route path="/" element={<Home />} />
          


        </Routes>
      </div>
    </Router>
  );
}

export default App;
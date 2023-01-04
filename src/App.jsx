import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Requirementspage from './components/Requirements/requirementspage';

function App() {
  return (
    <Router>
    <Routes>
      
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/requirements" element={<Requirementspage />} />
      
    </Routes>
  </Router>
  );
}

export default App;

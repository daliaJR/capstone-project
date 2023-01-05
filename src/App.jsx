import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Resource from './pages/Resource';
import './App.css';
import Contact from './features/counter/Contact';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (
    <div className="py-8">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

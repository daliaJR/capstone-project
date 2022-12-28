import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Resource from './pages/Resource';
import './App.css';
import Contact from './features/counter/Contact';
import ThankYou from './pages/ThankYou';
import Footer from "./components/Footer";
import About from "./components/about/About";
// import Team from "./components/about/Team";


function App() {
  return (
    <div className="py-8">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/team" element={<Team />} /> */}
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

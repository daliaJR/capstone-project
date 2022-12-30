import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Contact from './features/counter/Contact';
import About from './components/about/About';
import EditProfile from './components/profile/EditProfile';




function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/editProfile" element={<EditProfile/>} />
     


        </Routes>
      </Router>

    </div>
  );
}

export default App;

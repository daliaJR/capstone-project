import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Resource from './pages/Resource';
import './App.css';
import Contact from './features/counter/Contact';
import About from './components/about/About';
import EditProfile from './components/profile/EditProfile';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';
// import Login from './components/Login';
import Signup from './components/Signup';
// import AddNewCard from './components/AddNewCard';
import Payment from './pages/Payment';
import BuyTicket from './pages/BuyTicket';
import Career from './components/career/Career';
import TherapistProfile from './components/therapist/TherapistProfile';
import TherapistCreate from './pages/TherapistCreate';
import AddNewCard from './pages/AddNewCard';

function App() {
  return (
    <div className="py-8">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          <Route path="/therapistProfile" element={<TherapistProfile />} />
          <Route path="/footer" element={<Footer />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/addnewcard" element={<AddNewCard />} /> */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/buyticket" element={<BuyTicket />} />
          <Route path="/about/career" element={<Career />} />
          <Route path="/therapistcreate" element={<TherapistCreate />} />
          <Route path="/addnewcard" element={<AddNewCard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

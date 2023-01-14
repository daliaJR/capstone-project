import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resource from './pages/Resource';
import Contact from './features/counter/Contact';
import About from './pages/About';
import EditProfile from './pages/EditProfile';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';
import Booking from './components/booking/Booking';
import Login from './pages/Login';
import Signup from './components/Signup';
import AddNewCard from './pages/AddNewCard';
import Payment from './pages/Payment';
import BuyTicket from './pages/BuyTicket';
import Career from './pages/Career';
import TherapistProfile from './pages/TherapistProfile';
import TherapistCreate from './pages/TherapistCreate';
import RequirementsPage from './pages/RequirementsPage';
import Navbar from './components/Navbar';
import AuthProvider from './pages/Authentic';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requirements" element={<RequirementsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/therapistprofile" element={<TherapistProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addnewcard" element={<AddNewCard />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/buyticket" element={<BuyTicket />} />
          <Route path="/career" element={<Career />} />
          <Route path="/therapistcreate" element={<TherapistCreate />} />
          <Route path="/addnewcard" element={<AddNewCard />} />
          <Route path="/AuthProvider " element={<AuthProvider />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

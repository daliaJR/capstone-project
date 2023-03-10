import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resource from './pages/Resource';
import Contact from './pages/Contact';
import About from './pages/About';
import EditProfile from './pages/EditProfile';
import ThankYou from './pages/ThankYou';
import Footer from './components/Footer';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
    <Router>
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* fixed */}
            <Route path="/requirements" element={<RequirementsPage />} />
            {/* fixed */}
            <Route path="/about" element={<About />} /> {/* fixed */}
            <Route path="/editprofile" element={<EditProfile />} />{' '}
            {/* fixed */}
            <Route path="/contact" element={<Contact />} /> {/* fixed */}
            <Route path="/blogs/:id" element={<Resource />} /> {/* fixed */}
            <Route path="/thankyou/:type" element={<ThankYou />} />
            {/* fixed */}
            <Route path="/booking" element={<Booking />} /> {/* fixed */}
            <Route path="/therapistprofile" element={<TherapistProfile />} />
            {/* fixed */}
            <Route path="/login" element={<Login />} /> {/* fixed */}
            <Route path="/signup" element={<Signup />} /> {/* fixed */}
            <Route path="/addnewcard" element={<AddNewCard />} /> {/* fixed */}
            <Route path="/payment" element={<Payment />} /> {/* fixed */}
            <Route path="/buyticket/:type" element={<BuyTicket />} />{' '}
            {/* fixed */}
            <Route path="/career" element={<Career />} /> {/* fixed */}
            <Route path="/therapistcreate" element={<TherapistCreate />} />
            {/* fixed */}
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

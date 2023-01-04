import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/navigation/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;

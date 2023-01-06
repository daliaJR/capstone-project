import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from './assets/HB.svg';
import { ReactComponent as Brand } from './assets/Logo.svg';
import { ReactComponent as Dropdown } from './assets/Dropdown.svg';
import './Navstyle.css';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="Logo">
          <Brand />
          <p className='healing'>Healing</p>
        </div>
        <button type="button" className="HB" onClick={handleShowNavbar}>
          <Hamburger />
        </button>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li >

            <div>
            <li>

<div className='dropdown'>
    <Dropdown className="dropbtn"/>
    <NavLink to="/about" className='about'>About</NavLink>
  <div className="dropdown-content">
  <a href="/story">Story</a>
  <a href="/team">Team</a>

  </div>
</div>
</li>
</div>



            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
           <li>
           <div className='loginbtn'>
          <NavLink to="/login"  id='login'>Login</NavLink>
          </div>
           </li>
          </ul>   
            
        </div>
      
      </div>
    </nav>
  )
}

export default Navbar
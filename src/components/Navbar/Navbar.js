import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from './assets/HB.svg'
import { ReactComponent as Brand } from './assets/Logo.svg'
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
            </li>
            <li>
            <div className="dropdown">
             <button className="dropbtn" type='button'> ᐁ</button>
              <div className="dropdown-content">
              <NavLink to="#">1</NavLink>
              <NavLink to="#">2</NavLink>
              <NavLink to="#">3</NavLink>
              </div>
              </div>
              <NavLink to="/about">About</NavLink>
            </li>


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
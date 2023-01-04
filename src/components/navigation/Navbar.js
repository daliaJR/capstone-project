import { NavLink } from 'react-router-dom';
import './navbar.css';
import Logo from './Logo.svg';


      const Navbar = () => {
        return (
          <nav className="navbar">
            <div className="container">
              <div className='logo_container'>  <img src={Logo} alt="logo"/>
            <p className='healing'>healing</p></div>
          
              <div className="nav-elements">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">Contact us</NavLink>
                
                  </li>
                  <li>
                    <NavLink to="/login" className="loginbtn">Login</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
      }
      
      export default Navbar
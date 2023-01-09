import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../images/HB.svg';
import { ReactComponent as Brand } from '../images/Logo.svg';
import { ReactComponent as Dropdown } from '../images/Dropdown.svg';
import '../styles/Navstyle.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState({
    text: 'About',
    classForCss: 'drop_unactive',
  });
  function changeActive(event) {
    setActiveDropdown({
      text: event.target.innerText,
      classForCss: 'drop_active',
    });
  }
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  function deActiveate() {
    setActiveDropdown({
      text: activeDropdown.text,
      classForCss: 'drop_unactive',
    });
  }
  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="Logo">
          <Brand />
          <p className="healing">Healing</p>
        </div>
        <button
          type="button"
          className="hamburger_menu"
          onClick={handleShowNavbar}
        >
          <Hamburger />
        </button>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <button type="button" onClick={deActiveate}>
                <NavLink to="/">Home</NavLink>
              </button>
            </li>
            <li>
              <button type="button" onClick={deActiveate}>
                <NavLink to="/blogs">Blogs</NavLink>
              </button>
            </li>

            <li>
              <div className="dropdown">
                <button className={activeDropdown.classForCss} type="button">
                  {activeDropdown.text}
                </button>
                <Dropdown className="dropbtn" />
                <button
                  className="dropdown-content"
                  onClick={changeActive}
                  type="button"
                >
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/story">Story</NavLink>
                  <NavLink to="/team">Team</NavLink>
                </button>
              </div>
            </li>

            <li>
              <button type="button" onClick={deActiveate}>
                <NavLink to="/contact">Contact</NavLink>
              </button>
            </li>
            <li>
              <div className="loginbtn">
                <NavLink to="/login" id="login">
                  Login
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

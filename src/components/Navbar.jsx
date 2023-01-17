import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../images/HB.svg';
import { ReactComponent as Brand } from '../images/Logo.svg';
import { ReactComponent as Dropdown } from '../images/Dropdown.svg';
import '../styles/Navstyle.css';

import { AuthContext } from '../pages/Authentic';

const Navbar = () => {
  const user = useContext(AuthContext);
  // console.log(user, 'user in nav');

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
            {!user.authUser ? (
              <li>
                <div className="loginbtn">
                  <NavLink to="/login" id="login">
                    Login
                  </NavLink>
                </div>
              </li>
            ) : (
              <li>
                <button
                  type="button"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={user.userSignOut}
                >
                  signout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

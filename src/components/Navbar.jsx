import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeSignedToFalse } from '../features/signed/signedUserSlice';
import { auth } from '../firebase';
import { ReactComponent as Hamburger } from '../images/HB.svg';
import { ReactComponent as Brand } from '../images/Logo.svg';
import { ReactComponent as Dropdown } from '../images/Dropdown.svg';
import '../styles/Navstyle.css';

import { AuthContext } from '../pages/Authentic';

const Navbar = () => {
  const isSigned = useSelector((state) => state.signed.signed);
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function signUserOut() {
    signOut(auth).then(() => {
      localStorage.removeItem('isauthenticated');
      dispatch(changeSignedToFalse());
    });
  }
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
                <NavLink to={`/blogs/${'KpOg9FnStfRokLpIh2dW'}`}>Blogs</NavLink>
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
                  <NavLink to="/editprofile">Profile</NavLink>
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
                {isSigned ? (
                  <button type="button" onClick={signUserOut}>
                    Sign out
                  </button>
                ) : (
                  <button
                    type="button"
                    id="login"
                    onClick={() => navigate('./login')}
                  >
                    Login
                  </button>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

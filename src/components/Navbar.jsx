import { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../images/HB.svg';
import { ReactComponent as Brand } from '../images/Logo.svg';
import { ReactComponent as Dropdown } from '../images/Dropdown.svg';
import '../styles/Navstyle.css';
import { AuthContext } from '../pages/Authentic';

const Navbar = () => {
  const user = useContext(AuthContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
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
                  {user.authUser && (
                    <NavLink to="/editprofile">Profile</NavLink>
                  )}
                  <NavLink to="/therapistprofile">Therapist Profile</NavLink>
                  <NavLink to="/career">Career</NavLink>
                  <NavLink to="/payment">Payment</NavLink>
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
                {!user.authUser ? (
                  <button
                    type="button"
                    id="login"
                    onClick={() => navigate('./login')}
                  >
                    Login
                  </button>
                ) : (
                  <button type="button" onClick={user.userSignOut}>
                    Sign out
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

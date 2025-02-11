import React from "react";
import { NavLink, useNavigate, } from "react-router-dom";
import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate(); 
  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear token
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home
  };
  

  return (
    <nav className="navbar">
      <h4>EMart Store</h4>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        {isLoggedIn && <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>}
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </ul>
      <div className="auth-buttons">
        {!isLoggedIn ? (
          <button className="Authbtns" onClick={handleLogin}>Login</button>
        ) : (
          <button className="Authbtns" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

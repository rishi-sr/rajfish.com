import React, { useState } from 'react'
import './navbar.scss'
import { IoLogoWhatsapp } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";

const whatsappNumber = "919241919193";

const Navbar = () => {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0); 
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order.`;

  return (
    <>
    <div className="nav">
      <div className="navbar">
        {/* logo */}
        <div className="logo">
          <div className="img">
            <img src="logo.png" alt="Logo" />
          </div>
        </div>

        {/* links */}
        <div className={`links ${menuOpen ? "open" : ""}`}>
          <ul>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li className={location.pathname === '/' ? 'active' : ''}>
                <div className="uline"></div>Home<div className="lline"></div>
              </li>
            </Link>

            <Link to="/seafood" onClick={() => setMenuOpen(false)}>
              <li className={location.pathname === '/seafood' ? 'active' : ''}>
                <div className="uline"></div>Sea Food<div className="lline"></div>
              </li>
            </Link>

            <Link to="/freshfish" onClick={() => setMenuOpen(false)}>
              <li className={location.pathname === '/freshfish' ? 'active' : ''}>
                <div className="uline"></div>Fresh Fish<div className="lline"></div>
              </li>
            </Link>

            <Link to="/smallfish" onClick={() => setMenuOpen(false)}>
              <li className={location.pathname === '/smallfish' ? 'active' : ''}>
                <div className="uline"></div>Small Fish<div className="lline"></div>
              </li>
            </Link>

            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <li className={location.pathname === '/cart' ? 'active' : ''}>
                <div className="uline"></div>
                <span className="cart">
                  <IoMdCart /> Cart
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </span>
                <div className="lline"></div>
              </li>
            </Link>
          </ul>
        </div>

        {/* contact */}
        <div className="contact">
          <div className="wicon"><IoLogoWhatsapp /></div>
          <div className="num">
            <div className="ordernow">Order Now</div>
            <div className="number">
              <a href={whatsappLink} target='_blank' rel="noreferrer">
                (+91) 92419 19193
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* menubar */}
      <div className={`menubar ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className="span">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div className={`menu-overlay ${menuOpen ? "show" : ""}`}>
      <div className={`menumain ${menuOpen ? "show" : ""}`}>
        {/* row 1 */}
        <div className="menurow">
          <div className="imglogo">
            <Link to="/" onClick={ToggleEvent}>
              <img src="logo.png" alt="Logo" />
            </Link>
          </div>
        </div>

      {/* row 2 */}
      <div className="row2">
        {/* quicklinks */}
        <div className="quicklinks">
          <div className="links1">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/" ><div className="hyphen"></div>Home</Link></li>  
              <li><Link to="/seafood" ><div className="hyphen"></div>Sea Food</Link></li>
              <li><Link to="/freshfish" ><div className="hyphen"></div>Fresh Fish</Link></li>
              <li><Link to="/smallfish" ><div className="hyphen"></div>Small Fish</Link></li>
            </ul>
          </div>
        </div>
        {/* open timing */}
        <div className="timing">
          <div className="timedetails">
            <h2>Store Open Timing</h2>
            <ul>
              <li>Mon - Sat: 8:00 AM - 8:00 PM</li>
              <li>Sun: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        {/* contact info */}
        <div className="contactinfo">
          <div className="con-info">
            <h2>Contact Info</h2>
            <ul>
              <li>Phone: <a href={whatsappLink} target='_blank' rel="noreferrer">(+91) 92419 19193</a></li>
              <li>Email: <a href="mailto:info@rajfish.com">info@rajfish.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;

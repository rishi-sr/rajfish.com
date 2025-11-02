import React, { useState } from 'react';
import './navbar.scss';
import { IoLogoWhatsapp } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { IoMdCart } from "react-icons/io";
import { useCart } from '../../context/CartContext';
import { ImEyeBlocked } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";

const whatsappNumber = "919241919193";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, clearCart, CartOpen, setCartOpen } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.total, 0);

  const whatsappMessage = encodeURIComponent(
    `Hello, I would like to place an order:\n\n${cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} - ${item.quantity} kg x Rs.${item.price} = Rs.${item.total}`
      )
      .join("\n")}\n\nTotal: Rs.${totalAmount}\n\nPlease confirm my order.`
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleProceed = () => {
    if (cart.length === 0) return;
    window.open(whatsappLink, '_blank');
    clearCart();
    setcartOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

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

              <li onClick={() => setcartOpen(!cartOpen)}>
                <div className="uline"></div>
                <span className="cart">
                  <IoMdCart /> Cart
                  {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                </span>
                <div className="lline"></div>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div className="contact">
            <div className="wicon"><IoLogoWhatsapp /></div>
            <div className="num">
              <div className="ordernow">Order Now</div>
              <div className="number">
                <a href={`https://wa.me/${whatsappNumber}`} target='_blank' rel="noreferrer">
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


      {/* MENU OVERLAY */}
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
              <li><Link to="/" onClick={closeMenu}><div className="hyphen"></div>Home</Link></li>  
              <li><Link to="/seafood" onClick={closeMenu}><div className="hyphen"></div>Sea Food</Link></li>
              <li><Link to="/freshfish" onClick={closeMenu}><div className="hyphen"></div>Fresh Fish</Link></li>
              <li><Link to="/smallfish" onClick={closeMenu}><div className="hyphen"></div>Small Fish</Link></li>
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


      {/* ✅ Cart Section */}
      <div className={`addtocarts ${CartOpen ? "show" : ""}`}>
        <div className="cartmain">
          <div className="cross" onClick={()=>setCartOpen(!CartOpen)}><RxCross1 /></div>
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <div className="empty">
              <p className='emptyic'><ImEyeBlocked /></p>
              <p className='emptytext'>Your Cart is Empty</p>
            </div>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item, index) => (
                  <li key={index}>
                    <span>{item.name}</span>
                    <span>{item.quantity} x Rs.{item.price}</span>
                    <span>= Rs.{item.total}</span>
                  </li>
                ))}
              </ul>

              <div className="cart-footer">
                <div className="total">
                  <strong>Total:</strong> Rs.{totalAmount}
                </div>
                <button className="proceed-btn" onClick={handleProceed}>
                  Proceed
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

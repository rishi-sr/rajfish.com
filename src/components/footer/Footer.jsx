import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail, MdAddCall } from "react-icons/md";
import { GrLocationPin } from "react-icons/gr";

const social=[
  {url:"", src: <FaFacebookF />},
  {url:"", src: <FaInstagram />},
  {url:"", src: <FaWhatsapp />}
]
const Footer = () => {
  return (
    <div className='footer'>

      {/* section */}
      <div className="fsection">
          <div className="f_data">
            <div className="f_head">

              <div className="quicklinks1">
                <h2>Quick Links</h2>
                <ul>
                  <Link to="/"><div className="span"></div><li>Menu</li></Link>
                  <Link to="/seafood"><div className="span"></div><li>Seafood</li></Link>
                  <Link to="/freshfish"><div className="span"></div><li>Fresh Fish</li></Link>
                  <Link to="/smallfish"><div className="span"></div><li>Small Fish</li></Link>
                  <Link to="/Contact"><div className="span"></div><li>Contact</li></Link>
                </ul>
              </div>

              <div className="openhours">
                <h2>Open Hours</h2>
                <ul>
                  <li><div className="span"></div>Mon - Sat: 8:00 AM - 8:00 PM</li>
                  <li><div className="span"></div>Sun: 9:00 AM - 6:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="f_det">
            <div className="shopadd">
              <h2>Shop Address</h2>
              <p><div className="f_ic"><GrLocationPin /></div>Patna, Bihar, India</p>
            </div>
            <div className="email">
              <h2>Email Address</h2>
              <p><div className="f_ic"><MdEmail /></div>XXXXXXXXXXXXX</p>
            </div>
            <div className="contact">
              <h2>Contact Number</h2>
              <p><div className="f_ic"><MdAddCall /></div>
              92419 19193</p>
            </div>
          </div>
          <hr />
          <div className="copyright">
            <p>© 2025 · Provided by Purpul Digital</p>
          </div>
      </div>

      {/* banner */}
      <div className="f_banner">
        <div className="f_overlay">
          <img src="overlay.png" alt="" />
        </div>
        <div className="logo-head">
          <img src="logo.png" alt="" />
        </div>
        <div className="f_para">
          <p>The best Fish selling shop in Patna. Patna’s Freshest Catch, Every Day!</p>
        </div>
        <div className="f_social">
          {social.map((i, key)=>(
            <div className="f_icon" key={key}>
              <Link to={i.url}>{i.src}</Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Footer

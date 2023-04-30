import React from 'react'
import './footer.css'
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  return (
  <footer>
  <div class="footer-section">
  <img src='https://res.cloudinary.com/dkcazf954/image/upload/v1682628918/redoxlogo_1_cfljyp.png' alt='redox-logo' />
  <p>Financial Freedom for All.</p>
  </div>
  <div className="footer-section">
    <ul>
      <li><a href='/about'>About</a></li>
      <li><a href='/crypto-news'>Crypto News</a></li>
      <li><a href='/free-resources'>Free Resources</a></li>
      <li><a href='http://t.me/insideredox' target='blank'>Community</a></li>
    </ul>
    <div className="copyright">
  <p>© 2023 RedoX Trading, Inc. | 

   All Rights Reserved.</p>
  </div>
  </div>
  <div className="footer-section">
    <h4>Follow Us</h4>
    <ul className="social-media">
      <li><a href="https://twitter.com/insideredox" target='blank'><FaTwitter /></a></li>
      {/* <li><a href="#"><FaLinkedin /></a></li> */}
      <li><a href="mailto:me@redox.com.ng" target='blank'><AiOutlineMail /></a></li>
    </ul>
    <div className="button">
    <button>Subscribe</button>
    </div>
  </div>
  
</footer>

  )
}

export default Footer
import React from 'react'
import './footer.css'

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://facebook.com/dvlprkrishna" target='_blank'><FaFacebookF /></a>
        <a href="https://instagram.com/dvlprkrishna" target='_blank'><FiInstagram /></a>
        <a href="https://twitter.com/dvlprkrishna" target='_blank'><IoLogoTwitter /></a>
      </div>
      <small className='footer__copyright'> &copy; {new Date().getFullYear()} All rights reserved. - Made with ❤️ in India - Designed & Coded by Krishna Sahu</small>
    </footer>
  )
}

export default Footer
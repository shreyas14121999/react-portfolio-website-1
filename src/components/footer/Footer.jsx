import React from 'react'
import './footer.css'
import {CiFacebook} from 'react-icons/ci'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JSK</a>

      <ul className='permalinks'>
        <li > <a href="#">Home</a> </li>
        <li > <a href="#about">About</a> </li>
        <li > <a href="#experience">Experience</a> </li>
        {/* <li > <a href="#services">Services</a> </li> */}
        <li > <a href="#portfolio">Portfolio</a> </li>
        {/* <li > <a href="#testmonials">Testmonials</a> </li> */}
        <li > <a href="#contact">Contact</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100009446139344" target='_blank'> <CiFacebook/> </a>
        <a href="https://www.instagram.com/__shreyas__joshi__/" target='_blank'><BsInstagram/></a>
        <a href="https://github.com/shreyas14121999" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/shreyas-joshi-462697163/" target='_blank'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Joshi Shreyas K. All rights reserved </small>
      </div>
    </footer>
  )
}

export default footer

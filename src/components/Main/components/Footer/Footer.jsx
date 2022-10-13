import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section className='footer-section'>
      <div className='footer-info'>
        <h4 className='footer-info-title'>Information</h4>
        <div className='footer-info-item'><a href='#services'>Services</a></div>
        <div className='footer-info-item'><a href='#about'>About</a></div>
        <div className='footer-info-item'><a href='#contact'>Contact</a></div>
      </div>
      <div className='footer-socials'>
        <h4 className='footer-socials-title'>Social Media</h4>
        <div className='footer-socials-icons'>
          <div className='footer-icon'><FontAwesomeIcon icon={fab.faFacebook} /></div>
          <div className='footer-icon'><FontAwesomeIcon icon={fab.faInstagram} /></div>
        </div>
      </div>
     </section>
  )
}

export default Footer
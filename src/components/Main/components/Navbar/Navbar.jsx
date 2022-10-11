import React from 'react'
import './NavBar.scss'
import Logo from '../common/Logo/Logo'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-container-list'>
        <div className='nav-container-logo'><Logo /></div>
        <div className='nav-container-menu'>
          {/* <div className='nav-menu-item'>Home</div> */}
          <div className='nav-menu-item'><a href='#services'>Services</a></div>
          <div className='nav-menu-item'><a href='#about'>About</a></div>
          <div className='nav-menu-item'><a href='#contact'>Contact</a></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
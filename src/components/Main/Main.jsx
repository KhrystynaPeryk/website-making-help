import React from 'react'
import './Main.scss'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const Main = () => {
  const modal = useSelector((state) => state.isModalOpen);
  return (
    <div className={modal ? 'main-container-page modal-overlay' : 'main-container-page'}>
    {/* <div className='main-container-page' > */}
      <nav className='navbar-container'>
        <Navbar />
      </nav>
      <div className='home-section-container'>
        <Home />
      </div>
      <div className='services-section-container'>
        <Services />
      </div>
      <div className='about-section-container'>
        <About />
      </div>
      <div className='contact-section-container'>
        <Contact />
      </div>
      <footer className='footer-container'>
        <Footer />
      </footer>
    </div>
  )
}

export default Main
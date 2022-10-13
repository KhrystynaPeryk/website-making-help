import React from 'react'
import './Home.scss'
import Button from '../common/Button/Button'

const Home = () => {
  return (
    <section className='home-section'>
      <div className='home-section-content'>
        <h1>IT Services</h1>
        <p>Do you need help with creating a custom website?</p>
        <Button buttonText='Ask Us' />
      </div>
      <div className='home-section-img'></div>
    </section>
  )
}

export default Home
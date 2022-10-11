import React from 'react'
import './Home.scss'
import Button from '../common/Button/Button'

const Home = () => {
  return (
    <section className='home-section'>
        <h1>IT Services</h1>
        <p>Do you need help with creating a custom website?</p>
        <Button buttonText='Ask Us' />
    </section>
  )
}

export default Home
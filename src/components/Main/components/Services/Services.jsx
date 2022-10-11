import React from 'react'
import './Services.scss'
import Button from '../common/Button/Button'

const Services = () => {
  return (
    <section className='services-section' id='services'>
      <h1 className='services-section-title'>Our Services</h1>
      <div className='services-cards-container'>
        <div className='service-card'>
          <h3>Website development</h3>
          <Button buttonText='Get a quote' />
        </div>
        <div className='service-card'>
          <h3>Customer Support</h3>
          <Button buttonText='Get a quote' />
        </div>
        <div className='service-card'>
          <h3>Cloud Consulting</h3>
          <Button buttonText='Get a quote' />
        </div>
      </div>
    </section>
  )
}

export default Services
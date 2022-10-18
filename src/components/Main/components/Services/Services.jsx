import React from 'react'
import './Services.scss'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../../../../store/actions/actions'
import Button from '../common/Button/Button'
import Modal from '../Modal/Modal'

// we need redux to control modal state here (open a modal by clicking a get quote), and style Modal in Main.jsx
const Services = () => {
  const ourServices = {
    service1: 'Website development',
    service2: 'Customer Support',
    service3: 'Cloud Consulting'
  }

  const modal = useSelector((state) => state.isModalOpen);
  const dispatch = useDispatch();

  const handleQuoteRequest = (service) => {
    console.log(service)
    dispatch(openModal())
  }
  return (
    <section className='services-section' id='services'>
        <div>
          <h1 className='services-section-title'>Our Services</h1>
          <div className='services-cards-container'>
            <div className='service-card'>
              <h3>{ourServices.service1}</h3>
              <Button buttonText='Get a quote' onClick={() => handleQuoteRequest(ourServices.service1)} />
            </div>
            <div className='service-card'>
              <h3>{ourServices.service2}</h3>
              <Button buttonText='Get a quote' onClick={() => handleQuoteRequest(ourServices.service2)} />
            </div>
            <div className='service-card'>
              <h3>{ourServices.service3}</h3>
              <Button buttonText='Get a quote' onClick={() => handleQuoteRequest(ourServices.service3)} />
            </div>
          </div>
        </div>
        <div className='modal-container' style={modal ? {'display' : 'block'} : {'display' : 'none'}}>
          <Modal />
        </div>
    </section>
  )
}

export default Services
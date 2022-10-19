import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../../store/actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './Modal.scss'
import Button from '../common/Button/Button'

const Modal = () => {
  const [inputs, setInputs] = useState({});

  const [isQuoteFormSubmitted, setIsQuoteFormSubmitted] = useState(false)
  const dispatch = useDispatch();
  const service = useSelector((state) => state.clientService);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const handleCancelRequest = () => {
    dispatch(closeModal())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('quote request form submitted')
    console.log({...inputs, service: service?.type})
    setIsQuoteFormSubmitted(true);
  }
  return (
    <div className='modal-wrapper'>
      <div className='modal-header'>
        <h3>Your Quote Request</h3>
        <div className='modal-close-button' onClick={handleCloseModal}><FontAwesomeIcon icon={faXmark} /></div>
      </div>
      <div className='modal-info-text'>
        <p>In order to give you an accurate quote about your <b>{service?.type.toUpperCase()}</b> project, we would like to get more details about it.</p>
      </div>
      {isQuoteFormSubmitted ? (
        <div className='sent-request-confirmation'>
          <p>Your quote request has been submitted. We will reply within 24 hours.</p>
        </div>
      ) : (
        <form className='quote-request-form' onSubmit={handleSubmit}>
          <div className='quote-input-line'>
            <input className='quote-form-input' onChange={handleChange} value={inputs.name || ''} type='text' placeholder='      Name' name='name' required></input>
            <span className='contact-icons'><FontAwesomeIcon icon={faUser} /></span>
          </div>
          <div className='quote-input-line'>
              <input className='quote-form-input' onChange={handleChange} value={inputs.email || ''} type='email' placeholder='      Email' name='email' required></input>
              <span className='contact-icons'><FontAwesomeIcon icon={faEnvelope}/></span>
          </div>
          <div className='quote-input-line'>
            <textarea className='quote-form-input' onChange={handleChange} value={inputs.message || ''} rows='5' placeholder='Message' name='message'></textarea>
          </div>
          <Button buttonText='Send a message' type='submit' />
          <Button buttonText='Cancel' onClick={handleCancelRequest} />
        </form>
      )}
    </div>
  )
}

export default Modal
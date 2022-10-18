import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../../store/actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Modal.scss'
import Button from '../common/Button/Button'
// dispatch(closeModal())
const Modal = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isQuoteFormSubmitted, setIsQuoteFormSubmitted] = useState(false)
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('quote request form submitted')
    setIsQuoteFormSubmitted(true);
  }
  return (
    <div className='modal-wrapper'>
      <div>
        <h3>Your Quote Request</h3>
        <div><Button buttonText={'X'} onClick={handleCloseModal}/></div>
      </div>
      <p>In order to give you an accurate quote, we would like to get more details regarding your project.</p>
      {isQuoteFormSubmitted ? (
        <div>
          <p>Your quote request has been submitted. We will reply within 24 hours</p>
        </div>
      ) : (
        <form className='quote-request-form' onSubmit={handleSubmit}>
          <div className='input-line'>
            <input className='form-input' onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='      Name' name='name' required></input>
            <span className='contact-icons'><FontAwesomeIcon icon={faUser} /></span>
          </div>
          <div className='input-line'>
              <input className='form-input' onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='      Email' name='email' required></input>
              <span className='contact-icons'><FontAwesomeIcon icon={faEnvelope}/></span>
          </div>
          <div className='input-line'>
            <textarea className='form-input' onChange={(e) => setMessage(e.target.value)} value={message} rows='5' placeholder='Message' name='message'></textarea>
          </div>
          <Button buttonText='Send a message' type='submit' />
        </form>
      )}
    </div>
  )
}

export default Modal
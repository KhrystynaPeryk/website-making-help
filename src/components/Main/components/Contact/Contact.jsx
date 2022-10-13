import React, { useState } from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';
import Button from '../common/Button/Button'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    setIsContactFormSubmitted(true)
    console.log(`Message submitted: ${message} from ${name}, ${email}`)
  }

//   const btn = document.getElementById('button');

// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_vp66kxe';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });

  return (
    <section className='contact-section' id='contact'>
      <div className='contact-section-box'>
        <div className='contact-section-img'></div>
        <div className='form-container'>
          <h1 className='contact-section-title'>Get in Touch</h1>
          {isContactFormSubmitted ? (
            <div className='form-sent-confirmation'>
              <p>The contact form has been submitted.</p>
              <p>Thank you!</p>
            </div>
          ) : (
            <form method='POST' action='mailto: kristik991@gmail.com' className='contact-form' onSubmit={handleSubmit}>
              <div className='input-line'>
                <input className='form-input' onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='      Name' name='name' required></input>
                <span className='contact-icons'><FontAwesomeIcon icon={faUser} /></span>
              </div>
              <div className='input-line'>
                <input className='form-input' onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='      Email' name='email' required></input>
                <span className='contact-icons'><FontAwesomeIcon icon={faEnvelope}/></span>
              </div>
              <div className='input-line'>
                <textarea className='form-input' onChange={(e) => setMessage(e.target.value)} value={message} rows='5' placeholder='Message'></textarea>
              </div>
              <Button buttonText='Send a message' type='submit' />
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact

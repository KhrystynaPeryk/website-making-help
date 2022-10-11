import React from 'react'
import './Button.scss'

const Button = ({ buttonText, onClick, type }) => {
  return (
    <button onClick={onClick} type={type} className='btn'>{buttonText}</button>
  )
}

export default Button
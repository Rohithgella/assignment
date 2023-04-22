import React from 'react'
import './Card.css'
import { useContext } from 'react';
import { themeContext } from '../../Context';
function Card({emoji,heading,details}) {
  return (
    <div className='card'>
        <img src={emoji}/>
        <span>{heading}</span>
        <span>{details}</span>
        
        <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Card
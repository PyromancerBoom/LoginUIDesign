import React from 'react'
import imagegif from './../../../Logo/LogoWhite.png'
import './carousel.css'

const Carousel = () => {
  return (
    <div className='carousel'>
        <img src={imagegif} alt='gif' />
    </div>
  )
}

export default Carousel
import React from 'react'
import './left.css'
import Carousel from './Carousel/Carousel'

const ContainerL = () => {
  return (
    <div className='bodyL'>
      <h3 className='title'>Changing the world, one step at a time.</h3>
      <div className="images">
      <Carousel />
      </div>
      <h3 className='title subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime corporis ipsa illum eligendi quod voluptatum expedita mollitia a voluptate.
        </h3>
    </div>
  )
}

export default ContainerL
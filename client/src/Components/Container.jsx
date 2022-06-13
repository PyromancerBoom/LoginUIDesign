import React from 'react'
import ContainerR from './RightSide/ContainerR'
import ContainerL from './LeftSide/ContainerL'
import './container.css'

const Container = () => {
  return (
      <div className='container'>
          <div className="left">
          <ContainerL />
          </div>
          <div className="right">
          <ContainerR />
          </div>
      </div>
  )
}

export default Container
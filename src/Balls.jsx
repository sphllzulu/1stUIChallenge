import './Balls.css'

import React from 'react'

const Balls = () => {
  return (
    <div className='balls-container'>
        <div class="bar">
      <span class="label">Photoshop Design</span>
      <div class="progress1 beige">
        <div class="ball"></div>
      </div>
    </div>
    <div class="bar">
      <span class="label">Brand experience</span>
      <div class="progress2 orange">
        <div class="ball"></div>
      </div>
    </div>
    <div class="bar">
      <span class="label">Mobile Development</span>
      <div class="progress3 red">
        <div class="ball"></div>
      </div>
    </div>

    </div>
  )
}

export default Balls
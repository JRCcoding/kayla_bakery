import React from 'react'
import { Fade } from 'react-reveal'
import About from '../Components/About'
import Meta from '../Components/Meta'

const AboutScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='About LNC Treats' />
      <Fade up>
        <About />
      </Fade>
    </div>
  )
}

export default AboutScreen

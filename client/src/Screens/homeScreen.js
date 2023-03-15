import React from 'react'
import ProductCarousel from '../Components/ProductCarousel'
// import ValentineCarousel from '../Components/ValentineCarousel'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'
import Meta from '../Components/Meta'

const HomeScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='Kaylala Kakes' />
      <Fade up>
        <ProductCarousel />
        {/* <ValentineCarousel /> */}
      </Fade>

      <Fade up>
        <Contact />
      </Fade>
    </div>
  )
}

export default HomeScreen

import React from 'react'
import ProductCarousel from '../Components/ProductCarousel'
import ValentineCarousel from '../Components/ValentineCarousel'
import SellingPoints from '../Components/SellingPoints'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'
import Meta from '../Components/Meta'

const HomeScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title="Lauryn's Next-door Cottage" />
      <Fade up>
        <ProductCarousel />
        {/* <ValentineCarousel /> */}
      </Fade>
      <SellingPoints className='selling_points' />
      <Fade up>
        <Contact />
      </Fade>
    </div>
  )
}

export default HomeScreen

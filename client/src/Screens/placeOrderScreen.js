import React from 'react'
import { Fade } from 'react-reveal'
import PlaceOrder from '../Components/PlaceOrder'
import Meta from '../Components/Meta'

const PlaceOrderScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='Place Order' />
      <Fade up>
        <PlaceOrder />
      </Fade>
    </div>
  )
}

export default PlaceOrderScreen

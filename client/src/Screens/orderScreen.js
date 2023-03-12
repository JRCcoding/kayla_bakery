import React from 'react'
import { Fade } from 'react-bootstrap'
import Meta from '../Components/Meta'
import Order from '../Components/Order'

const OrderScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='LNC Order' />
      <Fade up>
        <Order />
      </Fade>
    </div>
  )
}

export default OrderScreen

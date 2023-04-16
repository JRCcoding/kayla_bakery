import React from 'react'
import { Fade } from 'react-bootstrap'
import Meta from '../Components/Meta'
import Request from '../Components/Request'

const RequestScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='Request' />
      <Fade up>
        <Request />
      </Fade>
    </div>
  )
}

export default RequestScreen

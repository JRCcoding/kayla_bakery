import React from 'react'
import { Fade } from 'react-reveal'
import PlaceRequest from '../Components/PlaceRequest'
import Meta from '../Components/Meta'

const PlaceRequestScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='Place Request' />
      <Fade up>
        <PlaceRequest />
      </Fade>
    </div>
  )
}

export default PlaceRequestScreen

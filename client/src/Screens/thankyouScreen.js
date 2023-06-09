import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'

const ThankyouScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='background_pattern' style={{ height: '100vh' }}>
      <Card className='mx-auto w-75 px-5'>
        <h1 className='inline'>Thank you </h1> so much for submitting your
        request! I will get back to you as soon as possible!
      </Card>
    </div>
  )
}

export default ThankyouScreen

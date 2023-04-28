import React, { useEffect, useState } from 'react'
import { Container, Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from '../Components/Message'
import { listProducts } from '../Actions/requestActions'
import '../Styles/Carousel.css'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'

const CakeCarousel = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  // const requestList = useSelector((state) => state.requestList)
  // const { requests } = requestList
  const [requests, setRequests] = useState()
  useEffect(() => {
    const fetchRequests = async () => {
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization: `Bearer ${userInfo.token}`,
      //   },
      // }
      const { data } = await axios.get('/api/products')
      setRequests(data)
    }
    fetchRequests()
  }, [])

  return (
    <Container>
      <Carousel controls={false} className='request_carousel' interval={999999}>
        {requests &&
          requests.slice(0, 13).map((request) => (
            <Carousel.Item key={request.title}>
              {request && request.category !== 'cupcake' && (
                <>
                  <Image
                    src={request.img}
                    alt={request.title}
                    fluid
                    className='request_carousel_image'
                  />

                  <Carousel.Caption>
                    <h2 className='request_carousel_caption font-Pacifico'>
                      {request.title}
                    </h2>
                  </Carousel.Caption>
                </>
              )}
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  )
}

export default CakeCarousel

import React, { useEffect, useState } from 'react'
import { Container, Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listProducts } from '../Actions/requestActions'
import '../Styles/Carousel.css'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'

const CupcakeCarousel = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  // const requestList = useSelector((state) => state.requestList)
  // const { requests } = requestList
  const [requests, setRequests] = useState()
  useEffect(() => {
    const fetchRequests = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const { data } = await axios.get('/api/products', config)
      setRequests(data)
    }
    fetchRequests()
  }, [])

  return (
    <Container>
      <Carousel controls={false} className='request_carousel'>
        {requests &&
          requests.slice(13, 20).map((request) => (
            <Carousel.Item key={request}>
              {request && request.category !== 'cake' && (
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

export default CupcakeCarousel
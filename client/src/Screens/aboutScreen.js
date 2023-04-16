import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import Meta from '../Components/Meta'

const AboutScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='About Kayla' />
      <Fade up>
        <div>
          <Container>
            <Card>
              <Row xs={1} md={1} lg={3} className='text-AccentText'>
                <Col className='about_text'>
                  <p className='about_p'>
                    Hi I’m Kayla Mikel and I’m a home baker located in Katy,
                    T.X.
                    <br />
                    For as long as I can remember baking has been a love of
                    mine; it’s one of the many things that my mom and I bond
                    over. Watching her decorate was one of my favorite things
                    about it; I stood in awe of her, learning every single
                    detail. She has been my teacher, inspiration, and supporter;
                    because of her I became a cake decorator and started Kaylala
                    Kakes in 2018.
                  </p>
                </Col>
              </Row>
            </Card>
          </Container>
        </div>
      </Fade>
    </div>
  )
}

export default AboutScreen

import React from 'react'
import Contact from '../Components/Contact'
import { Fade } from 'react-reveal'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBIcon,
} from 'mdb-react-ui-kit'
import '../Styles/Contact.css'
import Meta from '../Components/Meta'
// import GoogleMaps from '../Components/GoogleMaps'

const contactScreen = () => {
  return (
    <div className='background_pattern'>
      <Meta title='Contact LNC Treats' />
      <Fade up>
        <Contact />
        <div className='map_box'>{/* <GoogleMaps /> */}</div>
        <MDBCard className='contact_info_box'>
          <MDBCardTitle>
            There are plenty of other ways to contact me:
          </MDBCardTitle>
          <MDBCardText className='mx-auto'>
            <ul className='flex flex-row contact_options_link_flex'>
              <MDBCardLink
                href='https://www.facebook.com/LNCsstreats/'
                target='_blank'
                className='contact_options_links'
              >
                <li>
                  <MDBIcon fab icon='facebook-square' />
                  &nbsp; Facebook
                </li>
              </MDBCardLink>
              <MDBCardLink
                href='https://www.instagram.com/lnc_sweetandsavorytreats/'
                target='_blank'
                className='contact_options_links'
              >
                <li>
                  <MDBIcon fab icon='instagram' />
                  &nbsp; Instagram
                </li>
              </MDBCardLink>
              <MDBCardLink
                href='mailto:lncsstreats@gmail.com'
                target='_blank'
                className='contact_options_links'
              >
                <li>
                  <MDBIcon fas icon='envelope' />
                  &nbsp; Email
                </li>
              </MDBCardLink>
            </ul>
          </MDBCardText>
        </MDBCard>
      </Fade>
    </div>
  )
}

export default contactScreen

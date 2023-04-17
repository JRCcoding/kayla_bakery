import '../index.css'
import '../App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Navi.css'

import {
  MDBDropdown,
  MDBIcon,
  MDBNavbarItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { logout } from '../Actions/userActions'

export default function App() {
  const [showBasic, setShowBasic] = useState(false)
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Navbar
      className='bg-Navbar text-white font-Lato'
      expand='xl'
      collapseOnSelect
      fixed='top'
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <h6
              className='d-inline navtitle font-WindSong text-Navtitle'
              style={{ zIndex: '9999', marginTop: '10%', marginBottom: '0' }}
            >
              Kaylala Kakes
            </h6>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls='responsive-navbar-nav'
          // aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
          className='toggler'
        >
          🍰
          {/* 🧁 */}
          {/* <MDBIcon className='burger' fas icon='birthday-cake' />{' '} */}
          {/* &#127874; */}
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            {userInfo ? (
              <MDBDropdown id='username' className='navlink user_nav'>
                <MDBDropdownToggle className='btn-light'>
                  {userInfo.name}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <LinkContainer to='/profile'>
                    <MDBDropdownItem className='font-thin mx-3'>
                      Profile
                    </MDBDropdownItem>
                  </LinkContainer>
                  <MDBDropdownItem
                    onClick={logoutHandler}
                    className='font-thin mx-3'
                  >
                    Logout
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              <LinkContainer to='/login'>
                <MDBNavbarItem className='navlink '>
                  <i className='fas fa-user'></i> Sign In
                </MDBNavbarItem>
              </LinkContainer>
            )}
            {userInfo && userInfo.isAdmin && (
              <LinkContainer to='/admin/requestlist'>
                <MDBNavbarItem className='navlink'>Requests</MDBNavbarItem>
              </LinkContainer>
            )}

            <LinkContainer to='/products'>
              <MDBNavbarItem link className='navlink clickable'>
                Products
              </MDBNavbarItem>
            </LinkContainer>
            {/* <LinkContainer to='/about'>
              <MDBNavbarItem link className='navlink'>
                About
              </MDBNavbarItem>
            </LinkContainer> */}
            <LinkContainer to='/contact'>
              <MDBNavbarItem link className='navlink'>
                Contact
              </MDBNavbarItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

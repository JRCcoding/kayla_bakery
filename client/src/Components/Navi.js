import Logo from '../Images/webp/logo_transparent.webp'
import '../index.css'
import '../App.css'
import React, { useState } from 'react'
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

  return (
    <Navbar
      className='bg-Navbar text-white font-Lato'
      expand='xl'
      collapseOnSelect
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img
              alt=''
              src={Logo}
              width='60'
              height='60'
              className='logo align-top'
            />{' '}
            <h6 className='d-inline navtitle font-Pacifico text-Navtitle'>
              Lauryn's Next-door Cottage
            </h6>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
          className='toggler ms-5'
        >
          <MDBIcon className='burger' fas icon='birthday-cake' />{' '}
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
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
              // <NavDropdown title='Admin' id='adminmenu' className='navlink'>
              //   <LinkContainer to='/admin/userlist'>
              //     <MDBDropdownItem>Users</MDBDropdownItem>
              //   </LinkContainer>
              //   <LinkContainer to='/admin/productlist'>
              //     <MDBDropdownItem>Products</MDBDropdownItem>
              //   </LinkContainer>
              <LinkContainer to='/admin/orderlist'>
                <MDBNavbarItem className='navlink'>Orders</MDBNavbarItem>
              </LinkContainer>
              // </NavDropdown>
            )}
            <LinkContainer to='/cart'>
              <MDBNavbarItem link className='navlink'>
                <i className='fas fa-shopping-cart'></i> Cart
              </MDBNavbarItem>
            </LinkContainer>
            <LinkContainer to='/products'>
              <MDBNavbarItem link className='navlink clickable'>
                Products
              </MDBNavbarItem>
            </LinkContainer>
            <LinkContainer to='/about'>
              <MDBNavbarItem link className='navlink'>
                About
              </MDBNavbarItem>
            </LinkContainer>
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

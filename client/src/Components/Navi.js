import '../index.css'
import '../App.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import '../Styles/Navi.css'
import { BsPersonCircle } from 'react-icons/bs'
import { GiCupcake, GiStairsCake } from 'react-icons/gi'
import PetsIcon from '@mui/icons-material/Pets'
import RestaurantIcon from '@mui/icons-material/Restaurant'

import {
  MDBDropdown,
  MDBIcon,
  MDBNavbarItem,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdb-react-ui-kit'
import {
  Nav,
  Navbar,
  Container,
  Button,
  Form,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap'
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
    <>
      {' '}
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg='#9300d4'
          expand={expand}
          className='navbar'
          fixed='top'
        >
          <LinkContainer to='/'>
            <Navbar.Brand className='d-inline navtitle font-WindSong text-white'>
              Kaylala Kakes
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className='toggler'
          >
            🍰
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement='end'
            style={{ backgroundColor: '#bb1bff', color: 'white' }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                className='font-Pacifico'
              >
                <h1>Kaylala Kakes</h1>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link href='/'>
                  <span className='navlink'>Home</span>
                </Nav.Link>
                <Nav.Link href='/contact'>
                  <span className='navlink'>Contact</span>
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link disabled>
                  <strong>
                    <h2>Products:</h2>
                  </strong>
                </Nav.Link>
                <Nav.Link href='/cakes'>
                  <span className='navlink'>
                    <GiStairsCake className='inline' />
                    &nbsp; Cakes
                  </span>
                </Nav.Link>
                <Nav.Link href='/cupcakes'>
                  <span className='navlink'>
                    <GiCupcake className='inline' />
                    &nbsp; Cupcakes
                  </span>
                </Nav.Link>
                <Nav.Link href='/pupcakes'>
                  <span className='navlink'>
                    <PetsIcon />
                    &nbsp; PupCakes
                  </span>
                </Nav.Link>
                <Nav.Link href='/trifles'>
                  <span className='navlink'>
                    <RestaurantIcon />
                    &nbsp; Trifles
                  </span>
                </Nav.Link>
              </Nav>
              {userInfo ? (
                <>
                  <NavDropdown.Divider />
                  <NavDropdown
                    title={<BsPersonCircle className=' inline ' />}
                    className='navlink'
                  >
                    {userInfo.isAdmin === true && (
                      <>
                        <NavDropdown.Item href='/admin/requestlist'>
                          Requests
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                      </>
                    )}
                    <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link href='/login'>
                    <span className='navlink inline'>
                      <BsPersonCircle className=' inline' />
                      &nbsp; Login
                    </span>
                  </Nav.Link>
                </>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  )
}

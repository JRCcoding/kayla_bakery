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
    // <Navbar
    //   className='bg-Navbar text-white font-Lato'
    //   expand='xl'
    //   collapseOnSelect
    //   fixed='top'
    // >
    //   <Container>
    //     <LinkContainer to='/'>
    //       <Navbar.Brand>
    //         <h6
    //           className='d-inline navtitle font-WindSong text-Navtitle'
    //           style={{ zIndex: '9999', marginTop: '10%', marginBottom: '0' }}
    //         >
    //           Kaylala Kakes
    //         </h6>
    //       </Navbar.Brand>
    //     </LinkContainer>
    //     <Navbar.Toggle
    //       aria-controls='responsive-navbar-nav'
    //       // aria-expanded='false'
    //       aria-label='Toggle navigation'
    //       onClick={() => setShowBasic(!showBasic)}
    //       className='toggler'
    //     >
    //       🍰
    //       {/* 🧁 */}
    //       {/* <MDBIcon className='burger' fas icon='birthday-cake' />{' '} */}
    //       {/* &#127874; */}
    //     </Navbar.Toggle>
    //     <Navbar.Collapse id='responsive-navbar-nav'>
    //       <Nav className='ml-auto'>
    //         {userInfo ? (
    //           <MDBDropdown id='username' className='navlink user_nav'>
    //             <MDBDropdownToggle className='btn-light'>
    //               {userInfo.name}
    //             </MDBDropdownToggle>
    //             <MDBDropdownMenu>
    //               <LinkContainer to='/profile'>
    //                 <MDBDropdownItem className='font-thin mx-3'>
    //                   Profile
    //                 </MDBDropdownItem>
    //               </LinkContainer>
    //               <MDBDropdownItem
    //                 onClick={logoutHandler}
    //                 className='font-thin mx-3'
    //               >
    //                 Logout
    //               </MDBDropdownItem>
    //             </MDBDropdownMenu>
    //           </MDBDropdown>
    //         ) : (
    //           <LinkContainer to='/login'>
    //             <MDBNavbarItem className='navlink '>
    //               <i className='fas fa-user'></i> Sign In
    //             </MDBNavbarItem>
    //           </LinkContainer>
    //         )}
    //         {userInfo && userInfo.isAdmin && (
    //           <LinkContainer to='/admin/requestlist'>
    //             <MDBNavbarItem className='navlink'>Requests</MDBNavbarItem>
    //           </LinkContainer>
    //         )}

    //         <LinkContainer to='/products'>
    //           <MDBNavbarItem link className='navlink clickable'>
    //             Products
    //           </MDBNavbarItem>
    //         </LinkContainer>
    //         {/* <LinkContainer to='/about'>
    //           <MDBNavbarItem link className='navlink'>
    //             About
    //           </MDBNavbarItem>
    //         </LinkContainer> */}
    //         <LinkContainer to='/contact'>
    //           <MDBNavbarItem link className='navlink'>
    //             Contact
    //           </MDBNavbarItem>
    //         </LinkContainer>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
      {' '}
      {['lg'].map((expand) => (
        <Navbar key={expand} bg='#9300d4' expand={expand} className='navbar'>
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
            style={{ backgroundColor: '#9300d4', color: 'white' }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Kaylala Kakes
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                {userInfo ? (
                  <NavDropdown
                    title={userInfo.name}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
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
                ) : (
                  <></>
                )}

                <Nav.Link href='/'>
                  <strong className='navlink'>Home</strong>
                </Nav.Link>
                <Nav.Link href='/products'>
                  <strong className='navlink'>Products</strong>
                </Nav.Link>
                <Nav.Link href='/contact'>
                  <strong className='navlink'>Contact</strong>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      ))}
    </>
  )
}
